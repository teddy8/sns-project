import React, { useCallback } from 'react';
import {Button, Form, Input} from 'antd';
import Link from 'next/link'
import {useInput} from '../pages/signup'
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, LOG_IN_REQUEST } from '../reducers/user';

const LoginForm = () => {
    const [id, onChangeId] = useInput('1212');
    const [password, onChangePassword] = useInput('1212');
    const dispatch = useDispatch();
    const {isLoggingIn} = useSelector(state => state.user)

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        // dispatch(loginAction);
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
              id, password,
            },
          });
        console.log({id, password});
    }, [id, password])

    return (
    <Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
        <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" required value={id} onChange={onChangeId}></Input>
        </div>
        <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword}></Input>
        </div>
        <div>
            <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </div>
    </Form>
    )
}

export default LoginForm