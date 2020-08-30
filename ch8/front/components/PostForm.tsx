import React, { useCallback, useState, useRef, memo } from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  ADD_POST_REQUEST,
  REMOVE_UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGES_REQUEST,
} from '../reducers/post';

const StyledForm = styled(Form)`
margin-bottom: 20px;

& > img {
  width: 200px;
}
`;

const StyledButton = styled(Button)`
float: right;
`;

const Div = styled.div`
display: inline-block;
`;

const PostForm = memo(() => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { uploadPost } = useSelector((state) => state.post);
  const imageInput = useRef(null);

  const onSubmitForm = useCallback(() => {
    setText('');

    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    const formData = new FormData();

    formData.append('content', text);
    uploadPost.imagePaths.forEach((i) => {
      formData.append('image', i);
    });

    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, uploadPost.imagePaths]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  // 로컬 이미지를 올렸을 때
  const onChangeImages = useCallback((e) => {
    console.log('files = ', e.target.files);

    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });

    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onClickImageUpload = useCallback(() => {
    console.log('이미지업로드 버튼 클릭');
    imageInput.current.click();
  }, [imageInput.current]);

  const onClickRemoveImage = useCallback((index) => () => {
    console.log('클릭한 인덱스 = ', index);
    console.log('saga로 넘긴 데이터', uploadPost.imagePaths[index]);
    dispatch({
      type: REMOVE_UPLOAD_IMAGE_REQUEST,
      data: {
        postId: 0,
        imgSrc: uploadPost.imagePaths[index],
      },
    });
  }, [uploadPost.imagePaths]);

  return (
    <StyledForm encType="multipart/form-data" onFinish={onSubmitForm}>
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" onChange={onChangeText} value={text} />
      <div>
        <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <StyledButton type="primary" htmlType="submit" loading={uploadPost.isAdding}>짹짹</StyledButton>
      </div>
      <div>
        {uploadPost.imagePaths.map((v, i) => (
          <Div key={v}>
            <img src={`http://localhost:3065/${v}`} alt={v} />
            <div>
              <Button onClick={onClickRemoveImage(i)}>제거</Button>
            </div>
          </Div>
        ))}
      </div>
    </StyledForm>
  );
});

export default PostForm;
