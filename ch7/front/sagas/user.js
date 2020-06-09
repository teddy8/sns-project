import { all, fork, takeLatest, takeEvery,put, call, take, delay } from 'redux-saga/effects';
import axios from 'axios'
import { 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    LOG_OUT_SUCCESS,LOG_OUT_FAILURE,LOG_OUT_REQUEST, 
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS,LOAD_USER_FAILURE,
    FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE,
    UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE,
    LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE,
    REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE,
    EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE
} from '../reducers/user'

// SIGN UP
function signUpAPI(signUpData) {
    return axios.post('/user/', signUpData)
}

function* signUp(action) {
    try {
        yield call(signUpAPI, action.data);
        // throw new Error('일부로 에러 내기');
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
        });
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp); 
}

// LOG IN
function loginAPI(loginData) {
  return axios.post('/user/login/', loginData, {
      withCredentials: true,
  });
}

function* login(action) {
    try {
        const result = yield call(loginAPI, action.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function *watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

function logoutAPI() {
    return axios.post('/user/logout/', {}, {
        withCredentials: true,
    })
}

function* logout() {
    try {
        yield call(logoutAPI)
        yield put({
            type: LOG_OUT_SUCCESS
        })
    } catch(e) {
        console.error(e);;
        yield put({
            type: LOG_OUT_FAILURE
        })
    }
}

function *watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}

function loadUserAPI(userId) {
    return axios.get(userId ? `/user/${userId}` : `/user/`, { // /user : 내정보, /user/:id 남의정보
        withCredentials: true,
    })
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data)
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
            isMe: !action.data
        })
    } catch(e) {
        console.error(e);;
        yield put({
            type: LOAD_USER_FAILURE
        })
    }
}

function *watchLoadUser() {
    // yield takeLatest(LOAD_USER_REQUEST, loadUser);
    yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function followAPI(userId) {
    return axios.post(`/user/${userId}/follow/`, {}, {
        withCredentials: true,
    })
}

function* follow(action) {
    try {
        const result = yield call(followAPI, action.data)
        yield put({
            type: FOLLOW_USER_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);;
        yield put({
            type: FOLLOW_USER_FAILURE
        })
    }
}

function *watchFollow() {
    yield takeLatest(FOLLOW_USER_REQUEST, follow);
}

function unFollowAPI(userId) {
    return axios.delete(`/user/${userId}/follow/`, {
        withCredentials: true,
    })
}

function* unFollow(action) {
    try {
        const result = yield call(unFollowAPI, action.data)
        yield put({
            type: UNFOLLOW_USER_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);;
        yield put({
            type: UNFOLLOW_USER_FAILURE
        })
    }
}

function *watchUnFollow() {
    yield takeLatest(UNFOLLOW_USER_REQUEST, unFollow);
}

function loadFollowersAPI(userId) {
    return axios.get(`/user/${userId}/followers/`, {
        withCredentials: true,
    })
}

function* loadFollowers(action) {
    try {
        const result = yield call(loadFollowersAPI, action.data)
        yield put({
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);;
        yield put({
            type: LOAD_FOLLOWERS_FAILURE
        })
    }
}

function *watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function loadFollowingsAPI(userId) {
    return axios.get(`/user/${userId}/followings/`, {
        withCredentials: true,
    })
}

function* loadFollowings(action) {
    try {
        const result = yield call(loadFollowingsAPI, action.data)
        yield put({
            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);;
        yield put({
            type: LOAD_FOLLOWINGS_FAILURE
        })
    }
}

function *watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function removeFollowerAPI(userId) {
    return axios.delete(`/user/${userId}/follower/`, {
        withCredentials: true,
    })
}

function* removeFollower(action) {
    try {
        const result = yield call(removeFollowerAPI, action.data)
        yield put({
            type: REMOVE_FOLLOWER_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: REMOVE_FOLLOWER_FAILURE
        })
    }
}

function *watchRemoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

function editNicknameAPI(nickname) {
    return axios.patch(`/user/nickname/`, { nickname }, {
        withCredentials: true,
    })
}

function* editNickname(action) {
    try {
        const result = yield call(editNicknameAPI, action.data)
        yield put({
            type: EDIT_NICKNAME_SUCCESS,
            data: result.data,
        })
    } catch(e) {
        console.error(e);
        yield put({
            type: EDIT_NICKNAME_FAILURE
        })
    }
}

function *watchEditNickname() {
    yield takeLatest(EDIT_NICKNAME_REQUEST, editNickname);
}

export default function* userSaga() {
    yield all([
        watchSignUp(),
        watchLogin(),
        watchLogout(),
        watchLoadUser(),
        watchFollow(),
        watchUnFollow(),
        watchLoadFollowers(),
        watchLoadFollowings(),
        watchRemoveFollower(),
        watchEditNickname(),
    ]);
}