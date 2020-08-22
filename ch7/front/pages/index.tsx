import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';
import { LOAD_USER_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
// import Profile from './profile';
import AppLayout from '../components/AppLayout';

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const limitNum = useRef(10);
  const offsetNum = useRef(10);

  const onScroll = useCallback(() => {
    if ((window.scrollY + document.documentElement.clientHeight)
    > document.documentElement.scrollHeight - 300) {
      if (offsetNum.current !== mainPosts.data.length) {
        console.log(offsetNum.current, mainPosts.data.length);
        return;
      }

      dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
        data: {
          // offset: offsetNum.current,
          limit: limitNum.current,
          lastId: mainPosts.data[mainPosts.data.length - 1].id,
        },
      });

      offsetNum.current += limitNum.current;
      console.log('lastid = ', mainPosts.data[mainPosts.data.length - 1].id);
    }
  }, [mainPosts.data.length]);

  useEffect(() => { // ComponentDidMount
    if (mainPosts.isFulfilled === false) {
      window.addEventListener('scroll', onScroll);
    }

    return () => { // ComponentDidUnmount
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.data.length, mainPosts.isFulfilled]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.data.map((c) => (
        <PostCard key={+c.id} post={c} />
      ))}
    </AppLayout>
  );
};

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
    type: LOAD_MAIN_POSTS_REQUEST,
    data: {
      limit: 10,
      // lastId: ,
    },
  });

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;
