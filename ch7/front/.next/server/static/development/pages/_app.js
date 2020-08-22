module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.ts");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Helmet from 'next/head';




 // import withRedux from 'next-redux-wrapper'
// import withReduxSaga from 'next-redux-saga'
// import AppLayout from '../components/AppLayout';
// import {createStore, compose, applyMiddleware} from 'redux'
// import { Provider } from 'react-redux';
// import reducer from '../reducers'
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../sagas'
// import axios from 'axios'
// import { LOAD_USER_REQUEST } from '../reducers/user'

const NodeBird = ({
  Component
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 7
  }
}, "NodeBird ch7"), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  charSet: "UTF-8",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }
})), __jsx(Component, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}));

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.ts");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.ts");



 // (이전상태, 액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      // console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.ts":
/*!**************************!*\
  !*** ./reducers/post.ts ***!
  \**************************/
/*! exports provided: ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_UPLOAD_IMAGE_REQUEST, REMOVE_UPLOAD_IMAGE_SUCCESS, REMOVE_UPLOAD_IMAGE_FAILURE, ADD_MODIFY_POST_REQUEST, ADD_MODIFY_POST_SUCCESS, ADD_MODIFY_POST_FAILURE, GET_MODIFY_IMAGES_REQUEST, GET_MODIFY_IMAGES_SUCCESS, GET_MODIFY_IMAGES_FAILURE, UPLOAD_MODIFY_IMAGES_REQUEST, UPLOAD_MODIFY_IMAGES_SUCCESS, UPLOAD_MODIFY_IMAGES_FAILURE, REMOVE_MODIFY_IMAGE_REQUEST, REMOVE_MODIFY_IMAGE_SUCCESS, REMOVE_MODIFY_IMAGE_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_UPLOAD_IMAGE_REQUEST", function() { return REMOVE_UPLOAD_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_UPLOAD_IMAGE_SUCCESS", function() { return REMOVE_UPLOAD_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_UPLOAD_IMAGE_FAILURE", function() { return REMOVE_UPLOAD_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MODIFY_POST_REQUEST", function() { return ADD_MODIFY_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MODIFY_POST_SUCCESS", function() { return ADD_MODIFY_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MODIFY_POST_FAILURE", function() { return ADD_MODIFY_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MODIFY_IMAGES_REQUEST", function() { return GET_MODIFY_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MODIFY_IMAGES_SUCCESS", function() { return GET_MODIFY_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MODIFY_IMAGES_FAILURE", function() { return GET_MODIFY_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_MODIFY_IMAGES_REQUEST", function() { return UPLOAD_MODIFY_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_MODIFY_IMAGES_SUCCESS", function() { return UPLOAD_MODIFY_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_MODIFY_IMAGES_FAILURE", function() { return UPLOAD_MODIFY_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_MODIFY_IMAGE_REQUEST", function() { return REMOVE_MODIFY_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_MODIFY_IMAGE_SUCCESS", function() { return REMOVE_MODIFY_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_MODIFY_IMAGE_FAILURE", function() { return REMOVE_MODIFY_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_REQUEST", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_SUCCESS", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MAIN_POSTS_FAILURE", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_REQUEST", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_SUCCESS", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COMMENTS_FAILURE", function() { return LOAD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
 // 게시글 관련
// (쓰기)

const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const REMOVE_UPLOAD_IMAGE_REQUEST = 'REMOVE_UPLOAD_IMAGE_REQUEST';
const REMOVE_UPLOAD_IMAGE_SUCCESS = 'REMOVE_UPLOAD_IMAGE_SUCCESS';
const REMOVE_UPLOAD_IMAGE_FAILURE = 'REMOVE_UPLOAD_IMAGE_FAILURE'; // (수정)

const ADD_MODIFY_POST_REQUEST = 'ADD_MODIFY_POST_REQUEST';
const ADD_MODIFY_POST_SUCCESS = 'ADD_MODIFY_POST_SUCCESS';
const ADD_MODIFY_POST_FAILURE = 'ADD_MODIFY_POST_FAILURE';
const GET_MODIFY_IMAGES_REQUEST = 'GET_MODIFY_IMAGES_REQUEST';
const GET_MODIFY_IMAGES_SUCCESS = 'GET_MODIFY_IMAGES_SUCCESS';
const GET_MODIFY_IMAGES_FAILURE = 'GET_MODIFY_IMAGES_FAILURE';
const UPLOAD_MODIFY_IMAGES_REQUEST = 'UPLOAD_MODIFY_IMAGES_REQUEST';
const UPLOAD_MODIFY_IMAGES_SUCCESS = 'UPLOAD_MODIFY_IMAGES_SUCCESS';
const UPLOAD_MODIFY_IMAGES_FAILURE = 'UPLOAD_MODIFY_IMAGES_FAILURE';
const REMOVE_MODIFY_IMAGE_REQUEST = 'REMOVE_MODIFY_IMAGE_REQUEST';
const REMOVE_MODIFY_IMAGE_SUCCESS = 'REMOVE_MODIFY_IMAGE_SUCCESS';
const REMOVE_MODIFY_IMAGE_FAILURE = 'REMOVE_MODIFY_IMAGE_FAILURE'; // (삭제)

const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE'; // (읽기)

const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE'; // 댓글 관련

const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE'; // SSR 확인 용도

const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE'; // 팔로우, 언팔로우, 리트윗 관련

const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const initialState = {
  mainPosts: {
    isFulfilled: false,
    data: [],
    error: ''
  },
  comment: {
    isAdding: false,
    added: false,
    error: ''
  },
  uploadPost: {
    isAdding: false,
    // 업로드 중인지
    added: false,
    // 업로드 여부
    imagePaths: [],
    // PostForm에 표시 될 이미지들의 경로
    error: '' // 실패 이유

  },
  modifyPost: {
    isAdding: false,
    added: false,
    imagePaths: [],
    error: ''
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case UPLOAD_IMAGES_REQUEST:
      {
        break;
      }

    case UPLOAD_IMAGES_SUCCESS:
      {
        console.log(`new image path = ${action.data}`);
        action.data.forEach(v => draft.uploadPost.imagePaths.push(v));
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      {
        break;
      }

    case UPLOAD_MODIFY_IMAGES_REQUEST:
      {
        break;
      }

    case UPLOAD_MODIFY_IMAGES_SUCCESS:
      {
        action.data.forEach(v => draft.modifyPost.imagePaths.push(v));
        break;
      }

    case UPLOAD_MODIFY_IMAGES_FAILURE:
      {
        break;
      }

    case GET_MODIFY_IMAGES_REQUEST:
      {
        draft.modifyPost.imagePaths = [];
        break;
      }

    case GET_MODIFY_IMAGES_SUCCESS:
      {
        console.log(`modify image path = ${action.data}`);
        action.data.forEach(v => draft.modifyPost.imagePaths.push(v));
        break;
      }

    case GET_MODIFY_IMAGES_FAILURE:
      {
        break;
      }

    case RETWEET_REQUEST:
      {
        break;
      }

    case RETWEET_SUCCESS:
      {
        draft.mainPosts.data.unshift(action.data);
        break;
      }

    case RETWEET_FAILURE:
      {
        break;
      }

    case REMOVE_UPLOAD_IMAGE_REQUEST:
      {
        const index = draft.uploadPost.imagePaths.findIndex((v, i) => v === action.data.imgSrc);
        draft.uploadPost.imagePaths.splice(index, 1);
        break;
      }

    case REMOVE_UPLOAD_IMAGE_SUCCESS:
      {
        break;
      }

    case REMOVE_UPLOAD_IMAGE_FAILURE:
      {
        break;
      }

    case REMOVE_MODIFY_IMAGE_REQUEST:
      {
        // modifyPost의 해당 이미지 제거
        const index = draft.modifyPost.imagePaths.findIndex((v, i) => v === action.data.imgSrc);
        draft.modifyPost.imagePaths.splice(index, 1); // mainPosts에도 반영

        const postIndex = draft.mainPosts.data.findIndex((v, i) => v.id === action.data.postId);
        const imgIndex = draft.mainPosts.data[postIndex].Images.findIndex((v, i) => v.src === action.data.imgSrc);
        draft.mainPosts.data[postIndex].Images.splice(imgIndex, 1);
        break;
      }

    case REMOVE_MODIFY_IMAGE_SUCCESS:
      {
        break;
      }

    case REMOVE_MODIFY_IMAGE_FAILURE:
      {
        break;
      }

    case ADD_POST_REQUEST:
      {
        draft.uploadPost.error = '';
        draft.uploadPost.isAdding = true;
        break;
      }

    case ADD_POST_SUCCESS:
      {
        draft.mainPosts.data.unshift(action.data);
        draft.uploadPost.isAdding = false;
        draft.uploadPost.imagePaths = [];
        break;
      }

    case ADD_POST_FAILURE:
      {
        draft.uploadPost.error = action.error;
        draft.uploadPost.isAdding = false;
        break;
      }

    case ADD_MODIFY_POST_REQUEST:
      {
        draft.modifyPost.error = '';
        draft.modifyPost.isAdding = true;
        break;
      }

    case ADD_MODIFY_POST_SUCCESS:
      {
        // ㅁㅁ게시글 수정은 앞에 추가하는게 아니라 해당 포스트를 찾아서 덮어씌워야 됨
        const index = draft.mainPosts.data.findIndex(v => v.id === action.data.id);
        draft.mainPosts.data[index] = action.data; // draft.mainPosts.data.unshift(action.data);

        draft.modifyPost.isAdding = false;
        draft.modifyPost.imagePaths = [];
        break;
      }

    case ADD_MODIFY_POST_FAILURE:
      {
        draft.modifyPost.error = action.error;
        draft.modifyPost.isAdding = false;
        break;
      }

    case LIKE_POST_REQUEST:
      {
        break;
      }

    case LIKE_POST_SUCCESS:
      {
        const index = draft.mainPosts.data.findIndex(v => v.id === action.data.postId);
        draft.mainPosts.data[index].Likers.push({
          id: action.data.userId
        });
        break;
      }

    case LIKE_POST_FAILURE:
      {
        break;
      }

    case UNLIKE_POST_REQUEST:
      {
        break;
      }

    case UNLIKE_POST_SUCCESS:
      {
        const postIndex = draft.mainPosts.data.findIndex(v => v.id === action.data.postId);
        const likeIndex = draft.mainPosts.data[postIndex].Likers.findIndex(v => v.id === action.data.userId);
        draft.mainPosts.data[postIndex].Likers.splice(likeIndex, 1);
        break;
      }

    case UNLIKE_POST_FAILURE:
      {
        break;
      }

    case ADD_COMMENT_REQUEST:
      {
        draft.comment.isAdding = true;
        draft.comment.added = false;
        draft.comment.error = '';
        break;
      }

    case ADD_COMMENT_SUCCESS:
      {
        const index = draft.mainPosts.data.findIndex(v => v.id === action.data.postId);
        draft.mainPosts.data[index].Comments.push(action.data.comment);
        draft.comment.isAdding = false;
        draft.comment.added = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      {
        draft.comment.isAdding = false;
        draft.comment.error = action.error;
        break;
      }

    case LOAD_COMMENTS_SUCCESS:
      {
        const index = draft.mainPosts.data.findIndex(v => v.id === action.data.postId);
        draft.mainPosts.data[index].Comments = action.data.comments;
        break;
      }

    case LOAD_MAIN_POSTS_REQUEST:
    case LOAD_POST_REQUEST:
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
      {
        break;
      }

    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_MAIN_POSTS_SUCCESS:
      {
        action.data.map(v => draft.mainPosts.data.push(v));

        if (action.data.length === 0) {
          draft.mainPosts.isFulfilled = true;
        }

        break;
      }

    case LOAD_POST_SUCCESS:
      {
        draft.mainPosts.data = action.data;
        break;
      }

    case LOAD_POST_FAILURE:
    case LOAD_MAIN_POSTS_FAILURE:
      {
        break;
      }

    case LOAD_COMMENTS_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
      {
        break;
      }

    case REMOVE_POST_REQUEST:
      {
        break;
      }

    case REMOVE_POST_SUCCESS:
      {
        const index = draft.mainPosts.data.findIndex(v => v.id === action.data);
        draft.mainPosts.data.splice(index, 1);
        break;
      }

    case REMOVE_POST_FAILURE:
      {
        break;
      }

    default:
      {
        break;
      }
  }
}));

/***/ }),

