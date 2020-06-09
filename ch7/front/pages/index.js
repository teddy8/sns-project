import React, { useEffect } from 'react';
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { LOG_IN, loginAction } from '../reducers/user'
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
    const { me } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({
    //         type: LOAD_MAIN_POSTS_REQUEST,
    //     });
    //     // dispatch(loginAction)
    //     // dispatch({ type: 'HELLO_SAGA' });
    // }, [])

    return (
        <div>
            {me && <PostForm />}
            {mainPosts.map((c)=>{
                return (
                    <PostCard key={c} post={c} />
                )
            })}
        </div>
    );
};

Home.getInitialProps = async (context) => {
    context.store.dispatch({
        type: LOAD_MAIN_POSTS_REQUEST,
    })
}

export default Home;