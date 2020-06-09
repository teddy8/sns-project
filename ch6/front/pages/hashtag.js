import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post'

const Hashtag = ({ tag }) => {
    const dispatch = useDispatch()
    const { mainPosts } = useSelector(state => state.post)

    useEffect(() => {
        dispatch({
            type: LOAD_HASHTAG_POSTS_REQUEST,
            data: tag,
        })    
    }, [])

    return (
        <div>
            {/* tag = {tag} */}
            {mainPosts.map((c)=>{
                return (
                    <PostCard key={c.createdAt} post={c} />
                )
            })}
        </div>
    )
}

Hashtag.propTypes = {
    tag: PropTypes.string.isRequired,
}

Hashtag.getInitialProps = async (context) => {
    console.log('hashtag getInitialProps', context.query.tag);
    return { tag: context.query.tag };
  };

export default Hashtag;