import React, { useCallback, useState, FC } from 'react';
import PropTypes from 'prop-types';
import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import ImagesZoom from './ImazesZoom';
import Image from '../../back/models/image'

const Div = styled.div`
display: inline-block;
width: 50%;
text-align: center;
vertical-align: middle;
`;

interface Props {
  images: Image[];
}

const PostImages: FC<Props> = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <div>
          <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} width="50%" onClick={onZoom} />
          <img role="presentation" src={`http://localhost:3065/${images[1].src}`} alt={images[1].src} width="50%" onClick={onZoom} />
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  // 이미지나 더보기를 클릭하면 ImagesZoom을 로딩함
  return (
    <>
      <div>
        <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} width="50%" onClick={onZoom} />
        <Div role="presentation" onClick={onZoom}>
          <PlusCircleOutlined type="plus" />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </Div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

// PostImages.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default PostImages;
