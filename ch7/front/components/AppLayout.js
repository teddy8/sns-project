import React from 'react';
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

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  const onSearch = (value) => {
    console.log('value = ', value);
    Router.push(`/hashtag/${value}`);
  };

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <InputSearch enterButton onSearch={onSearch} />
        </Menu.Item>
      </Menu>
      {!me && <Link href="/signup"><a><Button>회원가입</Button></a></Link>}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me
            ? <UserProfile />
            : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} me={6}>
          {/* <Link href={"https://www.zerocho.com"} prefetch={false} ><a target={"_blank"}>Made by ZeroCho</a></Link> */}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

// useEffect(() => {
//     if (!me) {
//         dispatch({
//             type: LOAD_USER_REQUEST,
//         })
//     }
// }, [])
