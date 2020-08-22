import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import {
  LOAD_USER_REQUEST,
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  REMOVE_FOLLOWER_REQUEST,
  UNFOLLOW_USER_REQUEST,
} from '../reducers/user';

import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
import FollowList from '../components/FollowList';

const Profile = () => {
  const { followerList, followingList } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList
          headerText="팔로잉 목록"
          itemList={followingList}
          LoadRequestAction={LOAD_FOLLOWINGS_REQUEST}
          RemoveFollowRequestAction={UNFOLLOW_USER_REQUEST}
        />
        <FollowList
          headerText="팔로워 목록"
          itemList={followerList}
          LoadRequestAction={LOAD_FOLLOWERS_REQUEST}
          RemoveFollowRequestAction={REMOVE_FOLLOWER_REQUEST}
        />
      </AppLayout>
    </>
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
    type: LOAD_FOLLOWINGS_REQUEST,
    data: {
      offset: 0,
      limit: 3,
    },
  });
  context.store.dispatch({
    type: LOAD_FOLLOWERS_REQUEST,
    data: {
      offset: 0,
      limit: 3,
    },
  });

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Profile;
