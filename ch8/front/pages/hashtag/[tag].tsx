import React, { useRef, useCallback, useEffect, memo } from 'react';
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import { END, Task } from 'redux-saga';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import PostCard from '../../components/PostCard';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
import wrapper, { IStore } from '../../store/configureStore';
import { LOAD_USER_REQUEST } from '../../reducers/user';
import { Store } from 'redux';

const Hashtag = memo(() => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tag } = router.query;
  const { mainPosts } = useSelector((state) => state.post);

  const limitNum = useRef(10);
  const offsetNum = useRef(0);
  const isCompleted = useRef(false);

  const onScroll = useCallback(() => {
    if ((window.scrollY + document.documentElement.clientHeight) === document.documentElement.scrollHeight) {
      offsetNum.current += limitNum.current;

      dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: {
          tag,
          offset: offsetNum.current,
          limit: limitNum.current,
        },
      });
    }
  }, []);

  const removeEvent = useCallback(() => {
    window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { // ComponentDidMount
    window.addEventListener('scroll', onScroll);
    console.log('이벤트리스너 등록');
  }, []);

  useEffect(() => { // ComponentDidUpdate
    if (mainPosts.isFulfilled && !isCompleted.current) {
      isCompleted.current = true;
      removeEvent();
      console.log('이벤트리스너 제거', isCompleted.current);
    }
  }, [mainPosts.isFulfilled]);

  return (
    <AppLayout>
      {mainPosts.data.map((c) => (
        <PostCard key={+c.id} post={c} />
      ))}
    </AppLayout>
  );
});

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_USER_REQUEST,
  });

  context.store.dispatch({
    type: LOAD_HASHTAG_POSTS_REQUEST,
    data: {
      tag: context.params.tag,
      offset: 0,
      limit: 10,
    },
  });

  const store: IStore = context.store;
  context.store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Hashtag;
