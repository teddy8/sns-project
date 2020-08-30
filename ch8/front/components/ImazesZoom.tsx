import React, { useState, FC, memo } from 'react';
import PropTypes from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';
import Slick from 'react-slick';
import styled from 'styled-components';
import Image from '../../back/models/image';

const SlickWrapper = styled.div`
  height: calc(100% - 44px); 
  background: rgb(9, 9, 9);
`;

const ImgWrapper = styled.div`
  padding: 32px; 
  text-align: center;

  & img {
    margin: 0px auto; 
    max-height: 750px;
  }
`;

const Overlay = styled.div`
  position: fixed; 
  z-index: 5000; 
  top: 0px; 
  left: 0px; 
  right: 0px; 
  bottom: 0px;
`;

const Header = styled.header`
  height: 44px; 
  background: white;
  position: relative;
  padding: 0px; 
  text-align: center;

  & h1 {
    margin: 0px; 
    font-size: 17px; 
    color: rgb(51, 51, 51); 
    line-height: 44px;
  }
`;

const CloseBtn = styled(CloseOutlined)`
  position: absolute; 
  right: 0px; 
  top: 0px; 
  padding: 15px; 
  line-height: 14px; 
  cursor: pointer;
`;

const PageNumber = styled.div`
  text-align: center;
  
  & > div {
    width: 75px; 
    height: 30px; 
    line-height: 30px; 
    border-radius: 15px; 
    background: rgb(49, 49, 49); 
    display: inline-block; 
    text-align: center; 
    color: white; 
    font-size: 15px;
  }
`;

interface Props {
  images: Image[];
  onClose(): void;
}

const ImagesZoom: FC<Props> = memo(({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 몇번째 이미지인지

  return (
    <Overlay>
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn type="close" onClick={onClose} />
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)} // 현재 슬라이드가 몇번째인지 슬라이드 할 때마다 바꿔줘야 함
            infinite={false} // 1 2 3 4 보여주고 다시 1로 가지 않도록 막아주기.
            arrows // 화살표 추가하기
            slidesToShow={1} // 한번에 한장만 보여주기
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper>
                <img src={`http://localhost:3065/${v.src}`} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <PageNumber>
            <div>
              {`${currentSlide + 1} / ${images.length}`}
            </div>
          </PageNumber>
        </div>
      </SlickWrapper>
    </Overlay>
  );
});

export default ImagesZoom;
