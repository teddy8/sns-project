import React, { useRef, FC, useCallback, memo } from 'react';
import { List, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { ListItemTypeProps } from 'antd/lib/list/Item';
import User from '../../back/models/user';

interface Props {
  item: User;
  RemoveFollowRequestAction: string;
}

const FollowListItem: FC<Props> = memo(({ item, RemoveFollowRequestAction }) => {
  const dispatch = useDispatch();

  const onRemoveFollow = useCallback((userId) => () => {
    dispatch({
      type: RemoveFollowRequestAction,
      data: userId,
    });
  }, []);

  return (
    <>
      <List.Item>
        <Card actions={[<StopOutlined key="stop" onClick={onRemoveFollow(item.id)} />]}>
          <Card.Meta description={item.nickname} />
        </Card>
      </List.Item>
    </>
  );
});

export default FollowListItem;
