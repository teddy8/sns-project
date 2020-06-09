import React, { useCallback, useState } from 'react';
import {Button, Form, Input} from 'antd';
import {useInput} from '../pages/signup'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { imagePaths, isAddingPost } = useSelector(state => state.post);

    const onSubmitForm = useCallback((e) => {
        setText('');
        e.preventDefault();
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text
            }
        })
    }, [])

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, [])

    return (
    <Form style={{ marginBottom: 20 }} encType="multipart/form-data" onSubmit={onSubmitForm}>
        <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" onChange={onChangeText} value={text} />
        <div>
            <input type="file" multiple hidden />
            <Button>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
        </div>
        <div>
            {imagePaths.map((v, i) => {
                return (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={'https://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>       
                )
            })}
        </div>
    </Form>
    )
}

export default PostForm