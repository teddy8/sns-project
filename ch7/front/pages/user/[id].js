import React, { useCallback, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar } from 'antd';
// import { LOAD_USER_REQUEST } from '../reducers/user';
// import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import axios from 'axios';
import { END } from 'redux-saga';
import { useRouter } from 'next/dist/client/router';
import PostCard from '../../components/PostCard';
import wrapper from '../../store/configureStore';
import { LOAD_USER_REQUEST } from '../../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';

const User = () => {
  const { mainPosts } = useSelector((state) => state.post);
  const { userInfo, me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const limitNum = useRef(10);
  const offsetNum = useRef(10);
  const router = useRouter();
  const { id } = router.query;

  const onScroll = useCallback(() => {
    if ((window.scrollY + document.documentElement.clientHeight) > document.documentElement.scrollHeight - 300) {
      if (offsetNum.current !== mainPosts.data.length) {
        console.log(offsetNum.current, mainPosts.data.length);
        return;
      }

      dispatch({
        type: LOAD_USER_POSTS_REQUEST,
        data: {
          // offset: offsetNum.current,
          id,
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
      { me && (userInfo.id === me.id)
        ? null
        : (
          <Card
            actions={[
              <div key="twit">
                짹짹
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                팔로잉
                <br />
                {userInfo.Followings}
              </div>,
              <div key="follower">
                팔로워
                <br />
                {userInfo.Followers}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
            />
          </Card>
        ) }

      {mainPosts.data.map((c) => (
        <PostCard key={+c.id} post={c} />
      ))}

      {/* User id = {id} */}
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
    type: LOAD_USER_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: {
      id: context.params.id,
      limit: 10,
    },
  });
  context.store.dispatch(END);

  await context.store.sagaTask.toPromise();
});

export default User;

// LOAD_USER_REQUEST를 dispatch할 때
// data에 값이 없으면 내정보
// data에 값이 있으면 남의 정보

// User.getInitialProps = async (context) => {
//     context.store.dispatch({ // 남의 정보
//         type: LOAD_USER_REQUEST,
//         data: context.query.id,
//     })
//     context.store.dispatch({ // 남의 게시물
//         type: LOAD_USER_POSTS_REQUEST,
//         data: context.query.id,
//     })

//     return { id: parseInt(context.query.id) };
//   };

// useEffect(() => {
//     dispatch({ // 남의 정보
//         type: LOAD_USER_REQUEST,
//         data: id,
//     })
//     dispatch({ // 남의 게시물
//         type: LOAD_USER_POSTS_REQUEST,
//         data: id,
//     })
// }, [])
