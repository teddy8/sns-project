import React, { useEffect } from 'react';
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { LOG_IN, loginAction } from '../reducers/user'

const Home = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    useEffect(() => {
        dispatch({
            type: LOG_IN,
            data: {
                nickname: '제로초2'
            },
        });
        dispatch(loginAction)
    }, [])

    return (
        <div>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c)=>{
                return (
                    <PostCard key={c.User.id} post={c} />
                )
            })}
        </div>
    );
};

export default Home;