/***/ "./reducers/user.ts":
/*!**************************!*\
  !*** ./reducers/user.ts ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE, ADD_POST_TO_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_REQUEST", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_SUCCESS", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_FAILURE", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_REQUEST", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_SUCCESS", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_FAILURE", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_NICKNAME_REQUEST", function() { return EDIT_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_NICKNAME_SUCCESS", function() { return EDIT_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_NICKNAME_FAILURE", function() { return EDIT_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const dummyUser = {
  nickname: '오한민',
  Post: [],
  Followings: [],
  Followers: [],
  id: 1
};
const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  // 로그인 요청중인지
  loginErrorReason: '',
  // 로그인 실패 이유
  isLoggingOut: false,
  // 로그아웃 시도중
  isSignedUp: false,
  // 회원가입 성공 여부
  isSigningUp: false,
  // 회원가입 시도중
  signUpData: null,
  signUpErrorReason: '',
  // 회원가입 실패 이유
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
  userInfo: null,
  // 남의 정보
  followingList: {
    // 팔로잉 리스트
    isFulfilled: false,
    data: [],
    error: ''
  },
  followerList: {
    // 팔로워 리스트
    isFulfilled: false,
    data: [],
    error: ''
  }
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      {
        draft.isLoggingIn = true;
        break;
      }

    case LOG_IN_SUCCESS:
      {
        draft.isLoggingIn = false;
        draft.isLoggedIn = true; // me: dummyUser,

        draft.me = action.data;
        break;
      }

    case LOG_IN_FAILURE:
      {
        draft.isLoggedIn = false;
        draft.me = null;
        draft.loginErrorReason = action.error;
        break;
      }

    case LOG_OUT_REQUEST:
      {
        draft.isLoggingOut = true;
        break;
      }

    case LOG_OUT_SUCCESS:
      {
        draft.isLoggedIn = false;
        draft.isLoggingOut = false;
        draft.me = null;
        break;
      }

    case SIGN_UP_REQUEST:
      {
        draft.signUpData = action.data;
        draft.isSigningUp = true;
        break;
      }

    case SIGN_UP_SUCCESS:
      {
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        break;
      }

    case SIGN_UP_FAILURE:
      {
        draft.signUpErrorReason = action.error;
        break;
      }

    case LOAD_USER_REQUEST:
      {
        break;
      }

    case LOAD_USER_SUCCESS:
      {
        if (action.isMe) {
          // 나
          console.log('나 me = ', action.data);
          draft.me = action.data;
          break;
        } // 상대


        console.log('상대');
        draft.userInfo = action.data;
        break;
      }

    case LOAD_USER_FAILURE:
      {
        break;
      }

    case FOLLOW_USER_REQUEST:
      {
        break;
      }

    case FOLLOW_USER_SUCCESS:
      {
        draft.me.Followings.unshift({
          id: action.data
        });
        break;
      }

    case FOLLOW_USER_FAILURE:
      {
        break;
      }

    case UNFOLLOW_USER_REQUEST:
      {
        break;
      }

    case UNFOLLOW_USER_SUCCESS:
      {
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
        draft.followingList.data = draft.followingList.data.filter(v => v.id !== action.data);
        break;
      }

    case UNFOLLOW_USER_FAILURE:
      {
        break;
      }

    case ADD_POST_TO_ME:
      {
        draft.me.Posts.push({
          id: action.data
        });
        break;
      }

    case LOAD_FOLLOWERS_REQUEST:
      {
        break;
      }

    case LOAD_FOLLOWERS_SUCCESS:
      {
        action.data.forEach(v => draft.followerList.data.push(v));

        if (action.data.length === 0 || draft.followerList.data.length === draft.me.Followers.length) {
          draft.followerList.isFulfilled = true;
        }

        break;
      }

    case LOAD_FOLLOWERS_FAILURE:
      {
        break;
      }

    case LOAD_FOLLOWINGS_REQUEST:
      {
        break;
      }

    case LOAD_FOLLOWINGS_SUCCESS:
      {
        action.data.forEach(v => draft.followingList.data.push(v));

        if (action.data.length === 0 || draft.followingList.data.length === draft.me.Followings.length) {
          draft.followingList.isFulfilled = true;
        }

        break;
      }

    case LOAD_FOLLOWINGS_FAILURE:
      {
        break;
      }

    case REMOVE_FOLLOWER_REQUEST:
      {
        break;
      }

    case REMOVE_FOLLOWER_SUCCESS:
      {
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data);
        draft.followerList.data = draft.followerList.data.filter(v => v.id !== action.data);
        break;
      }

    case REMOVE_FOLLOWER_FAILURE:
      {
        break;
      }

    case EDIT_NICKNAME_REQUEST:
      {
        draft.isEditingNickname = true;
        draft.editingNicknameErrorReason = '';
        break;
      }

    case EDIT_NICKNAME_SUCCESS:
      {
        draft.me.nickname = action.data;
        draft.isEditingNickname = false;
        draft.editingNicknameErrorReason = '';
        break;
      }

    case EDIT_NICKNAME_FAILURE:
      {
        draft.isEditingNickname = false;
        draft.editingNicknameErrorReason = action.error;
        break;
      }

    default:
      {
        break;
      }
  }
}));

/***/ }),

