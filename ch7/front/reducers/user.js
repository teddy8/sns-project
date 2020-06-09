const dummyUser = {
    nickname: '오한민',
    Post: [],
    Followings: [],
    Followers: [],
    id: 1
};

export const initialState = {
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

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS'
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE'

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS'
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE'

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST'
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS'
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE'

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST'
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS'
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE'

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS'
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE'

export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST'
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS'
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE'

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME'

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
                // me: dummyUser,
                me: action.data,
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
                isLoggingOut: true,
            }
        }

        case LOG_OUT_SUCCESS: {
            return {
                ...state,
                isLoggedIn: false,
                isLoggingOut: false,
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

        case LOAD_USER_REQUEST: {
            return {
                ...state,
            }
        }
        case LOAD_USER_SUCCESS: {
            if (action.isMe) { // 나            
                return {
                    ...state,
                    me: action.data,
                }
            }
            else { // 상대
                return {
                    ...state,
                    userInfo: action.data
                }
            }
            
        }
        case LOAD_USER_FAILURE: {
            return {
                ...state,
            }
        }

        case FOLLOW_USER_REQUEST: {
            return {
                ...state,
            }
        }       
        case FOLLOW_USER_SUCCESS: {
            return {
                ...state,
                me: {
                    ...state.me,
                    Followings: [{id: action.data}, ...state.me.Followings]
                }
            }
        }
        case FOLLOW_USER_FAILURE: {
            return {
                ...state,
            }
        }

        case UNFOLLOW_USER_REQUEST: {
            return {
                ...state,
            }
        }       
        case UNFOLLOW_USER_SUCCESS: {
            return {
                ...state,
                me: {
                    ...state.me,
                    Followings:  state.me.Followings.filter(v=>v.id !== action.data)
                },
                followingList: state.followingList.filter(v => v.id !== action.data)
            }
        }
        case UNFOLLOW_USER_FAILURE: {
            return {
                ...state,
            }
        }

        case ADD_POST_TO_ME: {
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: [...state.me.Posts ,{id: action.data}]
                }
            }
        }

        case LOAD_FOLLOWERS_REQUEST: {
            return {
                ...state,
            }
        }       
        case LOAD_FOLLOWERS_SUCCESS: {
            return {
                ...state,
                followerList: action.data
            }
        }
        case LOAD_FOLLOWERS_FAILURE: {
            return {
                ...state,
            }
        }

        case LOAD_FOLLOWINGS_REQUEST: {
            return {
                ...state,
            }
        }       
        case LOAD_FOLLOWINGS_SUCCESS: {
            return {
                ...state,
                followingList: action.data
            }
        }
        case LOAD_FOLLOWINGS_FAILURE: {
            return {
                ...state,
            }
        }

        case REMOVE_FOLLOWER_REQUEST: {
            return {
                ...state,
            }
        }       
        case REMOVE_FOLLOWER_SUCCESS: {
            return {
                ...state,
                me: {
                    ...state.me,
                    Followers: state.me.Followers.filter(v => v.id !== action.data)
                },
                followerList: state.followerList.filter(v => v.id !== action.data)
            }
        }
        case REMOVE_FOLLOWER_FAILURE: {
            return {
                ...state,
            }
        }

        case EDIT_NICKNAME_REQUEST: {
            return {
                ...state,
                isEditingNickname: true,
                editingNicknameErrorReason: ''
            }
        }       
        case EDIT_NICKNAME_SUCCESS: {
            return {
                ...state,
                me: {
                    ...state.me,
                    nickname: action.data,
                },
                isEditingNickname: false,
                editingNicknameErrorReason: ''
            }
        }
        case EDIT_NICKNAME_FAILURE: {
            return {
                ...state,
                isEditingNickname: false,
                editingNicknameErrorReason: action.error
            }
        }

        default: {
            return {...state};
        }
    }
};