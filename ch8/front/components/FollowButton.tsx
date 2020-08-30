import React, { FC, useCallback, memo } from 'react';
import Post from '../../back/models/post';
import User from '../../back/models/user';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { UNFOLLOW_USER_REQUEST, FOLLOW_USER_REQUEST } from '../reducers/user';
interface Props {
    post: Post;
    isMyPost: boolean;
}

const FollowButton: FC<Props> = memo(({ post, isMyPost }) => {
    const { me } = useSelector((state) => state.user);
    const isFollowinged = me && me.Followings && me.Followings.find((v) => v.id === post.UserId);
    const dispatch = useDispatch();

    // 내가 아이디가 1인데 2를 팔로우한 상태면 id:2 이렇게 들어있을 것.
    // post.UserId 가 me.Followings  내가 팔로우한 명단에 있는지 확인

    const onClickFollow = useCallback(() => {
        if (!me) { return alert('로그인이 필요합니다.'); }

        if (isFollowinged) {
            return dispatch({
                type: UNFOLLOW_USER_REQUEST,
                data: post.UserId,
            });
        }

        return dispatch({
            type: FOLLOW_USER_REQUEST,
            data: post.UserId,
        });
    }, [me, isFollowinged]);

    return (
        <>
            {isMyPost &&
                <Button onClick={onClickFollow}>
                    {isFollowinged ? '언팔로우' : '팔로우'}
                </Button>}
        </>
    )
})

export default FollowButton;