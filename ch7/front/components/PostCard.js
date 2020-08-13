import React, { useCallback, useState } from 'react';
import { Button, Form, Input, Card, Avatar, List, Comment, Popover, Modal } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
// import { useInput } from '../pages/signup';
import styled from 'styled-components';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import ModifyPostForm from './ModifyPostForm';
import {
  ADD_COMMENT_REQUEST,
  LOAD_COMMENTS_REQUEST,
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
  RETWEET_REQUEST,
  REMOVE_POST_REQUEST,
} from '../reducers/post';
import {
  FOLLOW_USER_REQUEST,
  UNFOLLOW_USER_REQUEST,
} from '../reducers/user';

const ButtonWrapper = styled.div`
   & Button {
    display: block;
    width: 200px;
  }
`;

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [popoverOpened, setPopoverOpened] = useState(false);
  const { me } = useSelector((state) => state.user);
  const { isAddingComment } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const isLiked = me && post.Likers && post.Likers.find((v) => v.id === me.id);
  const isFollowinged = me && me.Followings && me.Followings.find((v) => v.id === post.UserId);
  // 내가 아이디가 1인데 2를 팔로우한 상태면 id:2 이렇게 들어있을 것.
  // post.UserId 가 me.Followings  내가 팔로우한 명단에 있는지 확인

  const [modalOpened, setModalOpened] = useState(false);

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

  const onToggleComment = useCallback(() => {
    if (!me) {
      return alert('댓글을 보려면 로그인이 필요합니다.');
    }

    console.log('댓글아이콘 클릭');
    setCommentFormOpened((prev) => !prev);

    return dispatch({
      type: LOAD_COMMENTS_REQUEST,
      data: post.id,
    });
  }, [me]);

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  const onToggleLike = useCallback(() => {
    if (!me) { return alert('로그인이 필요합니다.'); }

    if (isLiked) {
      return dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
      });
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [me && me.id, post && post.id, isLiked]);

  const onToggleRetweet = useCallback(() => {
    console.log('리트윗 버튼 클릭');
    dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    });
  }, [me && me.id, post && post.id]);

  const onClickFollow = () => {
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
  };

  const onEditPost = () => {
    console.log(post.id, '번째 글의 edit 버튼 클릭');
    console.log('modal =', modalOpened);
    setPopoverOpened(false);
    setModalOpened(true);
  };

  const popoverVisibleChange = (visible) => {
    setPopoverOpened(visible);
  };

  const onDeletePost = () => {
    console.log('delete 버튼 클릭');
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  };

  const modalHandleCancel = () => {
    setModalOpened(false);
    console.log('모달 닫음');
  };

  return (
    <div>
      <Card
        key={+post.createdAt}
            // cover={ post.Images && post.Images[0] && <img alt="example" src={"http://localhost:3065/" + post.Images[0].src} />}
        cover={post.Images && post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined type="retweet" key="retweet" onClick={onToggleRetweet} />,
          isLiked
            ? <HeartTwoTone type="heart" key="heart" onClick={onToggleLike} twoToneColor="#eb2f96" />
            : <HeartOutlined type="heart" key="heart" onClick={onToggleLike} />,
          <MessageOutlined type="message" key="message" onClick={onToggleComment} />,
          <Popover
            content={(
              <ButtonWrapper>
                {/* <StyledButton onClick={onDeletePost}>삭제</StyledButton>
                <StyledButton onClick={onEditPost}>수정</StyledButton> */}
                <Button onClick={onDeletePost}>삭제</Button>
                <Button onClick={onEditPost}>수정</Button>
              </ButtonWrapper>
            )}
            // title="Title"
            trigger="click"
            visible={popoverOpened}
            onVisibleChange={popoverVisibleChange}
          >
            {me && <EllipsisOutlined type="ellipsis" key="ellipsis" />}
          </Popover>,

        ]}
        extra={(post.UserId !== (me && me.id)) && <Button onClick={onClickFollow}>{isFollowinged ? '언팔로우' : '팔로우' }</Button>}
        title={post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null}
      >
        { post.RetweetId
          ? (
            <>
              <Card
                cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
              >
                <Card.Meta
                  avatar={(
                    <Link
                      href={{ pathname: '/user', query: { id: post.Retweet.User.id } }} // ("/user?id=1")
                      as={`/user/${post.Retweet.User.id}`}
                    >
                      <a>
                        {' '}
                        <Avatar>{post.Retweet.User.nickname[0]}</Avatar>
                        {' '}
                      </a>
                    </Link>
                          )}
                  title={post.Retweet.User.nickname}
                  description={<PostCardContent content={post.Retweet.content} />}
                />
              </Card>
            </>
          )
          : (
            <>
              <Card.Meta
                avatar={(
                  <Link
                    href={{ pathname: '/user', query: { id: post.User.id } }} // ("/user?id=1")
                    as={`/user/${post.User.id}`}
                  >
                    <a>
                      {' '}
                      <Avatar>{post.User.nickname[0]}</Avatar>
                      {' '}
                    </a>
                  </Link>
                      )}
                title={post.User.nickname}
                description={<PostCardContent content={post.content} />}
              />
            </>
          )}
      </Card>

      { commentFormOpened && (
        <>
          <Form onFinish={onSubmitComment}>
            <Form.Item>
              <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={(item) => (
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

      <Modal
        title="게시글 수정하기"
        centered // 중앙에 위치
        closable // 우측상단 닫기버튼 여부
        visible={modalOpened}
        footer={null} // 하단에 있는 OK, Cancel버튼 제거

        // onOk={handleOk}
        onCancel={modalHandleCancel}
      >
        <ModifyPostForm modalOpened={modalOpened} post={post} setModalOpened={setModalOpened} />
      </Modal>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
