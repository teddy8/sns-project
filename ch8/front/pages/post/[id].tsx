import React, { memo } from 'react';
import axios from 'axios';
import Head, { END } from 'redux-saga';
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import wrapper, { IStore } from '../../store/configureStore';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';

const Post = memo(() => {
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts } = useSelector((state) => state.post);
  const singlePost = mainPosts.data;

  return (
    <>
      <Helmet
        title={`${singlePost.User.nickname}님의 글`}
        meta={[
          { name: 'description', content: singlePost.content },
          { property: 'og:title', content: `${singlePost.User.nickname}님의 게시글` },
          { property: 'og:description', content: singlePost.content },
          { property: 'og:image', content: singlePost.Images[0] && `http://localhost:3065/${singlePost.Images[0].src}` },
          { property: 'og:url', content: `https://localhost:3060/post/${id}` },
        ]}
      />
      {/* <div itemScope="content">{singlePost.content}</div>
      <div itemScope="author">{singlePost.User.nickname}</div>
      <div>
        {singlePost.Images[0] && <img src={`http://localhost:3065/${singlePost.Images[0].src}`} alt={`http://localhost:3065/${singlePost.Images[0].src}`} />}
      </div> */}
      <PostCard post={singlePost} />
    </>
  );
});

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: context.params.id,
  });

  const store: IStore = context.store;
  context.store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Post;
