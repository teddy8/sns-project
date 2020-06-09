import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, 
    ADD_COMMENT_REQUEST,  ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_FAILURE, LOAD_MAIN_POSTS_SUCCESS, 
} from '../reducers/post';

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
        // yield put({
        //     type: LOAD_MAIN_POSTS_REQUEST,
        // })
    } catch (e) {
        console.log('e = '+ e);
        
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        })
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost)
}

function* addComment(action) {
    try {
        yield delay(2000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId
            }
        })
    } catch (e) {
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

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchLoadMainPosts),
    ]);
}