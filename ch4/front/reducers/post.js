export const initialState = {
    isAddingComment: false,
    commentAdded: false,
    addCommentErrorReason: '',

    addPostErrorReason: '', // 포스트 업로드 실패 이유
    isAddingPost: false, // 포스트 업로드 중
    imagePaths: [],    
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '오한민',
        },
        content: '1 번째 게시글',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAgVBMVEX/////0xpwfoW9zdOUnqR5ho329/e3vsHb3+DJztGmr7Pt7/Dk5+j80iOCjpSMl52dpquvt7uRkm3AxsnP2t79/Pa3qFDS19ntyjD/+N3c5ej/9MbbvzT/6pF/jIXI1dr/2j6inF//5HT/3lP/7qnOtz7/4WLg0XL/8bfBr0jOz6JHQ9SfAAALj0lEQVR4nO1ca3ujqhbOWMULxsaamEvTmHTaOdP9/3/gAQFFBQUFzT7H98M806Yqr+u+WGSzWbFixYoVK1asWLFixYoVK1Zo4/xOcVh6JSPx/vXx5/f2VwP3359f/yZC56/P+y857n8+zksvUQF/e0kwbD//Lr3QXvz93A6TeHou5w8VWTSU7OMJDeb9jyYLKpYnM5f332NolHgmqUyggaXysfT6KQ6fU2hgJven0K8PdUclx/JCObej90j8WdhSvszQQFhWvaZaB4ftdjkmB90AOEBlKSZnszwWY3I2Zh4V7ktYvAUeyHf9j/BYIMjb4TG/mRj2VxyRmZVrVMquhvc5eXzY4zGrvb9PXu32muf590n42XxWMtlAtg+H4O1b8Ol8jmuqYl1vToVHVyr3uXicJ/L49eZweOv68bl0S7WsPf080JLfHtf27wmB/PuaYxV7dC78moeHoqWf3qQvHf+KatQJUeko1+c8RNQEkvPq03rp+VvO/9C59j4LDyULOTXMwHGUuNeYhYhSTUjc6+0tz0tG3Zfejzms/aCSLP6U+kSN/Dv/0U0w58hSvlQWgoXQ9lXPRkQlW7zqK9PsRA4q6zjdBPH6yYj8nbTAJyJisI+1LJFJXfdnIjILjxkC4uTEVwlb+0Sml4Yq+G2fiM1avcYMJeI8RP7V3vf6qFL7GUzEmvfF9VVFRFxXxb4fPjuRbX7jePwSzkOEOKH2N0ffz4BNItcHWsttVIZV0uCSZaFmwbLASV7xv54BJjIi32Ud9RhLw8nrV7AValbA15uZNSKkL5KLP+zDtSwlm7WLsDyEYRD4CSXiWyPCOg0PSRNUQv+HVPY/jd92BAKQXfiR67rZZkceE08nIokjOa7PHdauUiJzpSxubTm2BRJ7tUoxBYsmW4mECKrRkXZ8s47ubYDN9edBm6YdGl2B7JwuEWc3lYikYt/enFLNtxUXLJu3/Od6bfYdrtf8wTXuBC3sjoW41Z97MGX/dacSkSWN18rtnL4frZ4WEhBB69e5qD3RTbMqIklca9lkiajVIwIyLXQbwgSC7ekIUdghcz8CgLWMcAkmE1EP7dfvvCMEQqLHgARBvQzpHnJaTgh9H+Ifk+NkHtrp7wlZRf6TI06PHOF67XVpwl03Fj0cLwuyHYh9AzQsl4hb4dwD53+xNNLUBI/Nxta2NIZkejZ+bajmZI9V4mCxtJJviwRRLRUPGiGi1sQehXvvc0PGw0B+QmBLJEOzG6Z5WBPJwMYhzU4MFomWRDK0bxgRgRjkYafevQ88ExBrj4wSsTDhNDjc5BPNMhILa5jvNw51sqhAzGrWRnH/TQODrUUqELOaZZ7J4EgmFYiJGtcqk8GDPanJ5KSFd3MWfx96Vkyj+vQqRARz08uDMzSuLQuh0DgX1ofBnnVGsxN7w83vRoQyFNOZYhmOIU2YOHQxYOqAVoiG6ikZDtOP8wxoDK2qXu3yMEDl3n/7iFa4c0z/H76m2ErvmC94NV6G9ON9xJ7c6XT6D8L+cokvF3EzN/Rm5rHBYlGdMsfr/+eflyYEd4QZawQlM/LAOH8MccEUXoRo3yv269aJu8DpmMOXtOo6yThg7Ll7gMB3uVaWZ7K61cFZYC69JDgi8OjvEofHa2hi63Msld8tFv0kMIog9HfNPhwiES3JosSHFguMFofE9YOlSZSgSb4ii5cXburfjZ6EA8F5++s0YBcNIoiJ6/pZYKgfahCxBo2Xl4udmmk64F6HBiKy2EKznYux8/0w6MRdoEljMSLBruVkPMQorE30Mrjwomj+vO97nC2AyJEBexxkrqAQL5+s+QLjS/sPliBy9KQ8GJ1URqQo4AZ2WCxCpBaHyyBmc7t1WOBcPRabz+xEIEsj0mbMCoLA99M2KX6plxirnERUxdzGzjZY5QUCCLK0yl1roVygzCUXRTx/EGQF224ohQDBK47VN16nRJZxgeROcF4ubD9SpeMXc0oFRTSQ3RMSoPRhdlfeBOOhNIh3qN46Wi5s0yhiRmJPP7K68iYYD8WCjRhEIbANahSg4Yfn0y1NHkS3kDhAM8wXpF8C2m54NiKBJo8NIOJoGgdRKSAw/LmIML+rMai6L0ArV9mXqxWHxJkaPqyRrLNDAVrJI3ZeSNEkIXGmiEgj9qtWCdpI5gt8KRSnxcWFxRPboHuqmltf3LsvLVwUEov9ZcZYWE3b6l1Wrbu0DQGNgnV8UV4/i2oluh6LgOpRIaZxaUaTwsK622ARRNNESCQp89oODRrZIZcN21h5C3UDMNEyEkC1qhPZLySY7Bv0LC2eA+QrDC3tKrWq3YjY44jRCewvL/bdVtaolXSujDsJCqEmcl8zhPZGxyTRu7a15EJe61qWyDFKYKNHrnWWptVMuYBOYC/wvhuAtsNhjP3upiEQoPNI0LAN0FApRGG2Ehcnil7YIOL6WmdQeNvg0pN9UYsA4K6FP/3wQQ/KRDHmz2/g6XStHdbKHC6VMPYsmoMg8102DGA198VxEA9IwZTbDMMWoz4KzWI7jRgFzaviMOU3CQ0cNBKsfudntCmNM0VyvOxQ90jLvEs55+I6EMW+DOYQcXCa8KwMy9Cn4Ka0n+58pgaR66ZHt3RajsZYCGQsSlHAMEocAbydb161/NYz3FpC6AVDMnOkPutZswjS9lZni0xm1IcFkg51TQi7MnUfU7yUGnWMxLfd+RFHL0nNbVtFkS98IkcIKZz68zCLOBWzSFKSxwc+d64tMmMwwPFArwZ0JTSMbCcgkqSNFXOK56UGdAx5XD8e3P7g1+MqHZuFRz+qHG7ipqFgrTCruLiTVawMEoFk0RIqOjcfyJ1hpYTutMhSVh5uXREqwFPe2weOwgAyCKmDnjagRRj4G3XtiuDgDgPDUYUIokK9zaSZIFp5hBso2U5rwQ2Qa1C9eeoonkNnZ9zGMwHVe0auZlgoUbwJEvVx9VfltYHqhY5EbRsoGz34vVRew8MGpI563lW+JVVvRHO7sXbCb5/jLCtsjwVQJBFigZS5ZKr6rQXYRNQLfnqgaiSThgi8MmEMWtNgKA4eyxhQnXBUjcRYehozyMRINRtpFLHTQpUuwKAEG5FEWWzNWfWlYbeqUQfSBGPU+QRRltWaR4dB2JibVNcWqKOGGDQEyA0eSCOYKMmq3iEqSIRJmGpgL5tjWpkHcT3SajTwZBUZEK2TOVco+pD/gyG4GtKj2PU9AHrStyhMTJh5SpN7RW0B/M0UAfqUi7i1no/aIAZ+kMaUumEH+rL68i3pHgAhr1b42qmGCC8TltPUbcgHtCq1xzJL/F77066ZXKnQUzkRmRUkWZCJOZZg3QkWOyOhWCD/t+ogAUHw3U3sWKLoIp3cvQZrQ3A5gCtQ6vIFjjiSE0lEQhcrvGPaWaQKXNHFXtoSC3mBI85Ilb6pKxImEOEd1RL3NogJHTu/bzZEiM8bU7/63FO6axUa3SgeROpA7NNcmpYxVR/Bg926GRWZ6xHfcRyRgLuxewy6/atX13WnHKknImlExWoHTRzDxhEpe4gOv9CjJPcfec62GxWrUCD+JjphgjIMfCnNuOtbCesYzT27CkQkVcoF6ntLkopRPPDqqUAaagy7XMa2qmh8o5VJWKuuTFWVGoxt4OTYrf7XADg2utbjOwlUlVD1HfORWWpyXReqAL//60rKTSmMaEIXVJxy9CSrfFC7CS/u4li9MIvbsgKL83oVNVDSrgZHyAr9saasgq6u7IbOJcJs15MfClAV+la+jIGhFZsUB2IO/Ej4ANzqdVk9a97I5BI9t3Hg9o7lyKrS0eo+OWfuotRa6Ral25HxwN/BwFrOVmcwqEiSdlatDzyd4LYVrjyxMHJKUBMZ8uCZyZ3fQ4BEhI+JuBH9ar5K7EudDDaGSvGsfkfGDKgaraa+424xVMW+XTOZAcE831syB0Ly9cgrVqxYsWLFihUrVqxY8X+I/wLGCrh+STMDpAAAAABJRU5ErkJggg==',
        Comments: [],
    }, {
        User: {
            id: 2,
            nickname: '오한민',
        },
        content: '2 번째 게시글',
        img: 'https://sb-content-file.s3-ap-northeast-1.amazonaws.com/smallbridge_favicon.png',
        Comments: [],
    }],
};

const dummyPost = {
    id: 2,
    User: {
        id: 1,
        nickname: '오한민',
    },
    content: '나는 더미입니다.',
    Comments: [],
    // img: 'https://sb-content-file.s3-ap-northeast-1.amazonaws.com/smallbridge_favicon.png'
}

const dummyComment = {
    id: 1,
    User: {
      id: 1,
      nickname: '제로초',
    },
    createdAt: new Date(),
    content: '더미 댓글입니다.',
  };

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

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
                mainPosts: [dummyPost, ...state.mainPosts],
                isAddingPost: false
            }
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                addPostErrorReason: action.error,
                isAddingPost: false
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
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Comments = [...post.Comments, dummyComment];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Comments };

            return {
                ...state,
                isAddingComment: false,
                commentAdded: true,
                mainPosts,
            }
        }
        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error,
            }
        }
        default: {
            return {...state};
        }
    }
}