import { all, fork, takeLatest, put, call, take, delay } from 'redux-saga/effects';
import axios from 'axios'
import { 
    LOG_IN_REQUEST, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE, 
    SIGN_UP_REQUEST, 
    SIGN_UP_SUCCESS, 
    SIGN_UP_FAILURE,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST, 
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
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
    // console.log('사가에서 받은 id pw')
    // for (let i in loginData) {
    //     console.log(i + ' ' + loginData[i]);
    // }
    // yield delay(2000);
}

function* login(action) {
    try {
        const result = yield call(loginAPI, action.data);
        console.log('result = '+ JSON.stringify(result.data));
        
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

function loadUserAPI() {
    return axios.get('/user/', {
        withCredentials: true,
    })
}

function* loadUser() {
    try {
        const result = yield call(loadUserAPI)
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data
        })
    } catch(e) {
        console.error(e);;
        yield put({
            type: LOAD_USER_FAILURE
        })
    }
}

function *watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
    yield all([
        watchSignUp(),
        // watchHello(),
        watchLogin(),
        watchLogout(),
        watchLoadUser(),
    ]);
}

// function* hello() {
//     try {
//         yield put({
//             type: 'HELLO_TWO',
//         });
//         console.log('hello');
//     } catch (e) {
//         console.error(e);
//     }
// }

// function* watchHello() {
//     yield takeEvery(HELLO_SAGA, function*() {
//         yield delay(1000);
//         console.log(1);
//     })
// }



// function* watchLogin() {
//     yield take(LOG_IN);
//     yield delay(2000);
//     yield put({type: LOG_IN_SUCCESS});
// }