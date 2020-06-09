import React, { useCallback, useState } from 'react';
import {Button, Form, Input, Card, Icon, Avatar, List, Comment} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import {useInput} from '../pages/signup'
import PropTypes, { string, object } from 'prop-types'
import { ADD_COMMENT_REQUEST } from '../reducers/post'

const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');
    const { isLoggedIn } = useSelector(state => state.user);
    const { isAddingComment } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
    
        if (!isLoggedIn) {
            return alert('댓글보려면 로그인이 필요합니다.')
        }
        
        if (!commentText)
            return;

        setCommentText('');

        return dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
                
            }
        })
    }, [isLoggedIn, commentText])

    const onToggleComment = useCallback(() => {
        // console.log('댓글아이콘 클릭');
        setCommentFormOpened(prev => !prev);
    }, [])

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, [])

    return (
    <div>
        <Card 
            key={+post.createdAt}
            cover={post.img && <img alt="example" src={post.img} />}
            actions={[
                <Icon type="retweet" key="retweet" />,
                <Icon type="heart" key="heart" />,
                <Icon type="message" key="message" onClick={onToggleComment} />,
                <Icon type="ellipsis" key="ellipsis" />,
            ]}
            extra={<Button>팔로우</Button>}
        >
            <Card.Meta 
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.content}
            />
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