/***/ "./sagas/index.ts":
/*!************************!*\
  !*** ./sagas/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.ts");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./sagas/post.ts");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065/api';
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.ts":
/*!***********************!*\
  !*** ./sagas/post.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.ts");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.ts");



 // import next from 'next';

function addPostAPI(postData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/', postData, {
    withCredentials: true
  });
}

function* addPost(action) {
  try {
    const result = yield addPostAPI(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: e
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function modifyPostAPI(postData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/post/', postData, {
    withCredentials: true
  });
}

function* modifyPost(action) {
  try {
    const result = yield modifyPostAPI(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_MODIFY_POST_SUCCESS"],
      data: result.data
    }); // yield put({
    //   type: ADD_POST_TO_ME,
    //   data: result.data.id,
    // });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_MODIFY_POST_FAILURE"],
      error: e
    });
  }
}

function* watchModifyPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_MODIFY_POST_REQUEST"], modifyPost);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, {
    content: data.content
  }, {
    withCredentials: true
  });
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: {
        postId: action.data.postId,
        comment: result.data
      }
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: e
    });
  }
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function loadMainPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?limit=${data.limit}&lastId=${data.lastId}`);
}

function* loadMainPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMainPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_MAIN_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error('action error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_MAIN_POSTS_FAILURE"],
      error: e
    });
  }
}

function* watchLoadMainPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_MAIN_POSTS_REQUEST"], loadMainPosts);
}

function loadPostAPI(postId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${postId}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error('action error', e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: e
    });
  }
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function loadHashtagPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data.tag)}?limit=${data.limit}&offset=${data.offset}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: e
    });
  }
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function loadUserPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data.id}/posts?limit=${data.limit}&lastId=${data.lastId}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: e
    });
  }
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function loadCommentsAPI(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${id}/comments`);
}

function* loadComments(action) {
  try {
    const result = yield loadCommentsAPI(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_COMMENTS_SUCCESS"],
      data: {
        postId: action.data,
        comments: result.data
      }
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_COMMENTS_FAILURE"],
      error: e
    });
  }
}

function* watchLoadCommentsPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_COMMENTS_REQUEST"], loadComments);
}

function uploadImagesAPI(formData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', formData, {
    withCredentials: true
  });
}

function* uploadImages(action) {
  try {
    const result = yield uploadImagesAPI(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(`uploadimages saga error  = ${e}`);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: e
    });
  }
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function uploadModifyImagesAPI(formData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', formData, {
    withCredentials: true
  });
}

function* uploadModifyImages(action) {
  try {
    const result = yield uploadModifyImagesAPI(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_MODIFY_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(`uploadimages saga error  = ${e}`);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_MODIFY_IMAGES_FAILURE"],
      error: e
    });
  }
}

function* watchUploadModifyImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_MODIFY_IMAGES_REQUEST"], uploadModifyImages);
}

function getModifyImagesAPI(postId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${postId}/images`, {
    withCredentials: true
  });
}

function* getModifyImages(action) {
  try {
    const result = yield getModifyImagesAPI(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["GET_MODIFY_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["GET_MODIFY_IMAGES_FAILURE"],
      error: e
    });
  }
}

function* watchGetModifyImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["GET_MODIFY_IMAGES_REQUEST"], getModifyImages);
}

function likePostAPI(postId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${postId}/like`, {}, {
    withCredentials: true
  });
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: {
        postId: action.data,
        userId: result.data.userId
      }
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: e
    });
  }
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function unlikePostAPI(postId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${postId}/like`, {
    withCredentials: true
  });
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: {
        postId: action.data,
        userId: result.data.userId
      }
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: e
    });
  }
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function retweetAPI(postId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${postId}/retweet`, {}, {
    withCredentials: true
  });
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data // data: {
      //     postId: action.data,
      //     userId: result.data.userId
      // }

    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: e
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function removePostAPI(postId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${postId}`, {
    withCredentials: true
  });
}

function* removePost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: e
    });
  }
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function removeUploadImageAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data.postId}/image/upload/${data.imgSrc}`, {
    withCredentials: true
  });
}

function* removeUploadImage(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeUploadImageAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_UPLOAD_IMAGE_SUCCESS"],
      data: action.data.imgSrc
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_UPLOAD_IMAGE_FAILURE"],
      error: e
    });
  }
}

function* watchRemoveUploadImage() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_UPLOAD_IMAGE_REQUEST"], removeUploadImage);
}

function removeModifyImageAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data.postId}/image/modify/${data.imgSrc}`, {
    withCredentials: true
  });
}

function* removeModifyImage(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeModifyImageAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_MODIFY_IMAGE_SUCCESS"],
      data: result.data.postId
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_MODIFY_IMAGE_FAILURE"],
      error: e
    });
  }
}

function* watchRemoveModifyImage() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_MODIFY_IMAGE_REQUEST"], removeModifyImage);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMainPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadCommentsPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadModifyImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchGetModifyImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveUploadImage), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveModifyImage), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchModifyPost)]);
}

/***/ }),

