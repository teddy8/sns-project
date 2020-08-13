import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { EDIT_NICKNAME_REQUEST } from '../reducers/user';

const StyledForm = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const NicknameEditForm = () => {
  const [nickname, onChangeNickname] = useInput('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('닉네임 = ', nickname);
    // e.preventDefault();
    dispatch({
      type: EDIT_NICKNAME_REQUEST,
      data: nickname,
    });
  };

  return (
    <StyledForm onFinish={onSubmit}>
      <Input addonBefore="닉네임" onChange={onChangeNickname} />
      <Button type="primary" htmlType="submit">수정</Button>
    </StyledForm>
  );
};

export default NicknameEditForm;
