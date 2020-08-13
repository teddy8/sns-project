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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
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
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\pages\\_app.js";
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
    lineNumber: 24,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}, "NodeBird ch7"), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  charset: "UTF-8",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
})), __jsx(Component, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }
}));

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");



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

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
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

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
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
  signUpErrorReason: '',
  // 회원가입 실패 이유
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
/*
followingList: {
  isFulfilled: false,
  data: [],
  error: [],
}
*/

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

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./sagas/post.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065/api';
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



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

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




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

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
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
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







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
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJSRU1PVkVfVVBMT0FEX0lNQUdFX1JFUVVFU1QiLCJSRU1PVkVfVVBMT0FEX0lNQUdFX1NVQ0NFU1MiLCJSRU1PVkVfVVBMT0FEX0lNQUdFX0ZBSUxVUkUiLCJBRERfTU9ESUZZX1BPU1RfUkVRVUVTVCIsIkFERF9NT0RJRllfUE9TVF9TVUNDRVNTIiwiQUREX01PRElGWV9QT1NUX0ZBSUxVUkUiLCJHRVRfTU9ESUZZX0lNQUdFU19SRVFVRVNUIiwiR0VUX01PRElGWV9JTUFHRVNfU1VDQ0VTUyIsIkdFVF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUiLCJVUExPQURfTU9ESUZZX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX01PRElGWV9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUiLCJSRU1PVkVfTU9ESUZZX0lNQUdFX1JFUVVFU1QiLCJSRU1PVkVfTU9ESUZZX0lNQUdFX1NVQ0NFU1MiLCJSRU1PVkVfTU9ESUZZX0lNQUdFX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCIsIkxPQURfTUFJTl9QT1NUU19TVUNDRVNTIiwiTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJMT0FEX0NPTU1FTlRTX1JFUVVFU1QiLCJMT0FEX0NPTU1FTlRTX1NVQ0NFU1MiLCJMT0FEX0NPTU1FTlRTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpc0Z1bGZpbGxlZCIsImRhdGEiLCJlcnJvciIsImNvbW1lbnQiLCJpc0FkZGluZyIsImFkZGVkIiwidXBsb2FkUG9zdCIsImltYWdlUGF0aHMiLCJtb2RpZnlQb3N0IiwicHJvZHVjZSIsImRyYWZ0IiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJ2IiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImZpbmRJbmRleCIsImkiLCJpbWdTcmMiLCJzcGxpY2UiLCJwb3N0SW5kZXgiLCJpZCIsInBvc3RJZCIsImltZ0luZGV4IiwiSW1hZ2VzIiwic3JjIiwiTGlrZXJzIiwidXNlcklkIiwibGlrZUluZGV4IiwiQ29tbWVudHMiLCJjb21tZW50cyIsIm1hcCIsImxlbmd0aCIsImR1bW15VXNlciIsIm5pY2tuYW1lIiwiUG9zdCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJpc0xvZ2dpbmdJbiIsImxvZ2luRXJyb3JSZWFzb24iLCJpc0xvZ2dpbmdPdXQiLCJpc1NpZ25lZFVwIiwiaXNTaWduaW5nVXAiLCJzaWduVXBFcnJvclJlYXNvbiIsIm1lIiwidXNlckluZm8iLCJmb2xsb3dpbmdMaXN0IiwiZm9sbG93ZXJMaXN0IiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiRk9MTE9XX1VTRVJfUkVRVUVTVCIsIkZPTExPV19VU0VSX1NVQ0NFU1MiLCJGT0xMT1dfVVNFUl9GQUlMVVJFIiwiVU5GT0xMT1dfVVNFUl9SRVFVRVNUIiwiVU5GT0xMT1dfVVNFUl9TVUNDRVNTIiwiVU5GT0xMT1dfVVNFUl9GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiRURJVF9OSUNLTkFNRV9SRVFVRVNUIiwiRURJVF9OSUNLTkFNRV9TVUNDRVNTIiwiRURJVF9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJpc0xvZ2dlZEluIiwic2lnblVwRGF0YSIsImlzTWUiLCJmaWx0ZXIiLCJQb3N0cyIsImlzRWRpdGluZ05pY2tuYW1lIiwiZWRpdGluZ05pY2tuYW1lRXJyb3JSZWFzb24iLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsImFkZFBvc3RBUEkiLCJwb3N0RGF0YSIsIndpdGhDcmVkZW50aWFscyIsImFkZFBvc3QiLCJyZXN1bHQiLCJwdXQiLCJlIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIm1vZGlmeVBvc3RBUEkiLCJwYXRjaCIsIndhdGNoTW9kaWZ5UG9zdCIsImFkZENvbW1lbnRBUEkiLCJjb250ZW50IiwiYWRkQ29tbWVudCIsImNhbGwiLCJ3YXRjaEFkZENvbW1lbnQiLCJsb2FkTWFpblBvc3RzQVBJIiwiZ2V0IiwibGltaXQiLCJsYXN0SWQiLCJsb2FkTWFpblBvc3RzIiwid2F0Y2hMb2FkTWFpblBvc3RzIiwibG9hZFBvc3RBUEkiLCJsb2FkUG9zdCIsIndhdGNoTG9hZFBvc3QiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidGFnIiwib2Zmc2V0IiwibG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsImxvYWRVc2VyUG9zdHNBUEkiLCJsb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkVXNlclBvc3RzIiwibG9hZENvbW1lbnRzQVBJIiwibG9hZENvbW1lbnRzIiwid2F0Y2hMb2FkQ29tbWVudHNQb3N0cyIsInVwbG9hZEltYWdlc0FQSSIsImZvcm1EYXRhIiwidXBsb2FkSW1hZ2VzIiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ1cGxvYWRNb2RpZnlJbWFnZXNBUEkiLCJ1cGxvYWRNb2RpZnlJbWFnZXMiLCJ3YXRjaFVwbG9hZE1vZGlmeUltYWdlcyIsImdldE1vZGlmeUltYWdlc0FQSSIsImdldE1vZGlmeUltYWdlcyIsIndhdGNoR2V0TW9kaWZ5SW1hZ2VzIiwibGlrZVBvc3RBUEkiLCJsaWtlUG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsInJldHdlZXRBUEkiLCJyZXR3ZWV0Iiwid2F0Y2hSZXR3ZWV0IiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJyZW1vdmVVcGxvYWRJbWFnZUFQSSIsInJlbW92ZVVwbG9hZEltYWdlIiwid2F0Y2hSZW1vdmVVcGxvYWRJbWFnZSIsInRha2VFdmVyeSIsInJlbW92ZU1vZGlmeUltYWdlQVBJIiwicmVtb3ZlTW9kaWZ5SW1hZ2UiLCJ3YXRjaFJlbW92ZU1vZGlmeUltYWdlIiwicG9zdFNhZ2EiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJsb2dpbkFQSSIsImxvZ2luRGF0YSIsImxvZ2luIiwibG9nb3V0QVBJIiwibG9nb3V0IiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5Gb2xsb3dBUEkiLCJ1bkZvbGxvdyIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJyZW1vdmVGb2xsb3dlckFQSSIsInJlbW92ZUZvbGxvd2VyIiwiZWRpdE5pY2tuYW1lQVBJIiwiZWRpdE5pY2tuYW1lIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFNpZ25VcCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaEVkaXROaWNrbmFtZSIsInVzZXJTYWdhIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IEhlbG1ldCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG4vLyBpbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuLy8gaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJ1xyXG4vLyBpbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuXHJcbi8vIGltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXHJcbi8vIGltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2VycydcclxuLy8gaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG4vLyBpbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXHJcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuLy8gaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5cclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPk5vZGVCaXJkIGNoNzwvdGl0bGU+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjE2LjIvYW50ZC5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhcnNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgey8qXHJcbiAgIDxIZWxtZXRcclxuICAgICAgdGl0bGU9XCJOb2RlQmlyZCBjaDdcIlxyXG4gICAgICBtZXRhPXtbXHJcbiAgICAgICAgeyBjaGFyc2V0OiAnVVRGLTgnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndmlld3BvcnQnLCBjb250ZW50OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MS4wLG1pbmltdW0tc2NhbGU9MS4wLG1heGltdW0tc2NhbGU9MS4wLHVzZXItc2NhbGFibGU9eWVzLHZpZXdwb3J0LWZpdD1jb3ZlcicgfSxcclxuICAgICAgICB7ICdodHRwLWVxdWl2JzogJ1gtVUEtQ29tcGF0aWJsZScsIGNvbnRlbnQ6ICdJRT1lZGdlJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogJ3RlZGR57J2YIE5vZGVCaXJkIFNOUycgfSxcclxuICAgICAgICB7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiAnTm9kZUJpcmQnIH0sXHJcbiAgICAgICAgeyBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogJ3RlZGR57J2YIE5vZGVCaXJkIFNOUycgfSxcclxuICAgICAgICB7IHByb3BlcnR5OiAnb2c6dHlwZScsIGNvbnRlbnQ6ICd3ZWJzaXRlJyB9LFxyXG4gICAgICBdfVxyXG4gICAgICBsaW5rPXtbXHJcbiAgICAgICAgeyByZWw6ICdzaG9ydGN1dCBpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfSxcclxuICAgICAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8zLjE2LjIvYW50ZC5jc3MnIH0sXHJcbiAgICAgICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3MnIH0sXHJcbiAgICAgICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3MnIH0sXHJcbiAgICAgIF19XHJcbiAgICAvPlxyXG5cclxuICAqL31cclxuICAgIDxDb21wb25lbnQgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbi8vICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbi8vIOqyjOyLnOq4gCDqtIDroKhcclxuLy8gKOyTsOq4sClcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9VUExPQURfSU1BR0VfUkVRVUVTVCA9ICdSRU1PVkVfVVBMT0FEX0lNQUdFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VQTE9BRF9JTUFHRV9TVUNDRVNTID0gJ1JFTU9WRV9VUExPQURfSU1BR0VfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVBMT0FEX0lNQUdFX0ZBSUxVUkUgPSAnUkVNT1ZFX1VQTE9BRF9JTUFHRV9GQUlMVVJFJztcclxuLy8gKOyImOyglSlcclxuZXhwb3J0IGNvbnN0IEFERF9NT0RJRllfUE9TVF9SRVFVRVNUID0gJ0FERF9NT0RJRllfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9NT0RJRllfUE9TVF9TVUNDRVNTID0gJ0FERF9NT0RJRllfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9NT0RJRllfUE9TVF9GQUlMVVJFID0gJ0FERF9NT0RJRllfUE9TVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IEdFVF9NT0RJRllfSU1BR0VTX1JFUVVFU1QgPSAnR0VUX01PRElGWV9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTU9ESUZZX0lNQUdFU19TVUNDRVNTID0gJ0dFVF9NT0RJRllfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgR0VUX01PRElGWV9JTUFHRVNfRkFJTFVSRSA9ICdHRVRfTU9ESUZZX0lNQUdFU19GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9NT0RJRllfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX01PRElGWV9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfTU9ESUZZX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9NT0RJRllfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX01PRElGWV9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfTU9ESUZZX0lNQUdFU19GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9NT0RJRllfSU1BR0VfUkVRVUVTVCA9ICdSRU1PVkVfTU9ESUZZX0lNQUdFX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX01PRElGWV9JTUFHRV9TVUNDRVNTID0gJ1JFTU9WRV9NT0RJRllfSU1BR0VfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfTU9ESUZZX0lNQUdFX0ZBSUxVUkUgPSAnUkVNT1ZFX01PRElGWV9JTUFHRV9GQUlMVVJFJztcclxuLy8gKOyCreygnClcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuLy8gKOydveq4sClcclxuZXhwb3J0IGNvbnN0IExPQURfTUFJTl9QT1NUU19SRVFVRVNUID0gJ0xPQURfTUFJTl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTUFJTl9QT1NUU19TVUNDRVNTID0gJ0xPQURfTUFJTl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTUFJTl9QT1NUU19GQUlMVVJFID0gJ0xPQURfTUFJTl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuLy8g64yT6riAIOq0gOugqFxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfUkVRVUVTVCA9ICdMT0FEX0NPTU1FTlRTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19TVUNDRVNTID0gJ0xPQURfQ09NTUVOVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX0ZBSUxVUkUgPSAnTE9BRF9DT01NRU5UU19GQUlMVVJFJztcclxuXHJcbi8vIFNTUiDtmZXsnbgg7Jqp64+EXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG4vLyDtjJTroZzsmrAsIOyWuO2MlOuhnOyasCwg66as7Yq47JyXIOq0gOugqFxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czoge1xyXG4gICAgaXNGdWxmaWxsZWQ6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJvcjogJycsXHJcbiAgfSxcclxuXHJcbiAgY29tbWVudDoge1xyXG4gICAgaXNBZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkZWQ6IGZhbHNlLFxyXG4gICAgZXJyb3I6ICcnLFxyXG4gIH0sXHJcblxyXG4gIHVwbG9hZFBvc3Q6IHtcclxuICAgIGlzQWRkaW5nOiBmYWxzZSwgLy8g7JeF66Gc65OcIOykkeyduOyngFxyXG4gICAgYWRkZWQ6IGZhbHNlLCAvLyDsl4XroZzrk5wg7Jes67aAXHJcbiAgICBpbWFnZVBhdGhzOiBbXSwgLy8gUG9zdEZvcm3sl5Ag7ZGc7IucIOuQoCDsnbTrr7jsp4Drk6TsnZgg6rK966GcXHJcbiAgICBlcnJvcjogJycsIC8vIOyLpO2MqCDsnbTsnKBcclxuICB9LFxyXG5cclxuICBtb2RpZnlQb3N0OiB7XHJcbiAgICBpc0FkZGluZzogZmFsc2UsXHJcbiAgICBhZGRlZDogZmFsc2UsXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGVycm9yOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc29sZS5sb2coYG5ldyBpbWFnZSBwYXRoID0gJHthY3Rpb24uZGF0YX1gKTtcclxuICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodikgPT4gZHJhZnQudXBsb2FkUG9zdC5pbWFnZVBhdGhzLnB1c2godikpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgVVBMT0FEX01PRElGWV9JTUFHRVNfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX01PRElGWV9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KSA9PiBkcmFmdC5tb2RpZnlQb3N0LmltYWdlUGF0aHMucHVzaCh2KSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVUExPQURfTU9ESUZZX0lNQUdFU19GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgR0VUX01PRElGWV9JTUFHRVNfUkVRVUVTVDoge1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEdFVF9NT0RJRllfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc29sZS5sb2coYG1vZGlmeSBpbWFnZSBwYXRoID0gJHthY3Rpb24uZGF0YX1gKTtcclxuICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodikgPT4gZHJhZnQubW9kaWZ5UG9zdC5pbWFnZVBhdGhzLnB1c2godikpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgR0VUX01PRElGWV9JTUFHRVNfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgUkVNT1ZFX1VQTE9BRF9JTUFHRV9SRVFVRVNUOiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQudXBsb2FkUG9zdC5pbWFnZVBhdGhzLmZpbmRJbmRleCgodiwgaSkgPT4gdiA9PT0gYWN0aW9uLmRhdGEuaW1nU3JjKTtcclxuICAgICAgZHJhZnQudXBsb2FkUG9zdC5pbWFnZVBhdGhzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfVVBMT0FEX0lNQUdFX1NVQ0NFU1M6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFTU9WRV9VUExPQURfSU1BR0VfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFJFTU9WRV9NT0RJRllfSU1BR0VfUkVRVUVTVDoge1xyXG4gICAgICAvLyBtb2RpZnlQb3N07J2YIO2VtOuLuSDsnbTrr7jsp4Ag7KCc6rGwXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQubW9kaWZ5UG9zdC5pbWFnZVBhdGhzLmZpbmRJbmRleCgodiwgaSkgPT4gdiA9PT0gYWN0aW9uLmRhdGEuaW1nU3JjKTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdC5pbWFnZVBhdGhzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIC8vIG1haW5Qb3N0c+yXkOuPhCDrsJjsmIFcclxuICAgICAgY29uc3QgcG9zdEluZGV4ID0gZHJhZnQubWFpblBvc3RzLmRhdGEuZmluZEluZGV4KCh2LCBpKSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBjb25zdCBpbWdJbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhW3Bvc3RJbmRleF0uSW1hZ2VzXHJcbiAgICAgICAgLmZpbmRJbmRleCgodiwgaSkgPT4gdi5zcmMgPT09IGFjdGlvbi5kYXRhLmltZ1NyYyk7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhW3Bvc3RJbmRleF0uSW1hZ2VzLnNwbGljZShpbWdJbmRleCwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfTU9ESUZZX0lNQUdFX1NVQ0NFU1M6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFTU9WRV9NT0RJRllfSU1BR0VfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQudXBsb2FkUG9zdC5lcnJvciA9ICcnO1xyXG4gICAgICBkcmFmdC51cGxvYWRQb3N0LmlzQWRkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLmRhdGEudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBvc3QuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBsb2FkUG9zdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBvc3QuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBvc3QuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfTU9ESUZZX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0LmVycm9yID0gJyc7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3QuaXNBZGRpbmcgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgQUREX01PRElGWV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgLy8g44WB44WB6rKM7Iuc6riAIOyImOygleydgCDslZ7sl5Ag7LaU6rCA7ZWY64qU6rKMIOyVhOuLiOudvCDtlbTri7kg7Y+s7Iqk7Yq466W8IOywvuyVhOyEnCDrja7slrTslIzsm4zslbwg65CoXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQubWFpblBvc3RzLmRhdGEuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhW2luZGV4XSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAvLyBkcmFmdC5tYWluUG9zdHMuZGF0YS51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdC5pc0FkZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9NT0RJRllfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3QuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3QuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZGF0YS5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhW2luZGV4XS5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS51c2VySWQgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdEluZGV4ID0gZHJhZnQubWFpblBvc3RzLmRhdGEuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBjb25zdCBsaWtlSW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZGF0YVtwb3N0SW5kZXhdLkxpa2Vycy5maW5kSW5kZXgoKHYpID0+IHYuaWRcclxuICAgICAgPT09IGFjdGlvbi5kYXRhLnVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhW3Bvc3RJbmRleF0uTGlrZXJzLnNwbGljZShsaWtlSW5kZXgsIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQuY29tbWVudC5pc0FkZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmNvbW1lbnQuYWRkZWQgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY29tbWVudC5lcnJvciA9ICcnO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZGF0YS5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhW2luZGV4XS5Db21tZW50cy5wdXNoKGFjdGlvbi5kYXRhLmNvbW1lbnQpO1xyXG4gICAgICBkcmFmdC5jb21tZW50LmlzQWRkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNvbW1lbnQuYWRkZWQgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6IHtcclxuICAgICAgZHJhZnQuY29tbWVudC5pc0FkZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jb21tZW50LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIExPQURfQ09NTUVOVFNfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLmRhdGFbaW5kZXhdLkNvbW1lbnRzID0gYWN0aW9uLmRhdGEuY29tbWVudHM7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfTUFJTl9QT1NUU19TVUNDRVNTOiB7XHJcbiAgICAgIGFjdGlvbi5kYXRhLm1hcCgodikgPT4gZHJhZnQubWFpblBvc3RzLmRhdGEucHVzaCh2KSk7XHJcblxyXG4gICAgICBpZiAoYWN0aW9uLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLmlzRnVsZmlsbGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIExPQURfQ09NTUVOVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLmZpbmRJbmRleCgodikgPT4gKHYuaWQgPT09IGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSB7XHJcbiAgbmlja25hbWU6ICfsmKTtlZzrr7wnLFxyXG4gIFBvc3Q6IFtdLFxyXG4gIEZvbGxvd2luZ3M6IFtdLFxyXG4gIEZvbGxvd2VyczogW10sXHJcbiAgaWQ6IDEsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyalOyyreykkeyduOyngFxyXG4gIGxvZ2luRXJyb3JSZWFzb246ICcnLCAvLyDroZzqt7jsnbgg7Iuk7YyoIOydtOycoFxyXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBpc1NpZ25lZFVwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyEseqztSDsl6zrtoBcclxuICBpc1NpZ25pbmdVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBFcnJvclJlYXNvbjogJycsIC8vIO2ajOybkOqwgOyehSDsi6TtjKgg7J207JygXHJcbiAgLy8g64K0IOygleuztFxyXG4gIG1lOiBudWxsLFxyXG4gIC8vIG1lOiB7XHJcbiAgLy8gICBpZDogbnVsbCxcclxuICAvLyAgIG5pY2tuYW1lOiBudWxsLFxyXG4gIC8vICAgdXNlcklkOiBudWxsLFxyXG4gIC8vICAgY3JlYXRlZEF0OiBudWxsLFxyXG4gIC8vICAgdXBkYXRlZEF0OiBudWxsLFxyXG4gIC8vIH0sXHJcbiAgdXNlckluZm86IG51bGwsIC8vIOuCqOydmCDsoJXrs7RcclxuICBmb2xsb3dpbmdMaXN0OiB7IC8vIO2MlOuhnOyeiSDrpqzsiqTtirhcclxuICAgIGlzRnVsZmlsbGVkOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyb3I6ICcnLFxyXG4gIH0sXHJcbiAgZm9sbG93ZXJMaXN0OiB7IC8vIO2MlOuhnOybjCDrpqzsiqTtirhcclxuICAgIGlzRnVsZmlsbGVkOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyb3I6ICcnLFxyXG4gIH0sXHJcbn07XHJcblxyXG4vKlxyXG5mb2xsb3dpbmdMaXN0OiB7XHJcbiAgaXNGdWxmaWxsZWQ6IGZhbHNlLFxyXG4gIGRhdGE6IFtdLFxyXG4gIGVycm9yOiBbXSxcclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfVVNFUl9SRVFVRVNUID0gJ0ZPTExPV19VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1VTRVJfU1VDQ0VTUyA9ICdGT0xMT1dfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19VU0VSX0ZBSUxVUkUgPSAnRk9MTE9XX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfVVNFUl9SRVFVRVNUID0gJ1VORk9MTE9XX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19VU0VSX1NVQ0NFU1MgPSAnVU5GT0xMT1dfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1VTRVJfRkFJTFVSRSA9ICdVTkZPTExPV19VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfTklDS05BTUVfUkVRVUVTVCA9ICdFRElUX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRURJVF9OSUNLTkFNRV9TVUNDRVNTID0gJ0VESVRfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBFRElUX05JQ0tOQU1FX0ZBSUxVUkUgPSAnRURJVF9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDoge1xyXG4gICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgLy8gbWU6IGR1bW15VXNlcixcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOiB7XHJcbiAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dpbkVycm9yUmVhc29uID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDoge1xyXG4gICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dCA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOiB7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERhdGEgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmlzU2lnbmVkVXAgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOiB7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yUmVhc29uID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzoge1xyXG4gICAgICBpZiAoYWN0aW9uLmlzTWUpIHsgLy8g64KYXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+uCmCBtZSA9ICcsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDsg4HrjIBcclxuICAgICAgY29uc29sZS5sb2coJ+yDgeuMgCcpO1xyXG4gICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBGT0xMT1dfVVNFUl9SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBGT0xMT1dfVVNFUl9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEZPTExPV19VU0VSX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBVTkZPTExPV19VU0VSX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVORk9MTE9XX1VTRVJfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuZm9sbG93aW5nTGlzdC5kYXRhID0gZHJhZnQuZm9sbG93aW5nTGlzdC5kYXRhLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVU5GT0xMT1dfVVNFUl9GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6IHtcclxuICAgICAgZHJhZnQubWUuUG9zdHMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOiB7XHJcbiAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpID0+IGRyYWZ0LmZvbGxvd2VyTGlzdC5kYXRhLnB1c2godikpO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCB8fCBkcmFmdC5mb2xsb3dlckxpc3QuZGF0YS5sZW5ndGggPT09IGRyYWZ0Lm1lLkZvbGxvd2Vycy5sZW5ndGgpIHtcclxuICAgICAgICBkcmFmdC5mb2xsb3dlckxpc3QuaXNGdWxmaWxsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzoge1xyXG4gICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KSA9PiBkcmFmdC5mb2xsb3dpbmdMaXN0LmRhdGEucHVzaCh2KSk7XHJcblxyXG4gICAgICBpZiAoYWN0aW9uLmRhdGEubGVuZ3RoID09PSAwIHx8IGRyYWZ0LmZvbGxvd2luZ0xpc3QuZGF0YS5sZW5ndGggPT09IGRyYWZ0Lm1lLkZvbGxvd2luZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93aW5nTGlzdC5pc0Z1bGZpbGxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd2VyTGlzdC5kYXRhID0gZHJhZnQuZm9sbG93ZXJMaXN0LmRhdGEuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEVESVRfTklDS05BTUVfUkVRVUVTVDoge1xyXG4gICAgICBkcmFmdC5pc0VkaXRpbmdOaWNrbmFtZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmVkaXRpbmdOaWNrbmFtZUVycm9yUmVhc29uID0gJyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBFRElUX05JQ0tOQU1FX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQuaXNFZGl0aW5nTmlja25hbWUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZWRpdGluZ05pY2tuYW1lRXJyb3JSZWFzb24gPSAnJztcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEVESVRfTklDS05BTUVfRkFJTFVSRToge1xyXG4gICAgICBkcmFmdC5pc0VkaXRpbmdOaWNrbmFtZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5lZGl0aW5nTmlja25hbWVFcnJvclJlYXNvbiA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUvYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh1c2VyKSxcclxuICAgIGZvcmsocG9zdCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9DT01NRU5UU19SRVFVRVNULFxyXG4gIExPQURfQ09NTUVOVFNfU1VDQ0VTUyxcclxuICBMT0FEX0NPTU1FTlRTX0ZBSUxVUkUsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVUV0VFVF9SRVFVRVNULFxyXG4gIFJFVFdFRVRfU1VDQ0VTUyxcclxuICBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcblxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIFJFTU9WRV9VUExPQURfSU1BR0VfUkVRVUVTVCxcclxuICBSRU1PVkVfVVBMT0FEX0lNQUdFX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1VQTE9BRF9JTUFHRV9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG5cclxuICBHRVRfTU9ESUZZX0lNQUdFU19TVUNDRVNTLFxyXG4gIEdFVF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgR0VUX01PRElGWV9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfTU9ESUZZX0lNQUdFU19TVUNDRVNTLFxyXG4gIFVQTE9BRF9NT0RJRllfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX01PRElGWV9JTUFHRVNfRkFJTFVSRSxcclxuICBSRU1PVkVfTU9ESUZZX0lNQUdFX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX01PRElGWV9JTUFHRV9GQUlMVVJFLFxyXG4gIFJFTU9WRV9NT0RJRllfSU1BR0VfUkVRVUVTVCxcclxuICBBRERfTU9ESUZZX1BPU1RfU1VDQ0VTUyxcclxuICBBRERfTU9ESUZZX1BPU1RfRkFJTFVSRSxcclxuICBBRERfTU9ESUZZX1BPU1RfUkVRVUVTVCxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIGltcG9ydCBuZXh0IGZyb20gJ25leHQnO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShwb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC8nLCBwb3N0RGF0YSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgYWRkUG9zdEFQSShhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlQb3N0QVBJKHBvc3REYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvcG9zdC8nLCBwb3N0RGF0YSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbW9kaWZ5UG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgbW9kaWZ5UG9zdEFQSShhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfTU9ESUZZX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIC8vIHlpZWxkIHB1dCh7XHJcbiAgICAvLyAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgLy8gICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIC8vIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX01PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNb2RpZnlQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX01PRElGWV9QT1NUX1JFUVVFU1QsIG1vZGlmeVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIHsgY29udGVudDogZGF0YS5jb250ZW50IH0sIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBvc3RJZDogYWN0aW9uLmRhdGEucG9zdElkLFxyXG4gICAgICAgIGNvbW1lbnQ6IHJlc3VsdC5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNYWluUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9saW1pdD0ke2RhdGEubGltaXR9Jmxhc3RJZD0ke2RhdGEubGFzdElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE1haW5Qb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTWFpblBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdhY3Rpb24gZXJyb3InLCBlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTUFJTl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE1haW5Qb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTUFJTl9QT1NUU19SRVFVRVNULCBsb2FkTWFpblBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkocG9zdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtwb3N0SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignYWN0aW9uIGVycm9yJywgZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YS50YWcpfT9saW1pdD0ke2RhdGEubGltaXR9Jm9mZnNldD0ke2RhdGEub2Zmc2V0fWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEhhc2h0YWdQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YS5pZH0vcG9zdHM/bGltaXQ9JHtkYXRhLmxpbWl0fSZsYXN0SWQ9JHtkYXRhLmxhc3RJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlclBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29tbWVudHNBUEkoaWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2lkfS9jb21tZW50c2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZENvbW1lbnRzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBsb2FkQ29tbWVudHNBUEkoYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9DT01NRU5UU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICBjb21tZW50czogcmVzdWx0LmRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9DT01NRU5UU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZENvbW1lbnRzUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0NPTU1FTlRTX1JFUVVFU1QsIGxvYWRDb21tZW50cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShmb3JtRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBmb3JtRGF0YSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCB1cGxvYWRJbWFnZXNBUEkoYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVwbG9hZGltYWdlcyBzYWdhIGVycm9yICA9ICR7ZX1gKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkTW9kaWZ5SW1hZ2VzQVBJKGZvcm1EYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGZvcm1EYXRhLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRNb2RpZnlJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHVwbG9hZE1vZGlmeUltYWdlc0FQSShhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfTU9ESUZZX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVwbG9hZGltYWdlcyBzYWdhIGVycm9yICA9ICR7ZX1gKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRNb2RpZnlJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfTU9ESUZZX0lNQUdFU19SRVFVRVNULCB1cGxvYWRNb2RpZnlJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb2RpZnlJbWFnZXNBUEkocG9zdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtwb3N0SWR9L2ltYWdlc2AsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGdldE1vZGlmeUltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgZ2V0TW9kaWZ5SW1hZ2VzQVBJKGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEdFVF9NT0RJRllfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogR0VUX01PRElGWV9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEdldE1vZGlmeUltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9NT0RJRllfSU1BR0VTX1JFUVVFU1QsIGdldE1vZGlmeUltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke3Bvc3RJZH0vbGlrZWAsIHt9LCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwb3N0SWQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIHVzZXJJZDogcmVzdWx0LmRhdGEudXNlcklkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7cG9zdElkfS9saWtlYCwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB1c2VySWQ6IHJlc3VsdC5kYXRhLnVzZXJJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke3Bvc3RJZH0vcmV0d2VldGAsIHt9LCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIC8vIGRhdGE6IHtcclxuICAgICAgLy8gICAgIHBvc3RJZDogYWN0aW9uLmRhdGEsXHJcbiAgICAgIC8vICAgICB1c2VySWQ6IHJlc3VsdC5kYXRhLnVzZXJJZFxyXG4gICAgICAvLyB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkocG9zdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtwb3N0SWR9YCwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVVcGxvYWRJbWFnZUFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vaW1hZ2UvdXBsb2FkLyR7ZGF0YS5pbWdTcmN9YCwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlVXBsb2FkSW1hZ2UoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwocmVtb3ZlVXBsb2FkSW1hZ2VBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9VUExPQURfSU1BR0VfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEuaW1nU3JjLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9VUExPQURfSU1BR0VfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVVwbG9hZEltYWdlKCkge1xyXG4gIHlpZWxkIHRha2VFdmVyeShSRU1PVkVfVVBMT0FEX0lNQUdFX1JFUVVFU1QsIHJlbW92ZVVwbG9hZEltYWdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTW9kaWZ5SW1hZ2VBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2ltYWdlL21vZGlmeS8ke2RhdGEuaW1nU3JjfWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZU1vZGlmeUltYWdlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZU1vZGlmeUltYWdlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfTU9ESUZZX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLnBvc3RJZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfTU9ESUZZX0lNQUdFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVNb2RpZnlJbWFnZSgpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoUkVNT1ZFX01PRElGWV9JTUFHRV9SRVFVRVNULCByZW1vdmVNb2RpZnlJbWFnZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaExvYWRNYWluUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRDb21tZW50c1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZE1vZGlmeUltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoR2V0TW9kaWZ5SW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlVXBsb2FkSW1hZ2UpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZU1vZGlmeUltYWdlKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTW9kaWZ5UG9zdCksXHJcblxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgdGFrZUxhdGVzdCwgdGFrZUV2ZXJ5LCBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSxcclxuICBMT0dfT1VUX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1VTRVJfUkVRVUVTVCwgRk9MTE9XX1VTRVJfU1VDQ0VTUywgRk9MTE9XX1VTRVJfRkFJTFVSRSxcclxuICBVTkZPTExPV19VU0VSX1JFUVVFU1QsIFVORk9MTE9XX1VTRVJfU1VDQ0VTUywgVU5GT0xMT1dfVVNFUl9GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gIEVESVRfTklDS05BTUVfUkVRVUVTVCwgRURJVF9OSUNLTkFNRV9TVUNDRVNTLCBFRElUX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoc2lnblVwRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci8nLCBzaWduVXBEYXRhKTtcclxufVxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKCfsnbzrtoDroZwg7JeQ65+sIOuCtOq4sCcpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9naW5BUEkobG9naW5EYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luLycsIGxvZ2luRGF0YSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dvdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dC8nLCB7fSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2dvdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nb3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSh1c2VySWQpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3VzZXIvJHt1c2VySWR9L2ZvbGxvdy9gLCB7fSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfVVNFUl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfVVNFUl9GQUlMVVJFLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bkZvbGxvd0FQSSh1c2VySWQpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke3VzZXJJZH0vZm9sbG93L2AsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogdW5Gb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5Gb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfVVNFUl9GQUlMVVJFLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSSh1c2VySWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KHVzZXJJZCA/IGAvdXNlci8ke3VzZXJJZH1gIDogJy91c2VyLycsIHsgLy8gL3VzZXIgOiDrgrTsoJXrs7QsIC91c2VyLzppZCDrgqjsnZjsoJXrs7RcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgaXNNZTogIWFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93aW5ncz9saW1pdD0ke2RhdGEubGltaXR9Jm9mZnNldD0ke2RhdGEub2Zmc2V0fWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2RhdGEubGltaXR9Jm9mZnNldD0ke2RhdGEub2Zmc2V0fWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkodXNlcklkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHt1c2VySWR9L2ZvbGxvd2VyL2AsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdE5pY2tuYW1lQVBJKG5pY2tuYW1lKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZS8nLCB7IG5pY2tuYW1lIH0sIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGVkaXROaWNrbmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChlZGl0Tmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRURJVF9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfVVNFUl9SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dpbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dvdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfVVNFUl9SRVFVRVNULCB1bkZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRWRpdE5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRURJVF9OSUNLTkFNRV9SRVFVRVNULCBlZGl0Tmlja25hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIHdhdGNoU2lnblVwKCksXHJcbiAgICB3YXRjaExvZ2luKCksXHJcbiAgICB3YXRjaExvZ291dCgpLFxyXG4gICAgd2F0Y2hMb2FkVXNlcigpLFxyXG4gICAgd2F0Y2hGb2xsb3coKSxcclxuICAgIHdhdGNoVW5Gb2xsb3coKSxcclxuICAgIHdhdGNoTG9hZEZvbGxvd2VycygpLFxyXG4gICAgd2F0Y2hMb2FkRm9sbG93aW5ncygpLFxyXG4gICAgd2F0Y2hSZW1vdmVGb2xsb3dlcigpLFxyXG4gICAgd2F0Y2hFZGl0Tmlja25hbWUoKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gIC8vIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCAoc3RvcmUpID0+IChhY3Rpb24pID0+IChuZXh0KSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnYWN0aW9uID0gJywgYWN0aW9uKTtcclxuICAvLyAgIC8vIG5leHQoYWN0aW9uKTtcclxuICAvLyB9XTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKFxyXG4gICAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpLFxyXG4gICAgKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9