/***/ "./sagas/user.ts":
/*!***********************!*\
  !*** ./sagas/user.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.ts");




function signUpAPI(signUpData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/', signUpData);
}

function* signUp(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data); // throw new Error('일부로 에러 내기');

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"]
    });
  }
}

function loginAPI(loginData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login/', loginData, {
    withCredentials: true
  });
}

function* login(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"]
    });
  }
}

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout/', {}, {
    withCredentials: true
  });
}

function* logout() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logoutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"]
    });
  }
}

function followAPI(userId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/user/${userId}/follow/`, {}, {
    withCredentials: true
  });
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_USER_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_USER_FAILURE"]
    });
  }
}

function unFollowAPI(userId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${userId}/follow/`, {
    withCredentials: true
  });
}

function* unFollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unFollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_USER_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_USER_FAILURE"]
    });
  }
}

function loadUserAPI(userId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(userId ? `/user/${userId}` : '/user/', {
    // /user : 내정보, /user/:id 남의정보
    withCredentials: true
  });
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data,
      isMe: !action.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"]
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/followings?limit=${data.limit}&offset=${data.offset}`, {
    withCredentials: true
  });
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"]
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/followers?limit=${data.limit}&offset=${data.offset}`, {
    withCredentials: true
  });
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"]
    });
  }
}

function removeFollowerAPI(userId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${userId}/follower/`, {
    withCredentials: true
  });
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"]
    });
  }
}

function editNicknameAPI(nickname) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname/', {
    nickname
  }, {
    withCredentials: true
  });
}

function* editNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(editNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["EDIT_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["EDIT_NICKNAME_FAILURE"]
    });
  }
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_USER_REQUEST"], follow);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login);
}

function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logout);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_USER_REQUEST"], unFollow);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* watchEditNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["EDIT_NICKNAME_REQUEST"], editNickname);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([watchSignUp(), watchLogin(), watchLogout(), watchLoadUser(), watchFollow(), watchUnFollow(), watchLoadFollowers(), watchLoadFollowings(), watchRemoveFollower(), watchEditNickname()]);
}

/***/ }),

