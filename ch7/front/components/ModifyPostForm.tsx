import React, { useCallback, useState, useRef, useEffect, FC } from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  REMOVE_MODIFY_IMAGE_REQUEST,
  GET_MODIFY_IMAGES_REQUEST,
  UPLOAD_MODIFY_IMAGES_REQUEST,
  ADD_MODIFY_POST_REQUEST,
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

interface Props {
  post,
  modalOpened,
  setModalOpened
}

const ModifyPostForm: FC<Props> = ({ post, modalOpened, setModalOpened }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { modifyPost } = useSelector((state) => state.post);
  const imageInput = useRef();

  useEffect(() => {
    if (modalOpened) {
      setText(post.content);
      dispatch({
        type: GET_MODIFY_IMAGES_REQUEST,
        data: post.id,
      });
    }
  }, [modalOpened]);

  const onSubmitForm = useCallback(() => {
    // e.preventDefault();
    setText('');

    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    const formData = new FormData();

    formData.append('content', text);
    modifyPost.imagePaths.forEach((i) => {
      formData.append('image', i);
    });

    formData.append('postId', post.id);
    console.log('update post id=', post.id);
    dispatch({
      type: ADD_MODIFY_POST_REQUEST,
      data: formData,
    });
    return setModalOpened(false);
  }, [text, modifyPost.imagePaths]);

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
      type: UPLOAD_MODIFY_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onClickImageUpload = useCallback(() => {
    console.log('이미지업로드 버튼 클릭');
    imageInput.current.click();
  }, [imageInput.current]);

  const onClickRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_MODIFY_IMAGE_REQUEST,
      data: {
        postId: post.id,
        imgSrc: modifyPost.imagePaths[index],
      },
    });
  }, [modifyPost.imagePaths]);

  return (
    <StyledForm encType="multipart/form-data" onFinish={onSubmitForm}>
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" onChange={onChangeText} value={text} />
      <div>
        <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <StyledButton type="primary" htmlType="submit" loading={modifyPost.isAdding}>짹짹</StyledButton>
      </div>
      <div>
        {modifyPost.imagePaths.map((v, i) => (
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
};

ModifyPostForm.propTypes = {
  post: PropTypes.object.isRequired,
  modalOpened: PropTypes.bool.isRequired,
  setModalOpened: PropTypes.object.isRequired,
};

export default ModifyPostForm;
