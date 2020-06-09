import React, {useState} from 'react'
import {Form, Input, Button} from 'antd'
import { useInput } from '../pages/signup'
import { useDispatch } from 'react-redux'
import { EDIT_NICKNAME_REQUEST } from '../reducers/user'

const NicknameEditForm = () => {
    const [nickname, onChangeNickname] = useInput('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        console.log('닉네임 = ', nickname);
        e.preventDefault()
        dispatch({
            type: EDIT_NICKNAME_REQUEST,
            data: nickname
        })
    }

    return (
        <Form onSubmit={onSubmit} style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }}>
            <Input addonBefore="닉네임" onChange={onChangeNickname} />
            <Button type="primary" htmlType="submit">수정</Button>
        </Form>
    )
}

export default NicknameEditForm;