import React, { useCallback, useState, useRef } from 'react';
import {Button, Form, Input} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';

const PostForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { imagePaths, isAddingPost } = useSelector(state => state.post);
    const imageInput = useRef();

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        setText('');

        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요.')
        }

        const formData = new FormData();
        imagePaths.forEach((i) => {
            formData.append('image', i);
        });
        formData.append('content', text);
        
        dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        })
    }, [text, imagePaths])

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, [])

    const onChangeImages = useCallback((e) => {
        console.log('files = ', e.target.files);

        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f, i) => {
            imageFormData.append('image', f);
          });

        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        })
    }, [])

    const onClickImageUpload = useCallback(() => {
        console.log('이미지업로드 버튼 클릭');
        imageInput.current.click()
    }, [imageInput.current])

    const onClickRemoveImage = useCallback(index => () => {
        dispatch({
            type: REMOVE_IMAGE,
            index,
        })
    }, [])
    return (
    <Form style={{ marginBottom: 20 }} encType="multipart/form-data" onSubmit={onSubmitForm}>
        <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" onChange={onChangeText} value={text} />
        <div>
            <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
            <Button onClick={onClickImageUpload}>이미지 업로드</Button>
            <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
        </div>
        <div>
            {imagePaths.map((v, i) => {
                return (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button onClick={onClickRemoveImage(i)}>제거</Button>
                        </div>
                    </div>       
                )
            })}
        </div>
    </Form>
    )
}

export default PostForm