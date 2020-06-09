const dummyUser = {
    nickname: '오한민',
    Post: [],
    Followings: [],
    Followers: [],
    id: 1
};

export const initialState = {
    isLoggedIn: false, // 로그인 성공 여부
    isLoggingIn: false, // 로그인 요청중인지
    loginErrorReason: '', // 로그인 실패 이유

    isLoggingOut: false, // 로그아웃 시도중

    isSignedUp: false, // 회원가입 성공 여부
    isSigningUp: false, // 회원가입 시도중
    signUpErrorReason: '', // 회원가입 실패 이유

    me: null, // 내 정보
    userInfo: null, // 남의 정보
    followingList: [], // 팔로잉 리스트
    followerList: [] // 팔로워 리스트
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggingIn: true,
            }
        }
        case LOG_IN_SUCCESS: {
            return {
                isLoggingIn: false,
                isLoggedIn: true,
                me: dummyUser,
                loginData: action.data,
            }
        }
        case LOG_IN_FAILURE: {
            return {
                isLoggedIn: false,
                me: null,
                loginErrorReason: action.error
            }
        }

        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            }
        }

        case SIGN_UP_REQUEST: {
            return {
                ...state,
                signUpData: action.data,
                isSigningUp: true,
            }
        }
        case SIGN_UP_SUCCESS: {
            return {
                isSigningUp: false,
                isSignedUp: true,
            }
        }
        case SIGN_UP_FAILURE: {
            return {
                signUpErrorReason: action.error,
            }
        }
        default: {
            return {...state};
        }
    }
};