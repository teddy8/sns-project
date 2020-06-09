export const initialState = {
    isAddingComment: false,
    commentAdded: false,
    addCommentErrorReason: '',
    addPostErrorReason: '', // 포스트 업로드 실패 이유
    isAddingPost: false, // 포스트 업로드 중
    imagePaths: [],    
    mainPosts: [],
};

// const dummyPost = {
//     id: 2,
//     content: '나는 더미입니다.',
//     Comments: [],
//     // img: 'https://sb-content-file.s3-ap-northeast-1.amazonaws.com/smallbridge_favicon.png'
//     User: {
//         id: 1,
//         nickname: '오한민',
//     },
// }

// const dummyComment = {
//     id: 1,
//     User: {
//       id: 1,
//       nickname: '제로초',
//     },
//     createdAt: new Date(),
//     content: '더미 댓글입니다.',
//   };

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST'
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS'
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE'

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const ADD_DUMMY = 'ADD_DUMMY';

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: '제로초',
        }
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_IMAGES_REQUEST: {
            return {
                ...state,
            }
        }       
        case UPLOAD_IMAGES_SUCCESS: {
            console.log('new image path = ' + action.data);
            
            return {
                ...state,
                imagePaths: [...state.imagePaths, ...action.data]
            }
        }
        case UPLOAD_IMAGES_FAILURE: {
            return {
                ...state,
            }
        }

        case RETWEET_REQUEST: {
            return {
                ...state,
            }
        }       
        case RETWEET_SUCCESS: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts]
            }
        }
        case RETWEET_FAILURE: {
            return {
                ...state,
            }
        }

        case REMOVE_IMAGE: {
            return {
                ...state,
                imagePaths: state.imagePaths.filter((v, i) => i !== action.index)
            }
        }

        case ADD_POST_REQUEST: {
            return {
                ...state,
                addPostErrorReason: '',
                isAddingPost: true
            }
        }       
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                // mainPosts: [dummyPost, ...state.mainPosts],
                mainPosts: [action.data, ...state.mainPosts],
                isAddingPost: false,
                imagePaths: [],
            }
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                addPostErrorReason: action.error,
                isAddingPost: false
            }
        }
 
        case LIKE_POST_REQUEST: {
            return {
                ...state,
            }
        }       
        case LIKE_POST_SUCCESS: {
            return {
                ...state,
                mainPosts: state.mainPosts.map(v => 
                    v.id === action.data.postId ?
                    {
                        ...v, 
                        Likers: [...v.Likers, { id: action.data.userId } ]
                    }
                    : v
                ),
            }
        }
        case LIKE_POST_FAILURE: {
            return {
                ...state,
            }
        }

        case UNLIKE_POST_REQUEST: {
            return {
                ...state,
            }
        }       
        case UNLIKE_POST_SUCCESS: {
            console.log('1 = ' , action.data.userId);
            console.log('2 = ' , action.data.postId);
            
            return {
                ...state,
                mainPosts: state.mainPosts.map(v => 
                    v.id === action.data.postId ?
                    {
                        ...v,
                        Likers: v.Likers.filter(v=>v.id !== action.data.userId)
                    }
                    : v
                )
            }
        }
        case UNLIKE_POST_FAILURE: {
            return {
                ...state,
            }
        }

        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            }
        }

        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingComment: true,
                commentAdded: false,
                addCommentErrorReason: ''
            }
        }

        case ADD_COMMENT_SUCCESS: {
            return {
                ...state,
                mainPosts: state.mainPosts.map(v => 
                    v.id === action.data.postId ?
                    {    
                        ...v, 
                        Comments : [...v.Comments, action.data.comment] 
                    } 
                    : v
                ),
                isAddingComment: false,
                commentAdded: true,            
            }
        }
        
        case ADD_COMMENT_FAILURE: {
            console.error('reason = ' + action.error);
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error,
            }
        }  

        case LOAD_COMMENTS_SUCCESS: {
            return {
                ...state,
                mainPosts: state.mainPosts.map(v => 
                    v.id == action.data.postId ? 
                    {
                        ...v, 
                        Comments: action.data.comments
                    }
                    : v
                ),
            }
        }

        case LOAD_MAIN_POSTS_REQUEST: 
        case LOAD_USER_POSTS_REQUEST:
        case LOAD_HASHTAG_POSTS_REQUEST: {
            return {
                ...state,
                mainPosts: [],
            }
        }       

        case LOAD_MAIN_POSTS_SUCCESS:
        case LOAD_USER_POSTS_SUCCESS:
        case LOAD_HASHTAG_POSTS_SUCCESS: {
            // console.log('response mainPosts = ' + JSON.stringify(action.data));
            return {
                ...state,
                mainPosts: action.data,
            }
        }

        case LOAD_COMMENTS_FAILURE:
        case LOAD_MAIN_POSTS_FAILURE:
        case LOAD_USER_POSTS_FAILURE:
        case LOAD_HASHTAG_POSTS_FAILURE: {
            return {
                ...state,
            }
        }

        default: {
            return {...state};
        }
    }
}