/***/ "./store/configureStore.ts":
/*!*********************************!*\
  !*** ./store/configureStore.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.ts");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.ts");





 // interface IStore extends Store {
//   sagaTask?: Task;
// }

const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware]; // const middlewares = [sagaMiddleware, (store) => (action) => (next) => {
  //   console.log('action = ', action);
  //   // next(action);
  // }];

  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLnRzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX1VQTE9BRF9JTUFHRV9SRVFVRVNUIiwiUkVNT1ZFX1VQTE9BRF9JTUFHRV9TVUNDRVNTIiwiUkVNT1ZFX1VQTE9BRF9JTUFHRV9GQUlMVVJFIiwiQUREX01PRElGWV9QT1NUX1JFUVVFU1QiLCJBRERfTU9ESUZZX1BPU1RfU1VDQ0VTUyIsIkFERF9NT0RJRllfUE9TVF9GQUlMVVJFIiwiR0VUX01PRElGWV9JTUFHRVNfUkVRVUVTVCIsIkdFVF9NT0RJRllfSU1BR0VTX1NVQ0NFU1MiLCJHRVRfTU9ESUZZX0lNQUdFU19GQUlMVVJFIiwiVVBMT0FEX01PRElGWV9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9NT0RJRllfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfTU9ESUZZX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX01PRElGWV9JTUFHRV9SRVFVRVNUIiwiUkVNT1ZFX01PRElGWV9JTUFHRV9TVUNDRVNTIiwiUkVNT1ZFX01PRElGWV9JTUFHRV9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QiLCJMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyIsIkxPQURfTUFJTl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiTE9BRF9DT01NRU5UU19SRVFVRVNUIiwiTE9BRF9DT01NRU5UU19TVUNDRVNTIiwiTE9BRF9DT01NRU5UU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaXNGdWxmaWxsZWQiLCJkYXRhIiwiZXJyb3IiLCJjb21tZW50IiwiaXNBZGRpbmciLCJhZGRlZCIsInVwbG9hZFBvc3QiLCJpbWFnZVBhdGhzIiwibW9kaWZ5UG9zdCIsInByb2R1Y2UiLCJkcmFmdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidiIsInB1c2giLCJ1bnNoaWZ0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpIiwiaW1nU3JjIiwic3BsaWNlIiwicG9zdEluZGV4IiwiaWQiLCJwb3N0SWQiLCJpbWdJbmRleCIsIkltYWdlcyIsInNyYyIsIkxpa2VycyIsInVzZXJJZCIsImxpa2VJbmRleCIsIkNvbW1lbnRzIiwiY29tbWVudHMiLCJtYXAiLCJsZW5ndGgiLCJkdW1teVVzZXIiLCJuaWNrbmFtZSIsIlBvc3QiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ0luIiwibG9naW5FcnJvclJlYXNvbiIsImlzTG9nZ2luZ091dCIsImlzU2lnbmVkVXAiLCJpc1NpZ25pbmdVcCIsInNpZ25VcERhdGEiLCJzaWduVXBFcnJvclJlYXNvbiIsImlzRWRpdGluZ05pY2tuYW1lIiwiZWRpdGluZ05pY2tuYW1lRXJyb3JSZWFzb24iLCJtZSIsInVzZXJJbmZvIiwiZm9sbG93aW5nTGlzdCIsImZvbGxvd2VyTGlzdCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkZPTExPV19VU0VSX1JFUVVFU1QiLCJGT0xMT1dfVVNFUl9TVUNDRVNTIiwiRk9MTE9XX1VTRVJfRkFJTFVSRSIsIlVORk9MTE9XX1VTRVJfUkVRVUVTVCIsIlVORk9MTE9XX1VTRVJfU1VDQ0VTUyIsIlVORk9MTE9XX1VTRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkVESVRfTklDS05BTUVfUkVRVUVTVCIsIkVESVRfTklDS05BTUVfU1VDQ0VTUyIsIkVESVRfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiaXNNZSIsImZpbHRlciIsIlBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJhZGRQb3N0QVBJIiwicG9zdERhdGEiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhZGRQb3N0IiwicmVzdWx0IiwicHV0IiwiZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJtb2RpZnlQb3N0QVBJIiwicGF0Y2giLCJ3YXRjaE1vZGlmeVBvc3QiLCJhZGRDb21tZW50QVBJIiwiY29udGVudCIsImFkZENvbW1lbnQiLCJjYWxsIiwid2F0Y2hBZGRDb21tZW50IiwibG9hZE1haW5Qb3N0c0FQSSIsImdldCIsImxpbWl0IiwibGFzdElkIiwibG9hZE1haW5Qb3N0cyIsIndhdGNoTG9hZE1haW5Qb3N0cyIsImxvYWRQb3N0QVBJIiwibG9hZFBvc3QiLCJ3YXRjaExvYWRQb3N0IiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRhZyIsIm9mZnNldCIsImxvYWRIYXNodGFnUG9zdHMiLCJ3YXRjaExvYWRIYXNodGFnUG9zdHMiLCJsb2FkVXNlclBvc3RzQVBJIiwibG9hZFVzZXJQb3N0cyIsIndhdGNoTG9hZFVzZXJQb3N0cyIsImxvYWRDb21tZW50c0FQSSIsImxvYWRDb21tZW50cyIsIndhdGNoTG9hZENvbW1lbnRzUG9zdHMiLCJ1cGxvYWRJbWFnZXNBUEkiLCJmb3JtRGF0YSIsInVwbG9hZEltYWdlcyIsIndhdGNoVXBsb2FkSW1hZ2VzIiwidXBsb2FkTW9kaWZ5SW1hZ2VzQVBJIiwidXBsb2FkTW9kaWZ5SW1hZ2VzIiwid2F0Y2hVcGxvYWRNb2RpZnlJbWFnZXMiLCJnZXRNb2RpZnlJbWFnZXNBUEkiLCJnZXRNb2RpZnlJbWFnZXMiLCJ3YXRjaEdldE1vZGlmeUltYWdlcyIsImxpa2VQb3N0QVBJIiwibGlrZVBvc3QiLCJ3YXRjaExpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJyZXR3ZWV0QVBJIiwicmV0d2VldCIsIndhdGNoUmV0d2VldCIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0IiwicmVtb3ZlVXBsb2FkSW1hZ2VBUEkiLCJyZW1vdmVVcGxvYWRJbWFnZSIsIndhdGNoUmVtb3ZlVXBsb2FkSW1hZ2UiLCJ0YWtlRXZlcnkiLCJyZW1vdmVNb2RpZnlJbWFnZUFQSSIsInJlbW92ZU1vZGlmeUltYWdlIiwid2F0Y2hSZW1vdmVNb2RpZnlJbWFnZSIsInBvc3RTYWdhIiwic2lnblVwQVBJIiwic2lnblVwIiwibG9naW5BUEkiLCJsb2dpbkRhdGEiLCJsb2dpbiIsImxvZ291dEFQSSIsImxvZ291dCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuRm9sbG93QVBJIiwidW5Gb2xsb3ciLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsImVkaXROaWNrbmFtZUFQSSIsImVkaXROaWNrbmFtZSIsIndhdGNoRm9sbG93Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dvdXQiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hFZGl0Tmlja25hbWUiLCJ1c2VyU2FnYSIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBpbXBvcnQgSGVsbWV0IGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbi8vIGltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG4vLyBpbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnXHJcbi8vIGltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5cclxuLy8gaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcclxuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJ1xyXG4vLyBpbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbi8vIGltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcydcclxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4vLyBpbXBvcnQgeyBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIENvbXBvbmVudDogUmVhY3RFbGVtZW50O1xyXG59XHJcblxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiAoXHJcbiAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+Tm9kZUJpcmQgY2g3PC90aXRsZT5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzMuMTYuMi9hbnRkLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyU2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q29tcG9uZW50IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG4vLyDqsozsi5zquIAg6rSA66CoXHJcbi8vICjsk7DquLApXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVBMT0FEX0lNQUdFX1JFUVVFU1QgPSAnUkVNT1ZFX1VQTE9BRF9JTUFHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9VUExPQURfSU1BR0VfU1VDQ0VTUyA9ICdSRU1PVkVfVVBMT0FEX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VQTE9BRF9JTUFHRV9GQUlMVVJFID0gJ1JFTU9WRV9VUExPQURfSU1BR0VfRkFJTFVSRSc7XHJcbi8vICjsiJjsoJUpXHJcbmV4cG9ydCBjb25zdCBBRERfTU9ESUZZX1BPU1RfUkVRVUVTVCA9ICdBRERfTU9ESUZZX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfTU9ESUZZX1BPU1RfU1VDQ0VTUyA9ICdBRERfTU9ESUZZX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfTU9ESUZZX1BPU1RfRkFJTFVSRSA9ICdBRERfTU9ESUZZX1BPU1RfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTU9ESUZZX0lNQUdFU19SRVFVRVNUID0gJ0dFVF9NT0RJRllfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX01PRElGWV9JTUFHRVNfU1VDQ0VTUyA9ICdHRVRfTU9ESUZZX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUgPSAnR0VUX01PRElGWV9JTUFHRVNfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfTU9ESUZZX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9NT0RJRllfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX01PRElGWV9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfTU9ESUZZX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX01PRElGWV9JTUFHRVNfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfTU9ESUZZX0lNQUdFX1JFUVVFU1QgPSAnUkVNT1ZFX01PRElGWV9JTUFHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9NT0RJRllfSU1BR0VfU1VDQ0VTUyA9ICdSRU1PVkVfTU9ESUZZX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX01PRElGWV9JTUFHRV9GQUlMVVJFID0gJ1JFTU9WRV9NT0RJRllfSU1BR0VfRkFJTFVSRSc7XHJcbi8vICjsgq3soJwpXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcbi8vICjsnb3quLApXHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCA9ICdMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSA9ICdMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbi8vIOuMk+q4gCDqtIDroKhcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX1JFUVVFU1QgPSAnTE9BRF9DT01NRU5UU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfU1VDQ0VTUyA9ICdMT0FEX0NPTU1FTlRTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19GQUlMVVJFID0gJ0xPQURfQ09NTUVOVFNfRkFJTFVSRSc7XHJcblxyXG4vLyBTU1Ig7ZmV7J24IOyaqeuPhFxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuLy8g7YyU66Gc7JqwLCDslrjtjJTroZzsmrAsIOumrO2KuOyclyDqtIDroKhcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IHtcclxuICAgIGlzRnVsZmlsbGVkOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyb3I6ICcnLFxyXG4gIH0sXHJcblxyXG4gIGNvbW1lbnQ6IHtcclxuICAgIGlzQWRkaW5nOiBmYWxzZSxcclxuICAgIGFkZGVkOiBmYWxzZSxcclxuICAgIGVycm9yOiAnJyxcclxuICB9LFxyXG5cclxuICB1cGxvYWRQb3N0OiB7XHJcbiAgICBpc0FkZGluZzogZmFsc2UsIC8vIOyXheuhnOuTnCDspJHsnbjsp4BcclxuICAgIGFkZGVkOiBmYWxzZSwgLy8g7JeF66Gc65OcIOyXrOu2gFxyXG4gICAgaW1hZ2VQYXRoczogW10sIC8vIFBvc3RGb3Jt7JeQIO2RnOyLnCDrkKAg7J2066+47KeA65Ok7J2YIOqyveuhnFxyXG4gICAgZXJyb3I6ICcnLCAvLyDsi6TtjKgg7J207JygXHJcbiAgfSxcclxuXHJcbiAgbW9kaWZ5UG9zdDoge1xyXG4gICAgaXNBZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkZWQ6IGZhbHNlLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBlcnJvcjogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBuZXcgaW1hZ2UgcGF0aCA9ICR7YWN0aW9uLmRhdGF9YCk7XHJcbiAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpID0+IGRyYWZ0LnVwbG9hZFBvc3QuaW1hZ2VQYXRocy5wdXNoKHYpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFVQTE9BRF9NT0RJRllfSU1BR0VTX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQTE9BRF9NT0RJRllfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodikgPT4gZHJhZnQubW9kaWZ5UG9zdC5pbWFnZVBhdGhzLnB1c2godikpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX01PRElGWV9JTUFHRVNfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEdFVF9NT0RJRllfSU1BR0VTX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBHRVRfTU9ESUZZX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBtb2RpZnkgaW1hZ2UgcGF0aCA9ICR7YWN0aW9uLmRhdGF9YCk7XHJcbiAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpID0+IGRyYWZ0Lm1vZGlmeVBvc3QuaW1hZ2VQYXRocy5wdXNoKHYpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEdFVF9NT0RJRllfSU1BR0VTX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YS51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFJFTU9WRV9VUExPQURfSU1BR0VfUkVRVUVTVDoge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGRyYWZ0LnVwbG9hZFBvc3QuaW1hZ2VQYXRocy5maW5kSW5kZXgoKHYsIGkpID0+IHYgPT09IGFjdGlvbi5kYXRhLmltZ1NyYyk7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBvc3QuaW1hZ2VQYXRocy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX1VQTE9BRF9JTUFHRV9TVUNDRVNTOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfVVBMT0FEX0lNQUdFX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBSRU1PVkVfTU9ESUZZX0lNQUdFX1JFUVVFU1Q6IHtcclxuICAgICAgLy8gbW9kaWZ5UG9zdOydmCDtlbTri7kg7J2066+47KeAIOygnOqxsFxyXG4gICAgICBjb25zdCBpbmRleCA9IGRyYWZ0Lm1vZGlmeVBvc3QuaW1hZ2VQYXRocy5maW5kSW5kZXgoKHYsIGkpID0+IHYgPT09IGFjdGlvbi5kYXRhLmltZ1NyYyk7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3QuaW1hZ2VQYXRocy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAvLyBtYWluUG9zdHPsl5Drj4Qg67CY7JiBXHJcbiAgICAgIGNvbnN0IHBvc3RJbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLmZpbmRJbmRleCgodiwgaSkgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgY29uc3QgaW1nSW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZGF0YVtwb3N0SW5kZXhdLkltYWdlc1xyXG4gICAgICAgIC5maW5kSW5kZXgoKHYsIGkpID0+IHYuc3JjID09PSBhY3Rpb24uZGF0YS5pbWdTcmMpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtwb3N0SW5kZXhdLkltYWdlcy5zcGxpY2UoaW1nSW5kZXgsIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX01PRElGWV9JTUFHRV9TVUNDRVNTOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfTU9ESUZZX0lNQUdFX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBvc3QuZXJyb3IgPSAnJztcclxuICAgICAgZHJhZnQudXBsb2FkUG9zdC5pc0FkZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC51cGxvYWRQb3N0LmlzQWRkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBvc3QuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICBkcmFmdC51cGxvYWRQb3N0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC51cGxvYWRQb3N0LmlzQWRkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgQUREX01PRElGWV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdC5lcnJvciA9ICcnO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0LmlzQWRkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9NT0RJRllfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIC8vIOOFgeOFgeqyjOyLnOq4gCDsiJjsoJXsnYAg7JWe7JeQIOy2lOqwgO2VmOuKlOqyjCDslYTri4jrnbwg7ZW064u5IO2PrOyKpO2KuOulvCDssL7slYTshJwg642u7Ja07JSM7JuM7JW8IOuQqFxyXG4gICAgICBjb25zdCBpbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtpbmRleF0gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgLy8gZHJhZnQubWFpblBvc3RzLmRhdGEudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3QuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfTU9ESUZZX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0LmlzQWRkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQubWFpblBvc3RzLmRhdGEuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtpbmRleF0uTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEudXNlcklkIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3RJbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgY29uc3QgbGlrZUluZGV4ID0gZHJhZnQubWFpblBvc3RzLmRhdGFbcG9zdEluZGV4XS5MaWtlcnMuZmluZEluZGV4KCh2KSA9PiB2LmlkXHJcbiAgICAgID09PSBhY3Rpb24uZGF0YS51c2VySWQpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtwb3N0SW5kZXhdLkxpa2Vycy5zcGxpY2UobGlrZUluZGV4LCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOiB7XHJcbiAgICAgIGRyYWZ0LmNvbW1lbnQuaXNBZGRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jb21tZW50LmFkZGVkID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNvbW1lbnQuZXJyb3IgPSAnJztcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQubWFpblBvc3RzLmRhdGEuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtpbmRleF0uQ29tbWVudHMucHVzaChhY3Rpb24uZGF0YS5jb21tZW50KTtcclxuICAgICAgZHJhZnQuY29tbWVudC5pc0FkZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jb21tZW50LmFkZGVkID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOiB7XHJcbiAgICAgIGRyYWZ0LmNvbW1lbnQuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY29tbWVudC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX0NPTU1FTlRTX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZGF0YS5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhW2luZGV4XS5Db21tZW50cyA9IGFjdGlvbi5kYXRhLmNvbW1lbnRzO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIExPQURfTUFJTl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUzoge1xyXG4gICAgICBhY3Rpb24uZGF0YS5tYXAoKHYpID0+IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLnB1c2godikpO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5pc0Z1bGZpbGxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLmRhdGEgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX0NPTU1FTlRTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZGF0YS5maW5kSW5kZXgoKHYpID0+ICh2LmlkID09PSBhY3Rpb24uZGF0YSkpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0ge1xyXG4gIG5pY2tuYW1lOiAn7Jik7ZWc66+8JyxcclxuICBQb3N0OiBbXSxcclxuICBGb2xsb3dpbmdzOiBbXSxcclxuICBGb2xsb3dlcnM6IFtdLFxyXG4gIGlkOiAxLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsmpTssq3spJHsnbjsp4BcclxuICBsb2dpbkVycm9yUmVhc29uOiAnJywgLy8g66Gc6re47J24IOyLpO2MqCDsnbTsnKBcclxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgaXNTaWduZWRVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDshLHqs7Ug7Jes67aAXHJcbiAgaXNTaWduaW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgc2lnblVwRGF0YTogbnVsbCxcclxuICBzaWduVXBFcnJvclJlYXNvbjogJycsIC8vIO2ajOybkOqwgOyehSDsi6TtjKgg7J207JygXHJcbiAgaXNFZGl0aW5nTmlja25hbWU6IGZhbHNlLFxyXG4gIGVkaXRpbmdOaWNrbmFtZUVycm9yUmVhc29uOiAnJyxcclxuICAvLyDrgrQg7KCV67O0XHJcbiAgbWU6IG51bGwsXHJcbiAgLy8gbWU6IHtcclxuICAvLyAgIGlkOiBudWxsLFxyXG4gIC8vICAgbmlja25hbWU6IG51bGwsXHJcbiAgLy8gICB1c2VySWQ6IG51bGwsXHJcbiAgLy8gICBjcmVhdGVkQXQ6IG51bGwsXHJcbiAgLy8gICB1cGRhdGVkQXQ6IG51bGwsXHJcbiAgLy8gfSxcclxuICB1c2VySW5mbzogbnVsbCwgLy8g64Ko7J2YIOygleuztFxyXG4gIGZvbGxvd2luZ0xpc3Q6IHsgLy8g7YyU66Gc7J6JIOumrOyKpO2KuFxyXG4gICAgaXNGdWxmaWxsZWQ6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJvcjogJycsXHJcbiAgfSxcclxuICBmb2xsb3dlckxpc3Q6IHsgLy8g7YyU66Gc7JuMIOumrOyKpO2KuFxyXG4gICAgaXNGdWxmaWxsZWQ6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJvcjogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1VTRVJfUkVRVUVTVCA9ICdGT0xMT1dfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19VU0VSX1NVQ0NFU1MgPSAnRk9MTE9XX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfVVNFUl9GQUlMVVJFID0gJ0ZPTExPV19VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1VTRVJfUkVRVUVTVCA9ICdVTkZPTExPV19VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfVVNFUl9TVUNDRVNTID0gJ1VORk9MTE9XX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19VU0VSX0ZBSUxVUkUgPSAnVU5GT0xMT1dfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX05JQ0tOQU1FX1JFUVVFU1QgPSAnRURJVF9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEVESVRfTklDS05BTUVfU1VDQ0VTUyA9ICdFRElUX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRURJVF9OSUNLTkFNRV9GQUlMVVJFID0gJ0VESVRfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgIC8vIG1lOiBkdW1teVVzZXIsXHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRToge1xyXG4gICAgICBkcmFmdC5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9naW5FcnJvclJlYXNvbiA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0ID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDoge1xyXG4gICAgICBkcmFmdC5zaWduVXBEYXRhID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5pc1NpZ25lZFVwID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRToge1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvclJlYXNvbiA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6IHtcclxuICAgICAgaWYgKGFjdGlvbi5pc01lKSB7IC8vIOuCmFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfrgpggbWUgPSAnLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g7IOB64yAXHJcbiAgICAgIGNvbnNvbGUubG9nKCfsg4HrjIAnKTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgRk9MTE9XX1VTRVJfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgRk9MTE9XX1VTRVJfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBGT0xMT1dfVVNFUl9GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgVU5GT0xMT1dfVVNFUl9SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkZPTExPV19VU0VSX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd2luZ0xpc3QuZGF0YSA9IGRyYWZ0LmZvbGxvd2luZ0xpc3QuZGF0YS5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVORk9MTE9XX1VTRVJfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOiB7XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzoge1xyXG4gICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KSA9PiBkcmFmdC5mb2xsb3dlckxpc3QuZGF0YS5wdXNoKHYpKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24uZGF0YS5sZW5ndGggPT09IDAgfHwgZHJhZnQuZm9sbG93ZXJMaXN0LmRhdGEubGVuZ3RoID09PSBkcmFmdC5tZS5Gb2xsb3dlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93ZXJMaXN0LmlzRnVsZmlsbGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6IHtcclxuICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodikgPT4gZHJhZnQuZm9sbG93aW5nTGlzdC5kYXRhLnB1c2godikpO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCB8fCBkcmFmdC5mb2xsb3dpbmdMaXN0LmRhdGEubGVuZ3RoID09PSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmxlbmd0aCkge1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xpc3QuaXNGdWxmaWxsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5mb2xsb3dlckxpc3QuZGF0YSA9IGRyYWZ0LmZvbGxvd2VyTGlzdC5kYXRhLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBFRElUX05JQ0tOQU1FX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQuaXNFZGl0aW5nTmlja25hbWUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5lZGl0aW5nTmlja25hbWVFcnJvclJlYXNvbiA9ICcnO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgRURJVF9OSUNLTkFNRV9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmlzRWRpdGluZ05pY2tuYW1lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmVkaXRpbmdOaWNrbmFtZUVycm9yUmVhc29uID0gJyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBFRElUX05JQ0tOQU1FX0ZBSUxVUkU6IHtcclxuICAgICAgZHJhZnQuaXNFZGl0aW5nTmlja25hbWUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZWRpdGluZ05pY2tuYW1lRXJyb3JSZWFzb24gPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1L2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsodXNlciksXHJcbiAgICBmb3JrKHBvc3QpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgcHV0LCBjYWxsLCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIExPQURfTUFJTl9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfTUFJTl9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfTUFJTl9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfQ09NTUVOVFNfUkVRVUVTVCxcclxuICBMT0FEX0NPTU1FTlRTX1NVQ0NFU1MsXHJcbiAgTE9BRF9DT01NRU5UU19GQUlMVVJFLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFJFVFdFRVRfUkVRVUVTVCxcclxuICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgUkVUV0VFVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG5cclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBSRU1PVkVfVVBMT0FEX0lNQUdFX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1VQTE9BRF9JTUFHRV9GQUlMVVJFLFxyXG4gIFJFTU9WRV9VUExPQURfSU1BR0VfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuXHJcbiAgR0VUX01PRElGWV9JTUFHRVNfU1VDQ0VTUyxcclxuICBHRVRfTU9ESUZZX0lNQUdFU19GQUlMVVJFLFxyXG4gIEdFVF9NT0RJRllfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX01PRElGWV9JTUFHRVNfU1VDQ0VTUyxcclxuICBVUExPQURfTU9ESUZZX0lNQUdFU19SRVFVRVNULFxyXG4gIFVQTE9BRF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX01PRElGWV9JTUFHRV9TVUNDRVNTLFxyXG4gIFJFTU9WRV9NT0RJRllfSU1BR0VfRkFJTFVSRSxcclxuICBSRU1PVkVfTU9ESUZZX0lNQUdFX1JFUVVFU1QsXHJcbiAgQUREX01PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgQUREX01PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX01PRElGWV9QT1NUX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG4vLyBpbXBvcnQgbmV4dCBmcm9tICduZXh0JztcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkocG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvJywgcG9zdERhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGFkZFBvc3RBUEkoYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5UG9zdEFQSShwb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaCgnL3Bvc3QvJywgcG9zdERhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIG1vZGlmeVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIG1vZGlmeVBvc3RBUEkoYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX01PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICAvLyB5aWVsZCBwdXQoe1xyXG4gICAgLy8gICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgIC8vICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAvLyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9NT0RJRllfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTW9kaWZ5UG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9NT0RJRllfUE9TVF9SRVFVRVNULCBtb2RpZnlQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCB7IGNvbnRlbnQ6IGRhdGEuY29udGVudCB9LCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwb3N0SWQ6IGFjdGlvbi5kYXRhLnBvc3RJZCxcclxuICAgICAgICBjb21tZW50OiByZXN1bHQuZGF0YSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWFpblBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGltaXQ9JHtkYXRhLmxpbWl0fSZsYXN0SWQ9JHtkYXRhLmxhc3RJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNYWluUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE1haW5Qb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignYWN0aW9uIGVycm9yJywgZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNYWluUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCwgbG9hZE1haW5Qb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7cG9zdElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2FjdGlvbiBlcnJvcicsIGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEudGFnKX0/bGltaXQ9JHtkYXRhLmxpbWl0fSZvZmZzZXQ9JHtkYXRhLm9mZnNldH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGEuaWR9L3Bvc3RzP2xpbWl0PSR7ZGF0YS5saW1pdH0mbGFzdElkPSR7ZGF0YS5sYXN0SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENvbW1lbnRzQVBJKGlkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtpZH0vY29tbWVudHNgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRDb21tZW50cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgbG9hZENvbW1lbnRzQVBJKGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ09NTUVOVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBvc3RJZDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgY29tbWVudHM6IHJlc3VsdC5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ09NTUVOVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRDb21tZW50c1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9DT01NRU5UU19SRVFVRVNULCBsb2FkQ29tbWVudHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZm9ybURhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZm9ybURhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgdXBsb2FkSW1hZ2VzQVBJKGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1cGxvYWRpbWFnZXMgc2FnYSBlcnJvciAgPSAke2V9YCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZE1vZGlmeUltYWdlc0FQSShmb3JtRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBmb3JtRGF0YSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkTW9kaWZ5SW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCB1cGxvYWRNb2RpZnlJbWFnZXNBUEkoYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX01PRElGWV9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1cGxvYWRpbWFnZXMgc2FnYSBlcnJvciAgPSAke2V9YCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfTU9ESUZZX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkTW9kaWZ5SW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX01PRElGWV9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkTW9kaWZ5SW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW9kaWZ5SW1hZ2VzQVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7cG9zdElkfS9pbWFnZXNgLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRNb2RpZnlJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGdldE1vZGlmeUltYWdlc0FQSShhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBHRVRfTU9ESUZZX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEdFVF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hHZXRNb2RpZnlJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfTU9ESUZZX0lNQUdFU19SRVFVRVNULCBnZXRNb2RpZnlJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShwb3N0SWQpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtwb3N0SWR9L2xpa2VgLCB7fSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB1c2VySWQ6IHJlc3VsdC5kYXRhLnVzZXJJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShwb3N0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke3Bvc3RJZH0vbGlrZWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBvc3RJZDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgdXNlcklkOiByZXN1bHQuZGF0YS51c2VySWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShwb3N0SWQpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtwb3N0SWR9L3JldHdlZXRgLCB7fSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAvLyBkYXRhOiB7XHJcbiAgICAgIC8vICAgICBwb3N0SWQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAvLyAgICAgdXNlcklkOiByZXN1bHQuZGF0YS51c2VySWRcclxuICAgICAgLy8gfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7cG9zdElkfWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVXBsb2FkSW1hZ2VBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2ltYWdlL3VwbG9hZC8ke2RhdGEuaW1nU3JjfWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVVwbG9hZEltYWdlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKHJlbW92ZVVwbG9hZEltYWdlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfVVBMT0FEX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLmltZ1NyYyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfVVBMT0FEX0lNQUdFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVVcGxvYWRJbWFnZSgpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoUkVNT1ZFX1VQTE9BRF9JTUFHRV9SRVFVRVNULCByZW1vdmVVcGxvYWRJbWFnZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU1vZGlmeUltYWdlQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGEucG9zdElkfS9pbWFnZS9tb2RpZnkvJHtkYXRhLmltZ1NyY31gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVNb2RpZnlJbWFnZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVNb2RpZnlJbWFnZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX01PRElGWV9JTUFHRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5wb3N0SWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX01PRElGWV9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlTW9kaWZ5SW1hZ2UoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9NT0RJRllfSU1BR0VfUkVRVUVTVCwgcmVtb3ZlTW9kaWZ5SW1hZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTWFpblBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlclBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkQ29tbWVudHNQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRNb2RpZnlJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaEdldE1vZGlmeUltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVVwbG9hZEltYWdlKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVNb2RpZnlJbWFnZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaE1vZGlmeVBvc3QpLFxyXG5cclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIHRha2VMYXRlc3QsIHRha2VFdmVyeSwgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLFxyXG4gIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gIEZPTExPV19VU0VSX1JFUVVFU1QsIEZPTExPV19VU0VSX1NVQ0NFU1MsIEZPTExPV19VU0VSX0ZBSUxVUkUsXHJcbiAgVU5GT0xMT1dfVVNFUl9SRVFVRVNULCBVTkZPTExPV19VU0VSX1NVQ0NFU1MsIFVORk9MTE9XX1VTRVJfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICBFRElUX05JQ0tOQU1FX1JFUVVFU1QsIEVESVRfTklDS05BTUVfU1VDQ0VTUywgRURJVF9OSUNLTkFNRV9GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKHNpZ25VcERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvJywgc2lnblVwRGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcign7J2867aA66GcIOyXkOufrCDrgrTquLAnKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGxvZ2luRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbi8nLCBsb2dpbkRhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nb3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQvJywge30sIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogbG9nb3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ291dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkodXNlcklkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC91c2VyLyR7dXNlcklkfS9mb2xsb3cvYCwge30sIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1VTRVJfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkodXNlcklkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHt1c2VySWR9L2ZvbGxvdy9gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24qIHVuRm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuRm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1VTRVJfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkodXNlcklkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCh1c2VySWQgPyBgL3VzZXIvJHt1c2VySWR9YCA6ICcvdXNlci8nLCB7IC8vIC91c2VyIDog64K07KCV67O0LCAvdXNlci86aWQg64Ko7J2Y7KCV67O0XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIGlzTWU6ICFhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtkYXRhLmxpbWl0fSZvZmZzZXQ9JHtkYXRhLm9mZnNldH1gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci9mb2xsb3dlcnM/bGltaXQ9JHtkYXRhLmxpbWl0fSZvZmZzZXQ9JHtkYXRhLm9mZnNldH1gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKHVzZXJJZCkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7dXNlcklkfS9mb2xsb3dlci9gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXROaWNrbmFtZUFQSShuaWNrbmFtZSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUvJywgeyBuaWNrbmFtZSB9LCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0Tmlja25hbWUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZWRpdE5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfTklDS05BTUVfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1VTRVJfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nb3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1VTRVJfUkVRVUVTVCwgdW5Gb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEVkaXROaWNrbmFtZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfTklDS05BTUVfUkVRVUVTVCwgZWRpdE5pY2tuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICB3YXRjaFNpZ25VcCgpLFxyXG4gICAgd2F0Y2hMb2dpbigpLFxyXG4gICAgd2F0Y2hMb2dvdXQoKSxcclxuICAgIHdhdGNoTG9hZFVzZXIoKSxcclxuICAgIHdhdGNoRm9sbG93KCksXHJcbiAgICB3YXRjaFVuRm9sbG93KCksXHJcbiAgICB3YXRjaExvYWRGb2xsb3dlcnMoKSxcclxuICAgIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSxcclxuICAgIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSxcclxuICAgIHdhdGNoRWRpdE5pY2tuYW1lKCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSwgU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSwgeyBUYXNrIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbi8vIGludGVyZmFjZSBJU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XHJcbi8vICAgc2FnYVRhc2s/OiBUYXNrO1xyXG4vLyB9XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAvLyBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgKHN0b3JlKSA9PiAoYWN0aW9uKSA9PiAobmV4dCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ2FjdGlvbiA9ICcsIGFjdGlvbik7XHJcbiAgLy8gICAvLyBuZXh0KGFjdGlvbik7XHJcbiAgLy8gfV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSxcclxuICAgICk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==