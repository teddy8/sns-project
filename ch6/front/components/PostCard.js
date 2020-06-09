import React, { useCallback, useState } from 'react';
import {Button, Form, Input, Card, Icon, Avatar, List, Comment} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import {useInput} from '../pages/signup'
import PropTypes, { string, object } from 'prop-types'
import PostCardContent from '../components/PostCardContent'
import PostImages from '../components/PostImages'
import { 
    ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST,
    LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST,
} from '../reducers/post'
import {
    FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST 
} from '../reducers/user'

const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');
    const { isLoggedIn, me } = useSelector(state => state.user);
    const { isAddingComment } = useSelector(state => state.post);
    const dispatch = useDispatch();
    const isLiked = isLoggedIn && post.Likers && post.Likers.find(v=>v.id === me.id);
    const isFollowinged = isLoggedIn && me.Followings && me.Followings.find(v=>v.id === post.UserId);  
    // 내가 아이디가 1인데 2를 팔로우한 상태면 id:2 이렇게 들어있을 것.   
    // post.UserId 가 me.Followings  내가 팔로우한 명단에 있는지 확인

    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
    
        if (!isLoggedIn) {
            return alert('댓글보려면 로그인이 필요합니다.')
        }
        
        if (!commentText)
            return;

        setCommentText('');
        // console.log('post id = ' + post.id);
        // console.log('comment text = ' + commentText);

        return dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
                content: commentText,
            }
        })
    }, [isLoggedIn, commentText])

    const onToggleComment = useCallback(() => {
        console.log('댓글아이콘 클릭');
        setCommentFormOpened(prev => !prev);

        dispatch({
            type: LOAD_COMMENTS_REQUEST,
            data: post.id,
        })
    }, [])

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, [])

    const onToggleLike = useCallback(() => {
        if  (!me)
            return alert('로그인이 필요합니다.')

        if (isLiked) {
            dispatch({
                type: UNLIKE_POST_REQUEST,
                data: post.id,
            })
        }
        else {
            dispatch({
                type: LIKE_POST_REQUEST,
                data: post.id,
            })
        }
    }, [me && me.id, post && post.id, isLiked])

    const onToggleRetweet = useCallback(() => {
        console.log('리트윗 버튼 클릭');
        dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        })
    }, [me && me.id, post && post.id])

    const onClickFollow = () => {
        if  (!me)
            return alert('로그인이 필요합니다.')

        if (isFollowinged) {
            dispatch({
                type: UNFOLLOW_USER_REQUEST,
                data: post.UserId,
            })
        }
        else {
            dispatch({
                type: FOLLOW_USER_REQUEST,
                data: post.UserId,
            })
        }
    }

    return (
    <div>
        <Card 
            key={+post.createdAt}
            // cover={ post.Images && post.Images[0] && <img alt="example" src={"http://localhost:3065/" + post.Images[0].src} />}
            cover={ post.Images && post.Images[0] && <PostImages images={post.Images} />}
            actions={[
                <Icon type="retweet" key="retweet" onClick={onToggleRetweet} />,
                <Icon type="heart" key="heart" onClick={onToggleLike} theme={isLiked ? 'twoTone' : 'outlined'} twoToneColor="#eb2f96"/>,
                <Icon type="message" key="message" onClick={onToggleComment} />,
                <Icon type="ellipsis" key="ellipsis" />,
            ]}
            extra={ <Button onClick={onClickFollow}>{isFollowinged ? '언팔로우' : '팔로우' }</Button> }
            title={post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null}
        >
            { post.RetweetId ? 
            (<>
                <Card
                    cover={ post.Retweet.Images && post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} /> }
                >
                    <Card.Meta 
                        avatar={
                            <Link
                                href={{ pathname:'/user', query: {id: post.Retweet.User.id} }} // ("/user?id=1")
                                as={`/user/${post.Retweet.User.id}`} // ("/user/1")
                            >
                                <a> <Avatar>{post.Retweet.User.nickname[0]}</Avatar> </a>
                            </Link>
                        }
                        title={post.Retweet.User.nickname}
                        description={<PostCardContent content={post.Retweet.content} /> }
                    />
                </Card>
            </>) : 
            (<>
                <Card.Meta 
                    avatar={
                        <Link
                            href={{ pathname:'/user', query: {id: post.User.id} }} // ("/user?id=1")
                            as={`/user/${post.User.id}`} // ("/user/1")
                        >
                            <a> <Avatar>{post.User.nickname[0]}</Avatar> </a>
                        </Link>
                    }
                    title={post.User.nickname}
                    description={<PostCardContent content={post.content} /> }
                />
            </>)
            }
            
        </Card>
        { commentFormOpened && (
            <>
                <Form onSubmit={onSubmitComment}>
                    <Form.Item>
                        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
                </Form>
                <List 
                    header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments || []}
                    renderItem={item => (
                        <li>
                            <Comment 
                                author={item.User.nickname}
                                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                content={item.content}
                            />
                        </li>
                    )}
                />
            </>
        )}
    </div>
    )
}

// PostCard.propTypes = {
//     post: PropTypes.shape({
//         User: PropTypes.object,
//         content: PropTypes.string,
//         img: PropTypes.string,
//         // createdAt: object,
//     })
// }

export default PostCard

