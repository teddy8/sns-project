import { all, fork, takeLatest, put, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, 
    ADD_COMMENT_REQUEST,  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_FAILURE, LOAD_MAIN_POSTS_SUCCESS, 
    LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE,
    LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE,
    LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE,
    UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE,
    LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
    RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE,
} from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user'

// import next from 'next';

function addPostAPI(postData) {
    return axios.post('/post/', postData, {
        withCredentials: true,
    })
}

function* addPost(action) {
    try {
        const result = yield addPostAPI(action.data);       
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        })
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        })
        
    } catch (e) {
        console.log(e);
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        })
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, {content: data.content}, {
        withCredentials: true,
    })
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data)
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
                comment: result.data
            }
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e,
        })
    }
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment)    
}

function loadMainPostsAPI() {
    return axios.get('/posts/');
}

function* loadMainPosts() {
    try {
        const result = yield loadMainPostsAPI();
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        yield put({
            type: LOAD_MAIN_POSTS_FAILURE,
            error: e,
        })
    }
}

function* watchLoadMainPosts() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts)
}

function loadHashtagPostsAPI(tag) {
    return axios.get(`/hashtag/${tag}`);
}

function* loadHashtagPosts(action) {
    try {
        const result = yield loadHashtagPostsAPI(action.data);
        yield put({
            type: LOAD_HASHTAG_POSTS_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        yield put({
            type: LOAD_HASHTAG_POSTS_FAILURE,
            error: e,
        })
    }
}

function* watchLoadHashtagPosts() {
    yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts)
}

function loadUserPostsAPI(id) {
    return axios.get(`/user/${id}/posts`);
}

function* loadUserPosts(action) {
    try {
        const result = yield loadUserPostsAPI(action.data);
        yield put({
            type: LOAD_USER_POSTS_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        yield put({
            type: LOAD_USER_POSTS_FAILURE,
            error: e,
        })
    }
}

function* watchLoadUserPosts() {
    yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts)
}

function loadCommentsAPI(id) {
    return axios.get(`/post/${id}/comments`);
}

function* loadComments(action) {
    try {
        const result = yield loadCommentsAPI(action.data);
        yield put({
            type: LOAD_COMMENTS_SUCCESS,
            data: {
                postId: action.data,
                comments: result.data,
            }
        })
    } catch(e) {
        console.error(e);        
        yield put({
            type: LOAD_COMMENTS_FAILURE,
            error: e,
        })
    }
}

function* watchLoadCommentsPosts() {
    yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments)
}

function uploadImagesAPI(formData) {
    return axios.post(`/post/images`, formData, {
        withCredentials: true,
    });
}

function* uploadImages(action) {
    try {
        const result = yield uploadImagesAPI(action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error('uploadimages saga error  = ' + e);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: e,
        })
    }
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages)
}

function likePostAPI(postId) {
    return axios.post(`/post/${postId}/like`, {}, {
        withCredentials: true,
    })
}

function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data)
        yield put({
            type: LIKE_POST_SUCCESS,
            data: {
                postId: action.data,
                userId: result.data.userId
            }
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: LIKE_POST_FAILURE,
            error: e,
        })
    }
}

function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost)    
}

function unlikePostAPI(postId) {
    return axios.delete(`/post/${postId}/like`, {
        withCredentials: true,
    })
}

function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data)
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: {
                postId: action.data,
                userId: result.data.userId
            }
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: e,
        })
    }
}

function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost)    
}

function retweetAPI(postId) {
    return axios.post(`/post/${postId}/retweet`, {}, {
        withCredentials: true,
    })
}

function* retweet(action) {
    try {
        const result = yield call(retweetAPI, action.data)
        yield put({
            type: RETWEET_SUCCESS,
            data: {
                // postId: action.data,
                // userId: result.data.userId
            }
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: RETWEET_FAILURE,
            error: e,
        })
    }
}

function* watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet)    
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchLoadMainPosts),
        fork(watchLoadHashtagPosts),
        fork(watchLoadUserPosts),
        fork(watchLoadCommentsPosts),
        fork(watchUploadImages),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchRetweet),
    ]);
}