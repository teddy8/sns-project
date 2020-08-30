import React, { FC, ReactElement, useCallback, memo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Router from 'next/router';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const InputSearch = styled(Input.Search)`
  vertical-align:middle
`;

interface Props {
  children: ReactElement[];
}

const AppLayout: FC<Props> = memo(({ children }) => {
  const { me } = useSelector((state) => state.user);

  const onSearch = useCallback((value) => {
    console.log('value = ', value);
    Router.push(`/hashtag/${value}`);
  }, []);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <InputSearch enterButton onSearch={onSearch} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me
            ? <UserProfile />
            : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
        </Col>
      </Row>
    </div>
  );
});

export default AppLayout;