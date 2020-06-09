import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {Card, Avatar} from 'antd'
import {LOAD_USER_REQUEST} from '../reducers/user'
import {LOAD_USER_POSTS_REQUEST} from '../reducers/post'
import PostCard from '../components/PostCard'

const User = ({ id }) => {
    const dispatch = useDispatch()
    const { mainPosts } = useSelector(state => state.post) 
    const { userInfo } = useSelector(state => state.user) 

    // useEffect(() => {
    //     dispatch({ // 남의 정보
    //         type: LOAD_USER_REQUEST,
    //         data: id,
    //     })
    //     dispatch({ // 남의 게시물
    //         type: LOAD_USER_POSTS_REQUEST,
    //         data: id,
    //     })
    // }, [])

    return (
        <div>
            { userInfo
            ? (
            <Card
                actions={[
                    <div key="twit">짹짹<br />{userInfo.Posts}</div>,
                    <div key="following">팔로잉<br />{userInfo.Followings}</div>,
                    <div key="follower">팔로워<br />{userInfo.Followers}</div>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                    title={userInfo.nickname}
                />
            </Card>
            ) 
            : null }

            {mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c} />
            ))}

            {/* User id = {id} */}
        </div>
    )
}

User.propTypes = {
    id: PropTypes.number.isRequired,
}

User.getInitialProps = async (context) => {
    context.store.dispatch({ // 남의 정보
        type: LOAD_USER_REQUEST,
        data: context.query.id,
    })
    context.store.dispatch({ // 남의 게시물
        type: LOAD_USER_POSTS_REQUEST,
        data: context.query.id,
    })

    return { id: parseInt(context.query.id) };
  };

export default User;