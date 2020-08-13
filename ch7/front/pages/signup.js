import React, { useState, useCallback, useEffect } from 'react';
// import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';
import styled from 'styled-components';
import Head from 'next/head';
import { SIGN_UP_REQUEST, LOAD_USER_REQUEST } from '../reducers/user';
import useInput from '../hooks/useInput';
import wrapper from '../store/configureStore';
import AppLayout from '../components/AppLayout';

// const TextInput = memo(({ name, value, onChange }) => (
//   <Input name={name} value={value} required onChange={onChange} />
// ));

const ErrorDiv = styled.div`
  color: red;
`;

const StyledDiv = styled.div`
  margin-top: 10px;
`;

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput(''); // 패스워드
  const [passwordCheck, onChangePasswordCheck] = useInput(''); // 패스워드확인
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({ id, nickname, password, passwordCheck, term });

    // dispatch(signUpAction({ id, password, nickname }));
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        userId: id,
        password,
        nickname },
    });
  }, [id, nickname, password, passwordCheck, term]);

  useEffect(() => {
    setPasswordError(password !== passwordCheck);
  }, [password, passwordCheck]);

  useEffect(() => {
    if (me && me.id) {
      // alert('이미 로그인 되어있어 메인화면으로 이동합니다.')
      Router.push('/');
    }
  }, [me]);

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
  }, []);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          {/* <Input name="user-id" value={id} required  onChange={onChangeId} /> */}
          <Input name="user-id" required value={id} onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" required value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-pass" type="password" required value={password} onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input name="user-password-check" type="password" required value={passwordCheck} onChange={onChangePasswordCheck} />
          {passwordError && <ErrorDiv>비밀번호가 일치하지 않습니다.</ErrorDiv>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다.</Checkbox>
          {termError && <ErrorDiv>약관에 동의하셔야 합니다.</ErrorDiv>}
        </div>
        <StyledDiv>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </StyledDiv>
      </Form>
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
  context.store.dispatch(END);

  await context.store.sagaTask.toPromise();
});

export default Signup;
