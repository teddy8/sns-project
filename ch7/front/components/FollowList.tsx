import React, { useRef, FC } from 'react';
import { List, Card, Button } from 'antd';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user'

const StyledList = styled(List)`
  margin-bottom: 20px;

  .ant-list-item {
    margin-top: 20px;
  }

  & > Button {
    width: 100%;
  }
`;

interface Props {
  headerText: string;
  itemList: {
    isFulfilled: boolean,
    data: Array<string>,
    error: string,
  }
  LoadRequestAction: string;
  RemoveFollowRequestAction: string;
}

const FollowList: FC<Props> = ({ headerText, itemList, LoadRequestAction, RemoveFollowRequestAction }) => {
  const limitNum = useRef(3);
  const offsetNum = useRef(3);
  const dispatch = useDispatch();

  const loadMoreClick = () => {
    dispatch({
      type: LoadRequestAction,
      data: {
        limit: limitNum.current,
        offset: offsetNum.current,
      },
    });

    offsetNum.current += limitNum.current;
  };

  const onRemoveFollow = (userId) => () => {
    dispatch({
      type: RemoveFollowRequestAction,
      data: userId,
    });
  };

  return (
    <StyledList
      grid={{
        gutter: 16,
        xs: 2, // 모바일
        sm: 3, // 작은화면
        md: 2, // 중간화면
        lg: 3, // 큰화면
        xl: 3,
        xxl: 4,
      }}
      size="small"
      header={<div>{headerText}</div>}
      loadMore={itemList.isFulfilled ? null : <Button onClick={loadMoreClick}>더 보기</Button>}
      bordered
      dataSource={itemList.data}
      renderItem={(item) => (
        <List.Item>
          <Card actions={[<StopOutlined key="stop" onClick={onRemoveFollow(item.id)} />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default FollowList;
