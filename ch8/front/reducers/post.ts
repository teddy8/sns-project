import produce, { enableES5 } from 'immer';
enableES5();

// 게시글 관련
// (쓰기)
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
export const REMOVE_UPLOAD_IMAGE_REQUEST = 'REMOVE_UPLOAD_IMAGE_REQUEST';
export const REMOVE_UPLOAD_IMAGE_SUCCESS = 'REMOVE_UPLOAD_IMAGE_SUCCESS';
export const REMOVE_UPLOAD_IMAGE_FAILURE = 'REMOVE_UPLOAD_IMAGE_FAILURE';
// (수정)
export const ADD_MODIFY_POST_REQUEST = 'ADD_MODIFY_POST_REQUEST';
export const ADD_MODIFY_POST_SUCCESS = 'ADD_MODIFY_POST_SUCCESS';
export const ADD_MODIFY_POST_FAILURE = 'ADD_MODIFY_POST_FAILURE';
export const GET_MODIFY_IMAGES_REQUEST = 'GET_MODIFY_IMAGES_REQUEST';
export const GET_MODIFY_IMAGES_SUCCESS = 'GET_MODIFY_IMAGES_SUCCESS';
export const GET_MODIFY_IMAGES_FAILURE = 'GET_MODIFY_IMAGES_FAILURE';
export const UPLOAD_MODIFY_IMAGES_REQUEST = 'UPLOAD_MODIFY_IMAGES_REQUEST';
export const UPLOAD_MODIFY_IMAGES_SUCCESS = 'UPLOAD_MODIFY_IMAGES_SUCCESS';
export const UPLOAD_MODIFY_IMAGES_FAILURE = 'UPLOAD_MODIFY_IMAGES_FAILURE';
export const REMOVE_MODIFY_IMAGE_REQUEST = 'REMOVE_MODIFY_IMAGE_REQUEST';
export const REMOVE_MODIFY_IMAGE_SUCCESS = 'REMOVE_MODIFY_IMAGE_SUCCESS';
export const REMOVE_MODIFY_IMAGE_FAILURE = 'REMOVE_MODIFY_IMAGE_FAILURE';
// (삭제)
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
// (읽기)
export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

// 댓글 관련
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

// SSR 확인 용도
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

// 팔로우, 언팔로우, 리트윗 관련
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const initialState = {
  mainPosts: {
    isFulfilled: false,
    data: [],
    error: '',
  },

  comment: {
    isAdding: false,
    added: false,
    error: '',
  },

  uploadPost: {
    isAdding: false, // 업로드 중인지
    added: false, // 업로드 여부
    imagePaths: [], // PostForm에 표시 될 이미지들의 경로
    error: '', // 실패 이유
  },

  modifyPost: {
    isAdding: false,
    added: false,
    imagePaths: [],
    error: '',
  },
};

