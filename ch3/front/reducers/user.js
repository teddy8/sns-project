const dummyUser = {
    nickname: '오한민',
    Post: [],
    Followings: [],
    Followers: [],
};

export const initialState = {
    isLoggedIn: false,
    user: {},
    loginData: {},
    signUpData: {},
};

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SIGN_UP = 'SIGN_UP'

export const signUpAction = (data) =>{
    return {
        type: SIGN_UP,
        data: data,
    };
};

export const loginAction = {
    type: LOG_IN,
    data: {
        nickname: '제로초',
    },
};

export const logoutAction = {
    type: LOG_OUT,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
                loginData: action.data,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                signUpData: action.data,
            }
        }
        default: {
            return {...state};
        }
    }
};