import React, { useCallback, memo } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { LOG_IN_REQUEST } from '../reducers/user';

const StyledForm = styled(Form)`
  padding: 10px;
`;

const LoginError = styled.div`
  color: red;
`

const LoginForm = memo(() => {
  const [id, onChangeId] = useInput('1');
  const [password, onChangePassword] = useInput('1234');
  const dispatch = useDispatch();
  const { isLoggingIn, loginErrorReason } = useSelector((state) => state.user);

  const onSubmitForm = useCallback(() => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId: id,
        password,
      },
    });
    console.log({ id, password });
  }, [id, password]);

  return (
    <StyledForm onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" required value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
      </div>
      {loginErrorReason && <LoginError>{loginErrorReason}</LoginError>}
      <div>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </StyledForm>
  );
});

export default LoginForm;
