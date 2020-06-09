import { all, fork, takeLatest, put, call, take, delay } from 'redux-saga/effects';
import axios from 'axios'
import { 
    LOG_IN_REQUEST, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE, 
    SIGN_UP_REQUEST, 
    SIGN_UP_SUCCESS, 
    SIGN_UP_FAILURE, 
} from '../reducers/user'

// SIGN UP
function* signUpAPI() {
    // return axios.post('/login');
    yield delay(2000);
}

function* signUp() {
    try {
        yield call(signUpAPI);
        throw new Error('회원가입은 일단 에러나게 해놈');
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
function* loginAPI() {
//   return axios.post('/login');
    yield delay(2000);
}

function* login() {
    try {
        yield call(loginAPI);
        yield put({
            type: LOG_IN_SUCCESS,
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

export default function* userSaga() {
    yield all([
        watchSignUp(),
        // watchHello(),
        watchLogin(),
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