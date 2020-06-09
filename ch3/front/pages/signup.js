import React, {useRef, useState, useCallback, useEffect, memo} from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import {Form, Input, Checkbox, Button} from 'antd'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../reducers/user';

const TextInput = memo(({ name, value, onChange }) => {
    return (
        <Input name={name} value={value} required onChange={onChange}></Input>
    )
})

export const useInput = (initValue = null) => {
    const [value, setValue] = useState(initValue);

    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, [])
    return [value, handler]
}

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');  // 패스워드
    const [passwordCheck, onChangePasswordCheck] = useInput(''); // 패스워드확인
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log({id, nickname, password, passwordCheck, term});
        
        dispatch(signUpAction({
            id, password, nickname
        }));

    }, [password, passwordCheck, term])

    useEffect(() => {
        setPasswordError(password !== passwordCheck)
    }, [password, passwordCheck])

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked)
    }, [])

    return (
    <>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                {/* <Input name="user-id" value={id} required  onChange={onChangeId} /> */}
                <TextInput name="user-id" value={id} onChange={onChangeId} />
            </div>
            <div>
            <label htmlFor="user-nickname">닉네임</label>
                <br />
                {/* <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} /> */}
                <TextInput name="user-nickname" value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
            <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-pass" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
                <br />
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                {passwordError && <div style={{ color:'red' }}>비밀번호가 일치하지 않습니다.</div>}
            </div>
            <div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다.</Checkbox>
                {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
            </div>
            <div style={{ marginTop: 10 }}>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
        </Form>
    </>
    )
}

export default Signup;