export default (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case UPLOAD_IMAGES_REQUEST: {
      break;
    }
    case UPLOAD_IMAGES_SUCCESS: {
      console.log(`new image path = ${action.data}`);
      action.data.forEach((v) => draft.uploadPost.imagePaths.push(v));
      break;
    }
    case UPLOAD_IMAGES_FAILURE: {
      break;
    }

    case UPLOAD_MODIFY_IMAGES_REQUEST: {
      break;
    }
    case UPLOAD_MODIFY_IMAGES_SUCCESS: {
      action.data.forEach((v) => draft.modifyPost.imagePaths.push(v));
      break;
    }
    case UPLOAD_MODIFY_IMAGES_FAILURE: {
      break;
    }

    case GET_MODIFY_IMAGES_REQUEST: {
      draft.modifyPost.imagePaths = [];
      break;
    }
    case GET_MODIFY_IMAGES_SUCCESS: {
      console.log(`modify image path = ${action.data}`);
      action.data.forEach((v) => draft.modifyPost.imagePaths.push(v));
      break;
    }
    case GET_MODIFY_IMAGES_FAILURE: {
      break;
    }

    case RETWEET_REQUEST: {
      break;
    }
    case RETWEET_SUCCESS: {
      draft.mainPosts.data.unshift(action.data);
      break;
    }
    case RETWEET_FAILURE: {
      break;
    }

    case REMOVE_UPLOAD_IMAGE_REQUEST: {
      const index = draft.uploadPost.imagePaths.findIndex((v, i) => v === action.data.imgSrc);
      draft.uploadPost.imagePaths.splice(index, 1);
      break;
    }
    case REMOVE_UPLOAD_IMAGE_SUCCESS: {
      break;
    }
    case REMOVE_UPLOAD_IMAGE_FAILURE: {
      break;
    }

    case REMOVE_MODIFY_IMAGE_REQUEST: {
      // modifyPost의 해당 이미지 제거
      const index = draft.modifyPost.imagePaths.findIndex((v, i) => v === action.data.imgSrc);
      draft.modifyPost.imagePaths.splice(index, 1);
      // mainPosts에도 반영
      const postIndex = draft.mainPosts.data.findIndex((v, i) => v.id === action.data.postId);
      const imgIndex = draft.mainPosts.data[postIndex].Images
        .findIndex((v, i) => v.src === action.data.imgSrc);
      draft.mainPosts.data[postIndex].Images.splice(imgIndex, 1);
      break;
    }
    case REMOVE_MODIFY_IMAGE_SUCCESS: {
      break;
    }
    case REMOVE_MODIFY_IMAGE_FAILURE: {
      break;
    }

    case ADD_POST_REQUEST: {
      draft.uploadPost.error = '';
      draft.uploadPost.isAdding = true;
      break;
    }
    case ADD_POST_SUCCESS: {
      draft.mainPosts.data.unshift(action.data);
      draft.uploadPost.isAdding = false;
      draft.uploadPost.imagePaths = [];
      break;
    }
    case ADD_POST_FAILURE: {
      draft.uploadPost.error = action.error;
      draft.uploadPost.isAdding = false;
      break;
    }

    case ADD_MODIFY_POST_REQUEST: {
      draft.modifyPost.error = '';
      draft.modifyPost.isAdding = true;
      break;
    }
    case ADD_MODIFY_POST_SUCCESS: {
      // ㅁㅁ게시글 수정은 앞에 추가하는게 아니라 해당 포스트를 찾아서 덮어씌워야 됨
      const index = draft.mainPosts.data.findIndex((v) => v.id === action.data.id);
      draft.mainPosts.data[index] = action.data;
      // draft.mainPosts.data.unshift(action.data);
      draft.modifyPost.isAdding = false;
      draft.modifyPost.imagePaths = [];
      break;
    }
    case ADD_MODIFY_POST_FAILURE: {
      draft.modifyPost.error = action.error;
      draft.modifyPost.isAdding = false;
      break;
    }

    case LIKE_POST_REQUEST: {
      break;
    }
    case LIKE_POST_SUCCESS: {
      const index = draft.mainPosts.data.findIndex((v) => v.id === action.data.postId);
      draft.mainPosts.data[index].Likers.push({ id: action.data.userId });
      break;
    }
    case LIKE_POST_FAILURE: {
      break;
    }

    case UNLIKE_POST_REQUEST: {
      break;
    }
    case UNLIKE_POST_SUCCESS: {
      const postIndex = draft.mainPosts.data.findIndex((v) => v.id === action.data.postId);
      const likeIndex = draft.mainPosts.data[postIndex].Likers.findIndex((v) => v.id
        === action.data.userId);
      draft.mainPosts.data[postIndex].Likers.splice(likeIndex, 1);
      break;
    }
    case UNLIKE_POST_FAILURE: {
      break;
    }

    case ADD_COMMENT_REQUEST: {
      draft.comment.isAdding = true;
      draft.comment.added = false;
      draft.comment.error = '';
      break;
    }

    case ADD_COMMENT_SUCCESS: {
      const index = draft.mainPosts.data.findIndex((v) => v.id === action.data.postId);
      draft.mainPosts.data[index].Comments.push(action.data.comment);
      draft.comment.isAdding = false;
      draft.comment.added = true;
      break;
    }

    case ADD_COMMENT_FAILURE: {
      draft.comment.isAdding = false;
      draft.comment.error = action.error;
      break;
    }

    case LOAD_COMMENTS_SUCCESS: {
      const index = draft.mainPosts.data.findIndex((v) => v.id === action.data.postId);
      draft.mainPosts.data[index].Comments = action.data.comments;
      break;
    }

    case LOAD_MAIN_POSTS_REQUEST:
    case LOAD_POST_REQUEST:
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST: {
      break;
    }

    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_MAIN_POSTS_SUCCESS: {
      action.data.map((v) => draft.mainPosts.data.push(v));

      if (action.data.length === 0) {
        draft.mainPosts.isFulfilled = true;
      }

      break;
    }

    case LOAD_POST_SUCCESS: {
      draft.mainPosts.data = action.data;
      break;
    }

    case LOAD_POST_FAILURE:
    case LOAD_MAIN_POSTS_FAILURE: {
      break;
    }

    case LOAD_COMMENTS_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE: {
      break;
    }

    case REMOVE_POST_REQUEST: {
      break;
    }
    case REMOVE_POST_SUCCESS: {
      const index = draft.mainPosts.data.findIndex((v) => (v.id === action.data));
      draft.mainPosts.data.splice(index, 1);
      break;
    }
    case REMOVE_POST_FAILURE: {
      break;
    }
    default: {
      break;
    }
  }
});
