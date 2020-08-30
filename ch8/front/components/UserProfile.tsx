import React, { useCallback, memo } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { LOG_OUT_REQUEST } from '../reducers/user';
// import { logoutAction, LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = memo(() => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    // dispatch(logoutAction);
    console.log('로그아웃 버튼 누름');

    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Card
      actions={[
        <Link href="/profile" key="twit">
          <a>
            <div key="twit">
              짹짹
              <br />
              {me.Posts.length}
            </div>
          </a>
        </Link>,
        <Link href="/profile" key="following">
          <a>
            <div key="following">
              팔로잉
              <br />
              {me.Followings.length}
            </div>
          </a>
        </Link>,
        <Link href="/profile" key="follower">
          <a>
            <div key="follower">
              팔로워
              <br />
              {me.Followers.length}
            </div>
          </a>
        </Link>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
});

export default UserProfile;
