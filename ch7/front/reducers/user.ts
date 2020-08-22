import produce from 'immer';

const dummyUser = {
  nickname: '오한민',
  Post: [],
  Followings: [],
  Followers: [],
  id: 1,
};

export const initialState = {
  isLoggedIn: false,
  isLoggingIn: false, // 로그인 요청중인지
  loginErrorReason: '', // 로그인 실패 이유
  isLoggingOut: false, // 로그아웃 시도중
  isSignedUp: false, // 회원가입 성공 여부
  isSigningUp: false, // 회원가입 시도중
  signUpData: null,
  signUpErrorReason: '', // 회원가입 실패 이유
  isEditingNickname: false,
  editingNicknameErrorReason: '',
  // 내 정보
  me: null,
  // me: {
  //   id: null,
  //   nickname: null,
  //   userId: null,
  //   createdAt: null,
  //   updatedAt: null,
  // },
  userInfo: null, // 남의 정보
  followingList: { // 팔로잉 리스트
    isFulfilled: false,
    data: [],
    error: '',
  },
  followerList: { // 팔로워 리스트
    isFulfilled: false,
    data: [],
    error: '',
  },
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      draft.isLoggingIn = true;
      break;
    }
    case LOG_IN_SUCCESS: {
      draft.isLoggingIn = false;
      draft.isLoggedIn = true;
      // me: dummyUser,
      draft.me = action.data;
      break;
    }
    case LOG_IN_FAILURE: {
      draft.isLoggedIn = false;
      draft.me = null;
      draft.loginErrorReason = action.error;
      break;
    }

    case LOG_OUT_REQUEST: {
      draft.isLoggingOut = true;
      break;
    }

    case LOG_OUT_SUCCESS: {
      draft.isLoggedIn = false;
      draft.isLoggingOut = false;
      draft.me = null;
      break;
    }

    case SIGN_UP_REQUEST: {
      draft.signUpData = action.data;
      draft.isSigningUp = true;
      break;
    }
    case SIGN_UP_SUCCESS: {
      draft.isSigningUp = false;
      draft.isSignedUp = true;
      break;
    }
    case SIGN_UP_FAILURE: {
      draft.signUpErrorReason = action.error;
      break;
    }

    case LOAD_USER_REQUEST: {
      break;
    }
    case LOAD_USER_SUCCESS: {
      if (action.isMe) { // 나
        console.log('나 me = ', action.data);
        draft.me = action.data;
        break;
      }

      // 상대
      console.log('상대');
      draft.userInfo = action.data;
      break;
    }
    case LOAD_USER_FAILURE: {
      break;
    }

    case FOLLOW_USER_REQUEST: {
      break;
    }
    case FOLLOW_USER_SUCCESS: {
      draft.me.Followings.unshift({ id: action.data });
      break;
    }
    case FOLLOW_USER_FAILURE: {
      break;
    }

    case UNFOLLOW_USER_REQUEST: {
      break;
    }
    case UNFOLLOW_USER_SUCCESS: {
      draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data);
      draft.followingList.data = draft.followingList.data.filter((v) => v.id !== action.data);
      break;
    }
    case UNFOLLOW_USER_FAILURE: {
      break;
    }

    case ADD_POST_TO_ME: {
      draft.me.Posts.push({ id: action.data });
      break;
    }

    case LOAD_FOLLOWERS_REQUEST: {
      break;
    }
    case LOAD_FOLLOWERS_SUCCESS: {
      action.data.forEach((v) => draft.followerList.data.push(v));

      if (action.data.length === 0 || draft.followerList.data.length === draft.me.Followers.length) {
        draft.followerList.isFulfilled = true;
      }

      break;
    }
    case LOAD_FOLLOWERS_FAILURE: {
      break;
    }

    case LOAD_FOLLOWINGS_REQUEST: {
      break;
    }
    case LOAD_FOLLOWINGS_SUCCESS: {
      action.data.forEach((v) => draft.followingList.data.push(v));

      if (action.data.length === 0 || draft.followingList.data.length === draft.me.Followings.length) {
        draft.followingList.isFulfilled = true;
      }

      break;
    }
    case LOAD_FOLLOWINGS_FAILURE: {
      break;
    }

    case REMOVE_FOLLOWER_REQUEST: {
      break;
    }
    case REMOVE_FOLLOWER_SUCCESS: {
      draft.me.Followers = draft.me.Followers.filter((v) => v.id !== action.data);
      draft.followerList.data = draft.followerList.data.filter((v) => v.id !== action.data);
      break;
    }
    case REMOVE_FOLLOWER_FAILURE: {
      break;
    }

    case EDIT_NICKNAME_REQUEST: {
      draft.isEditingNickname = true;
      draft.editingNicknameErrorReason = '';
      break;
    }
    case EDIT_NICKNAME_SUCCESS: {
      draft.me.nickname = action.data;
      draft.isEditingNickname = false;
      draft.editingNicknameErrorReason = '';
      break;
    }
    case EDIT_NICKNAME_FAILURE: {
      draft.isEditingNickname = false;
      draft.editingNicknameErrorReason = action.error;
      break;
    }

    default: {
      break;
    }
  }
});
