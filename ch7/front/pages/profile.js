import React, { useEffect } from 'react'
import { Input, Button, Card, Form, List, Icon } from 'antd'
import NicknameEditForm from '../components/NicknameEditForm'
import { useDispatch, useSelector } from 'react-redux'
import {
    LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST,
    REMOVE_FOLLOWER_REQUEST, UNFOLLOW_USER_REQUEST
} from '../reducers/user'

const Profile = () => {
    const { me, followerList, followingList } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (me) {
    //         dispatch({
    //             type: LOAD_FOLLOWERS_REQUEST,
    //             data: me.id
    //         })
    //         dispatch({
    //             type: LOAD_FOLLOWINGS_REQUEST,
    //             data: me.id
    //         })
    //     }
    // }, [me && me.id])

    const onUnFollow = userId => () => {
        dispatch({
            type: UNFOLLOW_USER_REQUEST,
            data: userId
        })
    }

    const onRemoveFollower = userId => () => {
        dispatch({
            type: REMOVE_FOLLOWER_REQUEST,
            data: userId
        })
    }

    return  (
    <div>
        <NicknameEditForm />
        <List 
            style={{ marginBottom: '20px' }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div>팔로잉 목록</div>}
            loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
            bordered
            dataSource={followingList}
            renderItem={item => (
                <List.Item style={{ marginTop: '20px' }}>
                    <Card actions={[<Icon key='stop' type="stop" onClick={onUnFollow(item.id)} />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
        <List 
            style={{ marginBottom: '20px' }}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="small"
            header={<div>팔로워 목록</div>}
            loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
            bordered
            dataSource={followerList}
            renderItem={item => (
                <List.Item style={{ marginTop: '20px' }}>
                    <Card actions={[<Icon key='stop' type="stop" onClick={onRemoveFollower(item.id)} />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
    </div> 
    )
}

Profile.getInitialProps = async (context) => {
    const state = context.store.getState();
    const me = state.user.me;
    console.log('me=', me);
    
    // if (me) {
        context.store.dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
            data: me && me.id
        })
        context.store.dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
            data: me && me.id
        })
    // }
}

export default Profile;