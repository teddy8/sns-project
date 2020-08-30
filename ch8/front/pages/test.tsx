import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import styled from 'styled-components';
import PostForm from '../components/PostForm';

// const

const EditModal = () => {
  const [visible, setVisible] = useState(true);

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log('창 닫음', e);
    setVisible(false);
  };

  return (
    <>
      <Modal
        title="게시글 수정하기"
        centered // 중앙에 위치
        closable // 우측상단 닫기버튼 여부
        visible={visible}
        footer={null} // 하단에 있는 OK, Cancel버튼 제거

        // onOk={handleOk}
        onCancel={handleCancel}
      >
        <PostForm />
      </Modal>
    </>
  );
};

export default EditModal;
