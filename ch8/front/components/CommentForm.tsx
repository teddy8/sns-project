import React, { FC, useState, useCallback, memo } from 'react';
import Post from '../../back/models/post';
import { useSelector, useDispatch } from 'react-redux'
import { ADD_COMMENT_REQUEST } from '../reducers/post';
import { Form, Input, Button } from 'antd';
import User from '../../back/models/user';

interface Props {
    post: Post;
}

const CommentForm: FC<Props> = memo(({ post }) => {
    const [commentText, setCommentText] = useState('');
    const { isAddingComment } = useSelector((state) => state.post);
    const { me } = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const onSubmitComment = useCallback(() => {
        // e.preventDefault();

        if (!me) {
            return alert('댓글을 남기려면 로그인이 필요합니다.');
        }

        if (!commentText) { return null; }

        setCommentText('');
        // console.log('post id = ' + post.id);
        // console.log('comment text = ' + commentText);

        return dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
                postId: post.id,
                content: commentText,
            },
        });
    }, [me, commentText]);

    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    }, []);

    return (
        <>
            <Form onFinish={onSubmitComment}>
                <Form.Item>
                    <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
            </Form>
        </>
    )
})

export default CommentForm;