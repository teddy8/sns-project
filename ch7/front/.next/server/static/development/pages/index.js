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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const InputSearch = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search)`
  vertical-align:middle
`;

const AppLayout = ({
  children
}) => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);

  const onSearch = value => {
    console.log('value = ', value);
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(`/hashtag/${value}`);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 31
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 46
    }
  }, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 34
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 56
    }
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(InputSearch, {
    enterButton: true,
    onSearch: onSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }))), !me && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 36
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 39
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, me ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    me: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })));
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout); // useEffect(() => {
//     if (!me) {
//         dispatch({
//             type: LOAD_USER_REQUEST,
//         })
//     }
// }, [])

/***/ }),

/***/ "./components/ImazesZoom.js":
/*!**********************************!*\
  !*** ./components/ImazesZoom.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\components\\ImazesZoom.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // 현재 몇번째 이미지인지

  return __jsx("div", {
    style: {
      position: 'fixed',
      zIndex: 5000,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("header", {
    style: {
      height: 44,
      background: 'white',
      position: 'relative',
      padding: 0,
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    style: {
      margin: 0,
      fontSize: '17px',
      color: '#333',
      lineHeight: '44px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CloseOutlined"], {
    type: "close",
    onClick: onClose,
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: 15,
      lineHeight: '14px',
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx("div", {
    style: {
      height: 'calc(100% - 44px)',
      background: '#090909'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {
    initialSlide: 0,
    afterChange: slide => setCurrentSlide(slide) // 현재 슬라이드가 몇번째인지 슬라이드 할 때마다 바꿔줘야 함
    ,
    infinite: false // 1 2 3 4 보여주고 다시 1로 가지 않도록 막아주기.
    ,
    arrows: true // 화살표 추가하기
    ,
    slidesToShow: 1 // 한번에 한장만 보여주기
    ,
    slidesToScroll: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, images.map(v => __jsx("div", {
    style: {
      padding: 32,
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: `http://localhost:3065/${v.src}`,
    alt: v.src,
    style: {
      margin: '0 auto',
      maxHeight: 750
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })))), __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      width: 75,
      height: 30,
      lineHeight: '30px',
      borderRadius: 15,
      background: '#313131',
      display: 'inline-block',
      textAlign: 'center',
      color: 'white',
      fontSize: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, currentSlide + 1, ' ', "/", ' ', images.length)))));
};

ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\components\\LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Form"])`
  padding: 10px;
`;

const LoginForm = () => {
  const [id, onChangeId] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('1');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])('1234');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    isLoggingIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOG_IN_REQUEST"],
      data: {
        userId: id,
        password
      }
    });
    console.log({
      id,
      password
    });
  }, [id, password]);
  return __jsx(StyledForm, {
    onFinish: onSubmitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    required: true,
    value: id,
    onChange: onChangeId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isLoggingIn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 30
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/ModifyPostForm.js":
/*!**************************************!*\
  !*** ./components/ModifyPostForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\components\\ModifyPostForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Form"])`
margin-bottom: 20px;

& > img {
  width: 200px;
}
`;
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"])`
float: right;
`;
const Div = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
display: inline-block;
`;

const ModifyPostForm = ({
  post,
  modalOpened,
  setModalOpened
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    modifyPost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (modalOpened) {
      setText(post.content);
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["GET_MODIFY_IMAGES_REQUEST"],
        data: post.id
      });
    }
  }, [modalOpened]);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    // e.preventDefault();
    setText('');

    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    const formData = new FormData();
    formData.append('content', text);
    modifyPost.imagePaths.forEach(i => {
      formData.append('image', i);
    });
    formData.append('postId', post.id);
    console.log('update post id=', post.id);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_MODIFY_POST_REQUEST"],
      data: formData
    });
    return setModalOpened(false);
  }, [text, modifyPost.imagePaths]);
  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setText(e.target.value);
  }, []); // 로컬 이미지를 올렸을 때

  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    console.log('files = ', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["UPLOAD_MODIFY_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log('이미지업로드 버튼 클릭');
    imageInput.current.click();
  }, [imageInput.current]);
  const onClickRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["REMOVE_MODIFY_IMAGE_REQUEST"],
      data: {
        postId: post.id,
        imgSrc: modifyPost.imagePaths[index]
      }
    });
  }, [modifyPost.imagePaths]);
  return __jsx(StyledForm, {
    encType: "multipart/form-data",
    onFinish: onSubmitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    onChange: onChangeText,
    value: text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(StyledButton, {
    type: "primary",
    htmlType: "submit",
    loading: modifyPost.isAdding,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, modifyPost.imagePaths.map((v, i) => __jsx(Div, {
    key: v,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: `http://localhost:3065/${v}`,
    alt: v,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickRemoveImage(i),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, "\uC81C\uAC70"))))));
};

ModifyPostForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  modalOpened: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  setModalOpened: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ModifyPostForm);

/***/ }),

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _ModifyPostForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModifyPostForm */ "./components/ModifyPostForm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\components\\PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import { useInput } from '../pages/signup';







const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div`
   & Button {
    display: block;
    width: 200px;
  }
`;

const PostCard = ({
  post
}) => {
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: commentText,
    1: setCommentText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: popoverOpened,
    1: setPopoverOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const {
    isAddingComment
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const isLiked = me && post.Likers && post.Likers.find(v => v.id === me.id);
  const isFollowinged = me && me.Followings && me.Followings.find(v => v.id === post.UserId); // 내가 아이디가 1인데 2를 팔로우한 상태면 id:2 이렇게 들어있을 것.
  // post.UserId 가 me.Followings  내가 팔로우한 명단에 있는지 확인

  const {
    0: modalOpened,
    1: setModalOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    // e.preventDefault();
    if (!me) {
      return alert('댓글을 남기려면 로그인이 필요합니다.');
    }

    if (!commentText) {
      return null;
    }

    setCommentText(''); // console.log('post id = ' + post.id);
    // console.log('comment text = ' + commentText);

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["ADD_COMMENT_REQUEST"],
      data: {
        postId: post.id,
        content: commentText
      }
    });
  }, [me, commentText]);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!me) {
      return alert('댓글을 보려면 로그인이 필요합니다.');
    }

    console.log('댓글아이콘 클릭');
    setCommentFormOpened(prev => !prev);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LOAD_COMMENTS_REQUEST"],
      data: post.id
    });
  }, [me]);
  const onChangeCommentText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setCommentText(e.target.value);
  }, []);
  const onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!me) {
      return alert('로그인이 필요합니다.');
    }

    if (isLiked) {
      return dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_POST_REQUEST"],
        data: post.id
      });
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [me && me.id, post && post.id, isLiked]);
  const onToggleRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log('리트윗 버튼 클릭');
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [me && me.id, post && post.id]);

  const onClickFollow = () => {
    if (!me) {
      return alert('로그인이 필요합니다.');
    }

    if (isFollowinged) {
      return dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__["UNFOLLOW_USER_REQUEST"],
        data: post.UserId
      });
    }

    return dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__["FOLLOW_USER_REQUEST"],
      data: post.UserId
    });
  };

  const onEditPost = () => {
    console.log(post.id, '번째 글의 edit 버튼 클릭');
    console.log('modal =', modalOpened);
    setPopoverOpened(false);
    setModalOpened(true);
  };

  const popoverVisibleChange = visible => {
    setPopoverOpened(visible);
  };

  const onDeletePost = () => {
    console.log('delete 버튼 클릭');
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  };

  const modalHandleCancel = () => {
    setModalOpened(false);
    console.log('모달 닫음');
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: +post.createdAt // cover={ post.Images && post.Images[0] && <img alt="example" src={"http://localhost:3065/" + post.Images[0].src} />}
    ,
    cover: post.Images && post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      images: post.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 49
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      type: "retweet",
      key: "retweet",
      onClick: onToggleRetweet,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }), isLiked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
      type: "heart",
      key: "heart",
      onClick: onToggleLike,
      twoToneColor: "#eb2f96",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 15
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      type: "heart",
      key: "heart",
      onClick: onToggleLike,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      type: "message",
      key: "message",
      onClick: onToggleComment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      content: __jsx(ButtonWrapper, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onDeletePost,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 17
        }
      }, "\uC0AD\uC81C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onEditPost,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }, "\uC218\uC815")) // title="Title"
      ,
      trigger: "click",
      visible: popoverOpened,
      onVisibleChange: popoverVisibleChange,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }
    }, me && __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      type: "ellipsis",
      key: "ellipsis",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 20
      }
    }))],
    extra: post.UserId !== (me && me.id) && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onClickFollow,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 51
      }
    }, isFollowinged ? '언팔로우' : '팔로우'),
    title: post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, post.RetweetId ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    cover: post.Retweet.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      images: post.Retweet.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 50
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: '/user',
        query: {
          id: post.Retweet.User.id
        }
      } // ("/user?id=1")
      ,
      as: `/user/${post.Retweet.User.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 23
      }
    }, ' ', __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 25
      }
    }, post.Retweet.User.nickname[0]), ' ')),
    title: post.Retweet.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      content: post.Retweet.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 32
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: {
        pathname: '/user',
        query: {
          id: post.User.id
        }
      } // ("/user?id=1")
      ,
      as: `/user/${post.User.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }
    }, ' ', __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 23
      }
    }, post.User.nickname[0]), ' ')),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      content: post.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 30
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }))), commentFormOpened && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    rows: 4,
    value: commentText,
    onChange: onChangeCommentText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isAddingComment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, "\uC090\uC57D")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    header: `${post.Comments ? post.Comments.length : 0} 댓글`,
    itemLayout: "horizontal",
    dataSource: post.Comments || [],
    renderItem: item => __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
      author: item.User.nickname,
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 27
        }
      }, item.User.nickname[0]),
      content: item.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uAC8C\uC2DC\uAE00 \uC218\uC815\uD558\uAE30",
    centered: true // 중앙에 위치
    ,
    closable: true // 우측상단 닫기버튼 여부
    ,
    visible: modalOpened,
    footer: null // 하단에 있는 OK, Cancel버튼 제거
    // onOk={handleOk}
    ,
    onCancel: modalHandleCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }
  }, __jsx(_ModifyPostForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    modalOpened: modalOpened,
    post: post,
    setModalOpened: setModalOpened,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  })));
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\components\\PostCardContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PostCardContent = ({
  content
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, content.split(/(#[^\s]+)/g).map(v => {
  // if (v.match(/#[^\s]+/)) {
  if (v[0] === '#') {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: '/hashtag',
        query: {
          tag: v.slice(1)
        }
      } // 페이지와 파라미터
      ,
      as: `/hashtag/${v.slice(1)}` // 페이지에 대한 링크설정
      ,
      key: v,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, v));
  }

  return v;
}));

PostCardContent.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\components\\PostForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Form"])`
margin-bottom: 20px;

& > img {
  width: 200px;
}
`;
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"])`
float: right;
`;
const Div = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
display: inline-block;
`;

const PostForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    uploadPost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setText('');

    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }

    const formData = new FormData();
    formData.append('content', text);
    uploadPost.imagePaths.forEach(i => {
      formData.append('image', i);
    });
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, uploadPost.imagePaths]);
  const onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setText(e.target.value);
  }, []); // 로컬 이미지를 올렸을 때

  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    console.log('files = ', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log('이미지업로드 버튼 클릭');
    imageInput.current.click();
  }, [imageInput.current]);
  const onClickRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => () => {
    console.log('클릭한 인덱스 = ', index);
    console.log('saga로 넘긴 데이터', uploadPost.imagePaths[index]);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_UPLOAD_IMAGE_REQUEST"],
      data: {
        postId: 0,
        imgSrc: uploadPost.imagePaths[index]
      }
    });
  }, [uploadPost.imagePaths]);
  return __jsx(StyledForm, {
    encType: "multipart/form-data",
    onFinish: onSubmitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    onChange: onChangeText,
    value: text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(StyledButton, {
    type: "primary",
    htmlType: "submit",
    loading: uploadPost.isAdding,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, uploadPost.imagePaths.map((v, i) => __jsx(Div, {
    key: v,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: `http://localhost:3065/${v}`,
    alt: v,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickRemoveImage(i),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "\uC81C\uAC70"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImazesZoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImazesZoom */ "./components/ImazesZoom.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\components\\PostImages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Div = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
display: inline-block;
width: 50%;
text-align: center;
vertical-align: middle;
`;

const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: `http://localhost:3065/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImazesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 28
      }
    }));
  }

  if (images.length === 2) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx("img", {
      role: "presentation",
      src: `http://localhost:3065/${images[0].src}`,
      alt: images[0].src,
      width: "50%",
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }), __jsx("img", {
      role: "presentation",
      src: `http://localhost:3065/${images[1].src}`,
      alt: images[1].src,
      width: "50%",
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    })), showImagesZoom && __jsx(_ImazesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 28
      }
    }));
  } // 이미지나 더보기를 클릭하면 ImagesZoom을 로딩함


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("img", {
    role: "presentation",
    src: `http://localhost:3065/${images[0].src}`,
    alt: images[0].src,
    width: "50%",
    onClick: onZoom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(Div, {
    role: "presentation",
    onClick: onZoom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusCircleOutlined"], {
    type: "plus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30")), showImagesZoom && __jsx(_ImazesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: images,
    onClose: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 26
    }
  }));
};

PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\components\\UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import { logoutAction, LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    // dispatch(logoutAction);
    console.log('로그아웃 버튼 누름');
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"]
    });
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/profile",
      key: "twit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx("div", {
      key: "twit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }), me.Posts.length))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/profile",
      key: "following",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, __jsx("div", {
      key: "following",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }), me.Followings.length))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/profile",
      key: "follower",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, __jsx("div", {
      key: "follower",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }), me.Followers.length)))],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, me.nickname[0]),
    title: me.nickname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = (initValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch7\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // import Profile from './profile';



const Home = () => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    mainPosts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const limitNum = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(10);
  const offsetNum = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(10);
  const onScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      if (offsetNum.current !== mainPosts.data.length) {
        console.log(offsetNum.current, mainPosts.data.length);
        return;
      }

      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_MAIN_POSTS_REQUEST"],
        data: {
          // offset: offsetNum.current,
          limit: limitNum.current,
          lastId: mainPosts.data[mainPosts.data.length - 1].id
        }
      });
      offsetNum.current += limitNum.current;
      console.log('lastid = ', mainPosts.data[mainPosts.data.length - 1].id);
    }
  }, [mainPosts.data.length]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // ComponentDidMount
    if (mainPosts.isFulfilled === false) {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      // ComponentDidUnmount
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.data.length, mainPosts.isFulfilled]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 14
    }
  }), mainPosts.data.map(c => __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: +c.id,
    post: c,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })));
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_USER_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_MAIN_POSTS_REQUEST"],
    data: {
      limit: 10 // lastId: ,

    }
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Program Files\Git\usr\react-nodebird\ch7\front\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltYXplc1pvb20uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RpZnlQb3N0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdENhcmRDb250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIklucHV0U2VhcmNoIiwic3R5bGVkIiwiSW5wdXQiLCJTZWFyY2giLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJvblNlYXJjaCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsIkltYWdlc1pvb20iLCJpbWFnZXMiLCJvbkNsb3NlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwidXNlU3RhdGUiLCJwb3NpdGlvbiIsInpJbmRleCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwibWFyZ2luIiwiZm9udFNpemUiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJjdXJzb3IiLCJzbGlkZSIsIm1hcCIsInYiLCJzcmMiLCJtYXhIZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJsZW5ndGgiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJmdW5jIiwiU3R5bGVkRm9ybSIsIkZvcm0iLCJMb2dpbkZvcm0iLCJpZCIsIm9uQ2hhbmdlSWQiLCJ1c2VJbnB1dCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpc0xvZ2dpbmdJbiIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxPR19JTl9SRVFVRVNUIiwiZGF0YSIsInVzZXJJZCIsIlN0eWxlZEJ1dHRvbiIsIkJ1dHRvbiIsIkRpdiIsImRpdiIsIk1vZGlmeVBvc3RGb3JtIiwicG9zdCIsIm1vZGFsT3BlbmVkIiwic2V0TW9kYWxPcGVuZWQiLCJ0ZXh0Iiwic2V0VGV4dCIsIm1vZGlmeVBvc3QiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY29udGVudCIsIkdFVF9NT0RJRllfSU1BR0VTX1JFUVVFU1QiLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaW1hZ2VQYXRocyIsImZvckVhY2giLCJpIiwiQUREX01PRElGWV9QT1NUX1JFUVVFU1QiLCJvbkNoYW5nZVRleHQiLCJlIiwidGFyZ2V0Iiwib25DaGFuZ2VJbWFnZXMiLCJmaWxlcyIsImltYWdlRm9ybURhdGEiLCJjYWxsIiwiZiIsIlVQTE9BRF9NT0RJRllfSU1BR0VTX1JFUVVFU1QiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvbkNsaWNrUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9NT0RJRllfSU1BR0VfUkVRVUVTVCIsInBvc3RJZCIsImltZ1NyYyIsImlzQWRkaW5nIiwib2JqZWN0IiwiYm9vbCIsIkJ1dHRvbldyYXBwZXIiLCJQb3N0Q2FyZCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwicG9wb3Zlck9wZW5lZCIsInNldFBvcG92ZXJPcGVuZWQiLCJpc0FkZGluZ0NvbW1lbnQiLCJpc0xpa2VkIiwiTGlrZXJzIiwiZmluZCIsImlzRm9sbG93aW5nZWQiLCJGb2xsb3dpbmdzIiwiVXNlcklkIiwib25TdWJtaXRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJMT0FEX0NPTU1FTlRTX1JFUVVFU1QiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwib25Ub2dnbGVMaWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9SRVFVRVNUIiwib25Ub2dnbGVSZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwib25DbGlja0ZvbGxvdyIsIlVORk9MTE9XX1VTRVJfUkVRVUVTVCIsIkZPTExPV19VU0VSX1JFUVVFU1QiLCJvbkVkaXRQb3N0IiwicG9wb3ZlclZpc2libGVDaGFuZ2UiLCJ2aXNpYmxlIiwib25EZWxldGVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm1vZGFsSGFuZGxlQ2FuY2VsIiwiY3JlYXRlZEF0IiwiSW1hZ2VzIiwiUmV0d2VldElkIiwiVXNlciIsIm5pY2tuYW1lIiwiUmV0d2VldCIsInBhdGhuYW1lIiwicXVlcnkiLCJDb21tZW50cyIsIml0ZW0iLCJQb3N0Q2FyZENvbnRlbnQiLCJzcGxpdCIsInRhZyIsInNsaWNlIiwiUG9zdEZvcm0iLCJ1cGxvYWRQb3N0IiwiQUREX1BPU1RfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlJFTU9WRV9VUExPQURfSU1BR0VfUkVRVUVTVCIsIlBvc3RJbWFnZXMiLCJzaG93SW1hZ2VzWm9vbSIsInNldFNob3dJbWFnZXNab29tIiwib25ab29tIiwiVXNlclByb2ZpbGUiLCJvbkxvZ291dCIsIkxPR19PVVRfUkVRVUVTVCIsIlBvc3RzIiwiRm9sbG93ZXJzIiwiaW5pdFZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVyIiwidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsIm5vZGVOYW1lIiwiaXNMb2NhbCIsInNjcm9sbCIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsImFkZEJhc2VQYXRoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJkZWxCYXNlUGF0aCIsImNyZWRlbnRpYWxzIiwicmVzIiwiZ2V0UmVzcG9uc2UiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkhvbWUiLCJtYWluUG9zdHMiLCJsaW1pdE51bSIsIm9mZnNldE51bSIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIkxPQURfTUFJTl9QT1NUU19SRVFVRVNUIiwibGltaXQiLCJsYXN0SWQiLCJpc0Z1bGZpbGxlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYyIsImdldFNlcnZlclNpZGVQcm9wcyIsIndyYXBwZXIiLCJjb250ZXh0IiwiY29va2llIiwicmVxIiwiaGVhZGVycyIsImF4aW9zIiwiZGVmYXVsdHMiLCJDb29raWUiLCJzdG9yZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiRU5EIiwic2FnYVRhc2siLCJ0b1Byb21pc2UiLCJyb290UmVkdWNlciIsImFjdGlvbiIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJSRU1PVkVfVVBMT0FEX0lNQUdFX1NVQ0NFU1MiLCJSRU1PVkVfVVBMT0FEX0lNQUdFX0ZBSUxVUkUiLCJBRERfTU9ESUZZX1BPU1RfU1VDQ0VTUyIsIkFERF9NT0RJRllfUE9TVF9GQUlMVVJFIiwiR0VUX01PRElGWV9JTUFHRVNfU1VDQ0VTUyIsIkdFVF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUiLCJVUExPQURfTU9ESUZZX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX01PRElGWV9JTUFHRVNfRkFJTFVSRSIsIlJFTU9WRV9NT0RJRllfSU1BR0VfU1VDQ0VTUyIsIlJFTU9WRV9NT0RJRllfSU1BR0VfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiTE9BRF9DT01NRU5UU19TVUNDRVNTIiwiTE9BRF9DT01NRU5UU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiaW5pdGlhbFN0YXRlIiwiY29tbWVudCIsImFkZGVkIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImZpbmRJbmRleCIsInNwbGljZSIsInBvc3RJbmRleCIsImltZ0luZGV4IiwibGlrZUluZGV4IiwiY29tbWVudHMiLCJkdW1teVVzZXIiLCJQb3N0IiwibG9naW5FcnJvclJlYXNvbiIsImlzTG9nZ2luZ091dCIsImlzU2lnbmVkVXAiLCJpc1NpZ25pbmdVcCIsInNpZ25VcEVycm9yUmVhc29uIiwidXNlckluZm8iLCJmb2xsb3dpbmdMaXN0IiwiZm9sbG93ZXJMaXN0IiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJGT0xMT1dfVVNFUl9TVUNDRVNTIiwiRk9MTE9XX1VTRVJfRkFJTFVSRSIsIlVORk9MTE9XX1VTRVJfU1VDQ0VTUyIsIlVORk9MTE9XX1VTRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkVESVRfTklDS05BTUVfUkVRVUVTVCIsIkVESVRfTklDS05BTUVfU1VDQ0VTUyIsIkVESVRfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiaXNMb2dnZWRJbiIsInNpZ25VcERhdGEiLCJpc01lIiwiZmlsdGVyIiwiaXNFZGl0aW5nTmlja25hbWUiLCJlZGl0aW5nTmlja25hbWVFcnJvclJlYXNvbiIsImJhc2VVUkwiLCJyb290U2FnYSIsImZvcmsiLCJhZGRQb3N0QVBJIiwicG9zdERhdGEiLCJ3aXRoQ3JlZGVudGlhbHMiLCJhZGRQb3N0IiwicHV0Iiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIm1vZGlmeVBvc3RBUEkiLCJwYXRjaCIsIndhdGNoTW9kaWZ5UG9zdCIsImFkZENvbW1lbnRBUEkiLCJhZGRDb21tZW50Iiwid2F0Y2hBZGRDb21tZW50IiwibG9hZE1haW5Qb3N0c0FQSSIsImxvYWRNYWluUG9zdHMiLCJ3YXRjaExvYWRNYWluUG9zdHMiLCJsb2FkUG9zdEFQSSIsImxvYWRQb3N0Iiwid2F0Y2hMb2FkUG9zdCIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvZmZzZXQiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZFVzZXJQb3N0c0FQSSIsImxvYWRVc2VyUG9zdHMiLCJ3YXRjaExvYWRVc2VyUG9zdHMiLCJsb2FkQ29tbWVudHNBUEkiLCJsb2FkQ29tbWVudHMiLCJ3YXRjaExvYWRDb21tZW50c1Bvc3RzIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ1cGxvYWRNb2RpZnlJbWFnZXNBUEkiLCJ1cGxvYWRNb2RpZnlJbWFnZXMiLCJ3YXRjaFVwbG9hZE1vZGlmeUltYWdlcyIsImdldE1vZGlmeUltYWdlc0FQSSIsImdldE1vZGlmeUltYWdlcyIsIndhdGNoR2V0TW9kaWZ5SW1hZ2VzIiwibGlrZVBvc3RBUEkiLCJsaWtlUG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsInJldHdlZXRBUEkiLCJyZXR3ZWV0Iiwid2F0Y2hSZXR3ZWV0IiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJyZW1vdmVVcGxvYWRJbWFnZUFQSSIsInJlbW92ZVVwbG9hZEltYWdlIiwid2F0Y2hSZW1vdmVVcGxvYWRJbWFnZSIsInRha2VFdmVyeSIsInJlbW92ZU1vZGlmeUltYWdlQVBJIiwicmVtb3ZlTW9kaWZ5SW1hZ2UiLCJ3YXRjaFJlbW92ZU1vZGlmeUltYWdlIiwicG9zdFNhZ2EiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJsb2dpbkFQSSIsImxvZ2luRGF0YSIsImxvZ2luIiwibG9nb3V0QVBJIiwibG9nb3V0IiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5Gb2xsb3dBUEkiLCJ1bkZvbGxvdyIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJyZW1vdmVGb2xsb3dlckFQSSIsInJlbW92ZUZvbGxvd2VyIiwiZWRpdE5pY2tuYW1lQVBJIiwiZWRpdE5pY2tuYW1lIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFNpZ25VcCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaEVkaXROaWNrbmFtZSIsInVzZXJTYWdhIiwibG9nZ2VyTWlkZGxld2FyZSIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyx3REFBTSxDQUFDQywwQ0FBSyxDQUFDQyxNQUFQLENBQWU7O0NBQXpDOztBQUlBLE1BQU1DLFNBQVMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBU0Ms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QUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FB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O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IE1lbnUsIElucHV0LCBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuL0xvZ2luRm9ybSc7XHJcblxyXG5jb25zdCBJbnB1dFNlYXJjaCA9IHN0eWxlZChJbnB1dC5TZWFyY2gpYFxyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZVxyXG5gO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygndmFsdWUgPSAnLCB2YWx1ZSk7XHJcbiAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHt2YWx1ZX1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cImhvbWVcIj48TGluayBocmVmPVwiL1wiPjxhPuuFuOuTnOuyhOuTnDwvYT48L0xpbms+PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJwcm9maWxlXCI+PExpbmsgaHJlZj1cIi9wcm9maWxlXCI+PGE+7ZSE66Gc7ZWEPC9hPjwvTGluaz48L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIm1haWxcIj5cclxuICAgICAgICAgIDxJbnB1dFNlYXJjaCBlbnRlckJ1dHRvbiBvblNlYXJjaD17b25TZWFyY2h9IC8+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgeyFtZSAmJiA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPjxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9hPjwvTGluaz59XHJcbiAgICAgIDxSb3cgZ3V0dGVyPXs4fT5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAge21lXHJcbiAgICAgICAgICAgID8gPFVzZXJQcm9maWxlIC8+XHJcbiAgICAgICAgICAgIDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWU9ezZ9PlxyXG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9e1wiaHR0cHM6Ly93d3cuemVyb2Noby5jb21cIn0gcHJlZmV0Y2g9e2ZhbHNlfSA+PGEgdGFyZ2V0PXtcIl9ibGFua1wifT5NYWRlIGJ5IFplcm9DaG88L2E+PC9MaW5rPiAqL31cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBpZiAoIW1lKSB7XHJcbi8vICAgICAgICAgZGlzcGF0Y2goe1xyXG4vLyAgICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyB9LCBbXSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTsgLy8g7ZiE7J6sIOuqh+uyiOynuCDsnbTrr7jsp4Dsnbjsp4BcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIHpJbmRleDogNTAwMCwgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMCwgYm90dG9tOiAwIH19PlxyXG4gICAgICA8aGVhZGVyIHN0eWxlPXt7IGhlaWdodDogNDQsIGJhY2tncm91bmQ6ICd3aGl0ZScsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBwYWRkaW5nOiAwLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IDAsIGZvbnRTaXplOiAnMTdweCcsIGNvbG9yOiAnIzMzMycsIGxpbmVIZWlnaHQ6ICc0NHB4JyB9fT7sg4HshLgg7J2066+47KeAPC9oMT5cclxuICAgICAgICA8Q2xvc2VPdXRsaW5lZCB0eXBlPVwiY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlfSBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDAsIHRvcDogMCwgcGFkZGluZzogMTUsIGxpbmVIZWlnaHQ6ICcxNHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX0gLz5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDAlIC0gNDRweCknLCBiYWNrZ3JvdW5kOiAnIzA5MDkwOScgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTbGlja1xyXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XHJcbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlPXsoc2xpZGUpID0+IHNldEN1cnJlbnRTbGlkZShzbGlkZSl9IC8vIO2YhOyerCDsiqzrnbzsnbTrk5zqsIAg66qH67KI7Ke47J247KeAIOyKrOudvOydtOuTnCDtlaAg65WM66eI64ukIOuwlOq/lOykmOyVvCDtlahcclxuICAgICAgICAgICAgaW5maW5pdGU9e2ZhbHNlfSAvLyAxIDIgMyA0IOuztOyXrOyjvOqzoCDri6Tsi5wgMeuhnCDqsIDsp4Ag7JWK64+E66GdIOunieyVhOyjvOq4sC5cclxuICAgICAgICAgICAgYXJyb3dzIC8vIO2ZlOyCtO2RnCDstpTqsIDtlZjquLBcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93PXsxfSAvLyDtlZzrsojsl5Ag7ZWc7J6l66eMIOuztOyXrOyjvOq4sFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDMyLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHt2LnNyY31gfSBhbHQ9e3Yuc3JjfSBzdHlsZT17eyBtYXJnaW46ICcwIGF1dG8nLCBtYXhIZWlnaHQ6IDc1MCB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpY2s+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDc1LCBoZWlnaHQ6IDMwLCBsaW5lSGVpZ2h0OiAnMzBweCcsIGJvcmRlclJhZGl1czogMTUsIGJhY2tncm91bmQ6ICcjMzEzMTMxJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgIHtjdXJyZW50U2xpZGUgKyAxfVxyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlc1pvb20ucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KSkuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkKEZvcm0pYFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcxJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcxMjM0Jyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgaXNMb2dnaW5nSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB1c2VySWQ6IGlkLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh7IGlkLCBwYXNzd29yZCB9KTtcclxuICB9LCBbaWQsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkRm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1pZFwiIHJlcXVpcmVkIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17aXNMb2dnaW5nSW59PuuhnOq3uOyduDwvQnV0dG9uPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGE+PEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj48L2E+PC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIFJFTU9WRV9NT0RJRllfSU1BR0VfUkVRVUVTVCxcclxuICBHRVRfTU9ESUZZX0lNQUdFU19SRVFVRVNULFxyXG4gIFVQTE9BRF9NT0RJRllfSU1BR0VTX1JFUVVFU1QsXHJcbiAgQUREX01PRElGWV9QT1NUX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkKEZvcm0pYFxyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuJiA+IGltZyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuZmxvYXQ6IHJpZ2h0O1xyXG5gO1xyXG5cclxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgTW9kaWZ5UG9zdEZvcm0gPSAoeyBwb3N0LCBtb2RhbE9wZW5lZCwgc2V0TW9kYWxPcGVuZWQgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBtb2RpZnlQb3N0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtb2RhbE9wZW5lZCkge1xyXG4gICAgICBzZXRUZXh0KHBvc3QuY29udGVudCk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBHRVRfTU9ESUZZX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFttb2RhbE9wZW5lZF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRUZXh0KCcnKTtcclxuXHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHRleHQpO1xyXG4gICAgbW9kaWZ5UG9zdC5pbWFnZVBhdGhzLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0SWQnLCBwb3N0LmlkKTtcclxuICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgcG9zdCBpZD0nLCBwb3N0LmlkKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX01PRElGWV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc2V0TW9kYWxPcGVuZWQoZmFsc2UpO1xyXG4gIH0sIFt0ZXh0LCBtb2RpZnlQb3N0LmltYWdlUGF0aHNdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8g66Gc7LusIOydtOuvuOyngOulvCDsmKzroLjsnYQg65WMXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2ZpbGVzID0gJywgZS50YXJnZXQuZmlsZXMpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9NT0RJRllfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfsnbTrr7jsp4Dsl4XroZzrk5wg67KE7Yq8IO2BtOumrScpO1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX01PRElGWV9JTUFHRV9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBwb3N0LmlkLFxyXG4gICAgICAgIGltZ1NyYzogbW9kaWZ5UG9zdC5pbWFnZVBhdGhzW2luZGV4XSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sIFttb2RpZnlQb3N0LmltYWdlUGF0aHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRGb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxJbnB1dC5UZXh0QXJlYSBtYXhMZW5ndGg9ezE0MH0gcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gdmFsdWU9e3RleHR9IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgPFN0eWxlZEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bW9kaWZ5UG9zdC5pc0FkZGluZ30+7Ke57Ke5PC9TdHlsZWRCdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHttb2RpZnlQb3N0LmltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICA8RGl2IGtleT17dn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gfSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU3R5bGVkRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuTW9kaWZ5UG9zdEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBtb2RhbE9wZW5lZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBzZXRNb2RhbE9wZW5lZDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kaWZ5UG9zdEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQsIENhcmQsIEF2YXRhciwgTGlzdCwgQ29tbWVudCwgUG9wb3ZlciwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgUmV0d2VldE91dGxpbmVkLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIEVsbGlwc2lzT3V0bGluZWQsIEhlYXJ0VHdvVG9uZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4vLyBpbXBvcnQgeyB1c2VJbnB1dCB9IGZyb20gJy4uL3BhZ2VzL3NpZ251cCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gJy4vUG9zdENhcmRDb250ZW50JztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IE1vZGlmeVBvc3RGb3JtIGZyb20gJy4vTW9kaWZ5UG9zdEZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgTE9BRF9DT01NRU5UU19SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVUV0VFVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7XHJcbiAgRk9MTE9XX1VTRVJfUkVRVUVTVCxcclxuICBVTkZPTExPV19VU0VSX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgJiBCdXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcG9wb3Zlck9wZW5lZCwgc2V0UG9wb3Zlck9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IGlzQWRkaW5nQ29tbWVudCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaXNMaWtlZCA9IG1lICYmIHBvc3QuTGlrZXJzICYmIHBvc3QuTGlrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IG1lLmlkKTtcclxuICBjb25zdCBpc0ZvbGxvd2luZ2VkID0gbWUgJiYgbWUuRm9sbG93aW5ncyAmJiBtZS5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlcklkKTtcclxuICAvLyDrgrTqsIAg7JWE7J2065SU6rCAIDHsnbjrjbAgMuulvCDtjJTroZzsmrDtlZwg7IOB7YOc66m0IGlkOjIg7J2066CH6rKMIOuTpOyWtOyeiOydhCDqsoMuXHJcbiAgLy8gcG9zdC5Vc2VySWQg6rCAIG1lLkZvbGxvd2luZ3MgIOuCtOqwgCDtjJTroZzsmrDtlZwg66qF64uo7JeQIOyeiOuKlOyngCDtmZXsnbhcclxuXHJcbiAgY29uc3QgW21vZGFsT3BlbmVkLCBzZXRNb2RhbE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn64yT6riA7J2EIOuCqOq4sOugpOuptCDroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY29tbWVudFRleHQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgICBzZXRDb21tZW50VGV4dCgnJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncG9zdCBpZCA9ICcgKyBwb3N0LmlkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjb21tZW50IHRleHQgPSAnICsgY29tbWVudFRleHQpO1xyXG5cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwb3N0SWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgY29udGVudDogY29tbWVudFRleHQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LCBbbWUsIGNvbW1lbnRUZXh0XSk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghbWUpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfrjJPquIDsnYQg67O066Ck66m0IOuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ+uMk+q4gOyVhOydtOy9mCDtgbTrpq0nKTtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KSA9PiAhcHJldik7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9DT01NRU5UU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSwgW21lXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ29tbWVudFRleHQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0Q29tbWVudFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFtZSkgeyByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7IH1cclxuXHJcbiAgICBpZiAoaXNMaWtlZCkge1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFttZSAmJiBtZS5pZCwgcG9zdCAmJiBwb3N0LmlkLCBpc0xpa2VkXSk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfrpqztirjsnJcg67KE7Yq8IO2BtOumrScpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbbWUgJiYgbWUuaWQsIHBvc3QgJiYgcG9zdC5pZF0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrRm9sbG93ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFtZSkgeyByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7IH1cclxuXHJcbiAgICBpZiAoaXNGb2xsb3dpbmdlZCkge1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBwb3N0LlVzZXJJZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogRk9MTE9XX1VTRVJfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5Vc2VySWQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkVkaXRQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocG9zdC5pZCwgJ+uyiOynuCDquIDsnZggZWRpdCDrsoTtirwg7YG066atJyk7XHJcbiAgICBjb25zb2xlLmxvZygnbW9kYWwgPScsIG1vZGFsT3BlbmVkKTtcclxuICAgIHNldFBvcG92ZXJPcGVuZWQoZmFsc2UpO1xyXG4gICAgc2V0TW9kYWxPcGVuZWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcG9wb3ZlclZpc2libGVDaGFuZ2UgPSAodmlzaWJsZSkgPT4ge1xyXG4gICAgc2V0UG9wb3Zlck9wZW5lZCh2aXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkRlbGV0ZVBvc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZGVsZXRlIOuyhO2KvCDtgbTrpq0nKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vZGFsSGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxPcGVuZWQoZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coJ+uqqOuLrCDri6vsnYwnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcmRcclxuICAgICAgICBrZXk9eytwb3N0LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgLy8gY292ZXI9eyBwb3N0LkltYWdlcyAmJiBwb3N0LkltYWdlc1swXSAmJiA8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9e1wiaHR0cDovL2xvY2FsaG9zdDozMDY1L1wiICsgcG9zdC5JbWFnZXNbMF0uc3JjfSAvPn1cclxuICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXMgJiYgcG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCB0eXBlPVwicmV0d2VldFwiIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblRvZ2dsZVJldHdlZXR9IC8+LFxyXG4gICAgICAgICAgaXNMaWtlZFxyXG4gICAgICAgICAgICA/IDxIZWFydFR3b1RvbmUgdHlwZT1cImhlYXJ0XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiAvPlxyXG4gICAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIHR5cGU9XCJoZWFydFwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfSAvPixcclxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQgdHlwZT1cIm1lc3NhZ2VcIiBrZXk9XCJtZXNzYWdlXCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIHsvKiA8U3R5bGVkQnV0dG9uIG9uQ2xpY2s9e29uRGVsZXRlUG9zdH0+7IKt7KCcPC9TdHlsZWRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkQnV0dG9uIG9uQ2xpY2s9e29uRWRpdFBvc3R9PuyImOyglTwvU3R5bGVkQnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25EZWxldGVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25FZGl0UG9zdH0+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvLyB0aXRsZT1cIlRpdGxlXCJcclxuICAgICAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgICAgICAgdmlzaWJsZT17cG9wb3Zlck9wZW5lZH1cclxuICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtwb3BvdmVyVmlzaWJsZUNoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21lICYmIDxFbGxpcHNpc091dGxpbmVkIHR5cGU9XCJlbGxpcHNpc1wiIGtleT1cImVsbGlwc2lzXCIgLz59XHJcbiAgICAgICAgICA8L1BvcG92ZXI+LFxyXG5cclxuICAgICAgICBdfVxyXG4gICAgICAgIGV4dHJhPXsocG9zdC5Vc2VySWQgIT09IChtZSAmJiBtZS5pZCkpICYmIDxCdXR0b24gb25DbGljaz17b25DbGlja0ZvbGxvd30+e2lzRm9sbG93aW5nZWQgPyAn7Ja47YyU66Gc7JqwJyA6ICftjJTroZzsmrAnIH08L0J1dHRvbj59XHJcbiAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldElkID8gYCR7cG9zdC5Vc2VyLm5pY2tuYW1lfeuLmOydtCDrpqztirjsnJcg7ZWY7IWo7Iq164uI64ukLmAgOiBudWxsfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyBwb3N0LlJldHdlZXRJZFxyXG4gICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5SZXR3ZWV0LkltYWdlc30gLz59XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17eyBwYXRobmFtZTogJy91c2VyJywgcXVlcnk6IHsgaWQ6IHBvc3QuUmV0d2VldC5Vc2VyLmlkIH0gfX0gLy8gKFwiL3VzZXI/aWQ9MVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvdXNlci8ke3Bvc3QuUmV0d2VldC5Vc2VyLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IGNvbnRlbnQ9e3Bvc3QuUmV0d2VldC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIClcclxuICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3sgcGF0aG5hbWU6ICcvdXNlcicsIHF1ZXJ5OiB7IGlkOiBwb3N0LlVzZXIuaWQgfSB9fSAvLyAoXCIvdXNlcj9pZD0xXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e2AvdXNlci8ke3Bvc3QuVXNlci5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgY29udGVudD17cG9zdC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgIHsgY29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgcm93cz17NH0gdmFsdWU9e2NvbW1lbnRUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH0gLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2lzQWRkaW5nQ29tbWVudH0+7IKQ7JW9PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMgPyBwb3N0LkNvbW1lbnRzLmxlbmd0aCA6IDB9IOuMk+q4gGB9XHJcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50cyB8fCBbXX1cclxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCLqsozsi5zquIAg7IiY7KCV7ZWY6riwXCJcclxuICAgICAgICBjZW50ZXJlZCAvLyDspJHslZnsl5Ag7JyE7LmYXHJcbiAgICAgICAgY2xvc2FibGUgLy8g7Jqw7Lih7IOB64uoIOuLq+q4sOuyhO2KvCDsl6zrtoBcclxuICAgICAgICB2aXNpYmxlPXttb2RhbE9wZW5lZH1cclxuICAgICAgICBmb290ZXI9e251bGx9IC8vIO2VmOuLqOyXkCDsnojripQgT0ssIENhbmNlbOuyhO2KvCDsoJzqsbBcclxuXHJcbiAgICAgICAgLy8gb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgb25DYW5jZWw9e21vZGFsSGFuZGxlQ2FuY2VsfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1vZGlmeVBvc3RGb3JtIG1vZGFsT3BlbmVkPXttb2RhbE9wZW5lZH0gcG9zdD17cG9zdH0gc2V0TW9kYWxPcGVuZWQ9e3NldE1vZGFsT3BlbmVkfSAvPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7IGNvbnRlbnQgfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICB7Y29udGVudC5zcGxpdCgvKCNbXlxcc10rKS9nKS5tYXAoKHYpID0+IHtcclxuICAgICAgLy8gaWYgKHYubWF0Y2goLyNbXlxcc10rLykpIHtcclxuICAgICAgaWYgKHZbMF0gPT09ICcjJykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7IHBhdGhuYW1lOiAnL2hhc2h0YWcnLCBxdWVyeTogeyB0YWc6IHYuc2xpY2UoMSkgfSB9fSAvLyDtjpjsnbTsp4DsmYAg7YyM652866+47YSwXHJcbiAgICAgICAgICAgIGFzPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9IC8vIO2OmOydtOyngOyXkCDrjIDtlZwg66eB7YGs7ISk7KCVXHJcbiAgICAgICAgICAgIGtleT17dn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+e3Z9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHY7XHJcbiAgICB9KX1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcblBvc3RDYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmRDb250ZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9VUExPQURfSU1BR0VfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkKEZvcm0pYFxyXG5tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuJiA+IGltZyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuZmxvYXQ6IHJpZ2h0O1xyXG5gO1xyXG5cclxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCB7IHVwbG9hZFBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRUZXh0KCcnKTtcclxuXHJcbiAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHRleHQpO1xyXG4gICAgdXBsb2FkUG9zdC5pbWFnZVBhdGhzLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbdGV4dCwgdXBsb2FkUG9zdC5pbWFnZVBhdGhzXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIOuhnOy7rCDsnbTrr7jsp4Drpbwg7Jis66C47J2EIOuVjFxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdmaWxlcyA9ICcsIGUudGFyZ2V0LmZpbGVzKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfsnbTrr7jsp4Dsl4XroZzrk5wg67KE7Yq8IO2BtOumrScpO1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCftgbTrpq3tlZwg7J24642x7IqkID0gJywgaW5kZXgpO1xyXG4gICAgY29uc29sZS5sb2coJ3NhZ2HroZwg64SY6ri0IOuNsOydtO2EsCcsIHVwbG9hZFBvc3QuaW1hZ2VQYXRoc1tpbmRleF0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfVVBMT0FEX0lNQUdFX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwb3N0SWQ6IDAsXHJcbiAgICAgICAgaW1nU3JjOiB1cGxvYWRQb3N0LmltYWdlUGF0aHNbaW5kZXhdLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW3VwbG9hZFBvc3QuaW1hZ2VQYXRoc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEZvcm0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgPElucHV0LlRleHRBcmVhIG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIiBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSB2YWx1ZT17dGV4dH0gLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICA8U3R5bGVkQnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXt1cGxvYWRQb3N0LmlzQWRkaW5nfT7sp7nsp7k8L1N0eWxlZEJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3VwbG9hZFBvc3QuaW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgIDxEaXYga2V5PXt2fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHt2fWB9IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tSZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRGb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgUGx1c0NpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEltYWdlc1pvb20gZnJvbSAnLi9JbWF6ZXNab29tJztcclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxud2lkdGg6IDUwJTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0ltYWdlc1pvb20oZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzBdLnNyY31gfSBhbHQ9e2ltYWdlc1swXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzBdLnNyY31gfSBhbHQ9e2ltYWdlc1swXS5zcmN9IHdpZHRoPVwiNTAlXCIgb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzFdLnNyY31gfSBhbHQ9e2ltYWdlc1sxXS5zcmN9IHdpZHRoPVwiNTAlXCIgb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgLy8g7J2066+47KeA64KYIOuNlOuztOq4sOulvCDtgbTrpq3tlZjrqbQgSW1hZ2VzWm9vbeydhCDroZzrlKntlahcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD17aW1hZ2VzWzBdLnNyY30gd2lkdGg9XCI1MCVcIiBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgPERpdiByb2xlPVwicHJlc2VudGF0aW9uXCIgb25DbGljaz17b25ab29tfT5cclxuICAgICAgICAgIDxQbHVzQ2lyY2xlT3V0bGluZWQgdHlwZT1cInBsdXNcIiAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlOuztOq4sFxyXG4gICAgICAgIDwvRGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIEF2YXRhciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbi8vIGltcG9ydCB7IGxvZ291dEFjdGlvbiwgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBvbkxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vIGRpc3BhdGNoKGxvZ291dEFjdGlvbik7XHJcbiAgICBjb25zb2xlLmxvZygn66Gc6re47JWE7JuDIOuyhO2KvCDriITrpoQnKTtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBrZXk9XCJ0d2l0XCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XHJcbiAgICAgICAgICAgICAg7Ke57Ke5XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge21lLlBvc3RzLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPixcclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBrZXk9XCJmb2xsb3dpbmdcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ1wiPlxyXG4gICAgICAgICAgICAgIO2MlOuhnOyeiVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIHttZS5Gb2xsb3dpbmdzLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPixcclxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIiBrZXk9XCJmb2xsb3dlclwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJcIj5cclxuICAgICAgICAgICAgICDtjJTroZzsm4xcclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICB7bWUuRm9sbG93ZXJzLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPixcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgIGF2YXRhcj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ291dH0+66Gc6re47JWE7JuDPC9CdXR0b24+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VJbnB1dCA9IChpbml0VmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0VmFsdWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlcl07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dDtcclxuIiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHsgTE9BRF9NQUlOX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG4vLyBpbXBvcnQgUHJvZmlsZSBmcm9tICcuL3Byb2ZpbGUnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgbGltaXROdW0gPSB1c2VSZWYoMTApO1xyXG4gIGNvbnN0IG9mZnNldE51bSA9IHVzZVJlZigxMCk7XHJcblxyXG4gIGNvbnN0IG9uU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXHJcbiAgICA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgaWYgKG9mZnNldE51bS5jdXJyZW50ICE9PSBtYWluUG9zdHMuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvZmZzZXROdW0uY3VycmVudCwgbWFpblBvc3RzLmRhdGEubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAvLyBvZmZzZXQ6IG9mZnNldE51bS5jdXJyZW50LFxyXG4gICAgICAgICAgbGltaXQ6IGxpbWl0TnVtLmN1cnJlbnQsXHJcbiAgICAgICAgICBsYXN0SWQ6IG1haW5Qb3N0cy5kYXRhW21haW5Qb3N0cy5kYXRhLmxlbmd0aCAtIDFdLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgb2Zmc2V0TnVtLmN1cnJlbnQgKz0gbGltaXROdW0uY3VycmVudDtcclxuICAgICAgY29uc29sZS5sb2coJ2xhc3RpZCA9ICcsIG1haW5Qb3N0cy5kYXRhW21haW5Qb3N0cy5kYXRhLmxlbmd0aCAtIDFdLmlkKTtcclxuICAgIH1cclxuICB9LCBbbWFpblBvc3RzLmRhdGEubGVuZ3RoXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7IC8vIENvbXBvbmVudERpZE1vdW50XHJcbiAgICBpZiAobWFpblBvc3RzLmlzRnVsZmlsbGVkID09PSBmYWxzZSkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7IC8vIENvbXBvbmVudERpZFVubW91bnRcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW21haW5Qb3N0cy5kYXRhLmxlbmd0aCwgbWFpblBvc3RzLmlzRnVsZmlsbGVkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7bWFpblBvc3RzLmRhdGEubWFwKChjKSA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGtleT17K2MuaWR9IHBvc3Q9e2N9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH1cclxuXHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTUFJTl9QT1NUU19SRVFVRVNULFxyXG4gICAgZGF0YToge1xyXG4gICAgICBsaW1pdDogMTAsXHJcbiAgICAgIC8vIGxhc3RJZDogLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG4vLyDqsozsi5zquIAg6rSA66CoXHJcbi8vICjsk7DquLApXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfVVBMT0FEX0lNQUdFX1JFUVVFU1QgPSAnUkVNT1ZFX1VQTE9BRF9JTUFHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9VUExPQURfSU1BR0VfU1VDQ0VTUyA9ICdSRU1PVkVfVVBMT0FEX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VQTE9BRF9JTUFHRV9GQUlMVVJFID0gJ1JFTU9WRV9VUExPQURfSU1BR0VfRkFJTFVSRSc7XHJcbi8vICjsiJjsoJUpXHJcbmV4cG9ydCBjb25zdCBBRERfTU9ESUZZX1BPU1RfUkVRVUVTVCA9ICdBRERfTU9ESUZZX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfTU9ESUZZX1BPU1RfU1VDQ0VTUyA9ICdBRERfTU9ESUZZX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfTU9ESUZZX1BPU1RfRkFJTFVSRSA9ICdBRERfTU9ESUZZX1BPU1RfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTU9ESUZZX0lNQUdFU19SRVFVRVNUID0gJ0dFVF9NT0RJRllfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR0VUX01PRElGWV9JTUFHRVNfU1VDQ0VTUyA9ICdHRVRfTU9ESUZZX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdFVF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUgPSAnR0VUX01PRElGWV9JTUFHRVNfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfTU9ESUZZX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9NT0RJRllfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX01PRElGWV9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfTU9ESUZZX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX01PRElGWV9JTUFHRVNfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfTU9ESUZZX0lNQUdFX1JFUVVFU1QgPSAnUkVNT1ZFX01PRElGWV9JTUFHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9NT0RJRllfSU1BR0VfU1VDQ0VTUyA9ICdSRU1PVkVfTU9ESUZZX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX01PRElGWV9JTUFHRV9GQUlMVVJFID0gJ1JFTU9WRV9NT0RJRllfSU1BR0VfRkFJTFVSRSc7XHJcbi8vICjsgq3soJwpXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcbi8vICjsnb3quLApXHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCA9ICdMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSA9ICdMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbi8vIOuMk+q4gCDqtIDroKhcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPTU1FTlRTX1JFUVVFU1QgPSAnTE9BRF9DT01NRU5UU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09NTUVOVFNfU1VDQ0VTUyA9ICdMT0FEX0NPTU1FTlRTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT01NRU5UU19GQUlMVVJFID0gJ0xPQURfQ09NTUVOVFNfRkFJTFVSRSc7XHJcblxyXG4vLyBTU1Ig7ZmV7J24IOyaqeuPhFxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuLy8g7YyU66Gc7JqwLCDslrjtjJTroZzsmrAsIOumrO2KuOyclyDqtIDroKhcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IHtcclxuICAgIGlzRnVsZmlsbGVkOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyb3I6ICcnLFxyXG4gIH0sXHJcblxyXG4gIGNvbW1lbnQ6IHtcclxuICAgIGlzQWRkaW5nOiBmYWxzZSxcclxuICAgIGFkZGVkOiBmYWxzZSxcclxuICAgIGVycm9yOiAnJyxcclxuICB9LFxyXG5cclxuICB1cGxvYWRQb3N0OiB7XHJcbiAgICBpc0FkZGluZzogZmFsc2UsIC8vIOyXheuhnOuTnCDspJHsnbjsp4BcclxuICAgIGFkZGVkOiBmYWxzZSwgLy8g7JeF66Gc65OcIOyXrOu2gFxyXG4gICAgaW1hZ2VQYXRoczogW10sIC8vIFBvc3RGb3Jt7JeQIO2RnOyLnCDrkKAg7J2066+47KeA65Ok7J2YIOqyveuhnFxyXG4gICAgZXJyb3I6ICcnLCAvLyDsi6TtjKgg7J207JygXHJcbiAgfSxcclxuXHJcbiAgbW9kaWZ5UG9zdDoge1xyXG4gICAgaXNBZGRpbmc6IGZhbHNlLFxyXG4gICAgYWRkZWQ6IGZhbHNlLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBlcnJvcjogJycsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBuZXcgaW1hZ2UgcGF0aCA9ICR7YWN0aW9uLmRhdGF9YCk7XHJcbiAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpID0+IGRyYWZ0LnVwbG9hZFBvc3QuaW1hZ2VQYXRocy5wdXNoKHYpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFVQTE9BRF9NT0RJRllfSU1BR0VTX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQTE9BRF9NT0RJRllfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodikgPT4gZHJhZnQubW9kaWZ5UG9zdC5pbWFnZVBhdGhzLnB1c2godikpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX01PRElGWV9JTUFHRVNfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEdFVF9NT0RJRllfSU1BR0VTX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBHRVRfTU9ESUZZX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBtb2RpZnkgaW1hZ2UgcGF0aCA9ICR7YWN0aW9uLmRhdGF9YCk7XHJcbiAgICAgIGFjdGlvbi5kYXRhLmZvckVhY2goKHYpID0+IGRyYWZ0Lm1vZGlmeVBvc3QuaW1hZ2VQYXRocy5wdXNoKHYpKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEdFVF9NT0RJRllfSU1BR0VTX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YS51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFJFTU9WRV9VUExPQURfSU1BR0VfUkVRVUVTVDoge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGRyYWZ0LnVwbG9hZFBvc3QuaW1hZ2VQYXRocy5maW5kSW5kZXgoKHYsIGkpID0+IHYgPT09IGFjdGlvbi5kYXRhLmltZ1NyYyk7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBvc3QuaW1hZ2VQYXRocy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX1VQTE9BRF9JTUFHRV9TVUNDRVNTOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfVVBMT0FEX0lNQUdFX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBSRU1PVkVfTU9ESUZZX0lNQUdFX1JFUVVFU1Q6IHtcclxuICAgICAgLy8gbW9kaWZ5UG9zdOydmCDtlbTri7kg7J2066+47KeAIOygnOqxsFxyXG4gICAgICBjb25zdCBpbmRleCA9IGRyYWZ0Lm1vZGlmeVBvc3QuaW1hZ2VQYXRocy5maW5kSW5kZXgoKHYsIGkpID0+IHYgPT09IGFjdGlvbi5kYXRhLmltZ1NyYyk7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3QuaW1hZ2VQYXRocy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAvLyBtYWluUG9zdHPsl5Drj4Qg67CY7JiBXHJcbiAgICAgIGNvbnN0IHBvc3RJbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLmZpbmRJbmRleCgodiwgaSkgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgY29uc3QgaW1nSW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZGF0YVtwb3N0SW5kZXhdLkltYWdlc1xyXG4gICAgICAgIC5maW5kSW5kZXgoKHYsIGkpID0+IHYuc3JjID09PSBhY3Rpb24uZGF0YS5pbWdTcmMpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtwb3N0SW5kZXhdLkltYWdlcy5zcGxpY2UoaW1nSW5kZXgsIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX01PRElGWV9JTUFHRV9TVUNDRVNTOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfTU9ESUZZX0lNQUdFX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBvc3QuZXJyb3IgPSAnJztcclxuICAgICAgZHJhZnQudXBsb2FkUG9zdC5pc0FkZGluZyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC51cGxvYWRQb3N0LmlzQWRkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZFBvc3QuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICBkcmFmdC51cGxvYWRQb3N0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC51cGxvYWRQb3N0LmlzQWRkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgQUREX01PRElGWV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdC5lcnJvciA9ICcnO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0LmlzQWRkaW5nID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9NT0RJRllfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIC8vIOOFgeOFgeqyjOyLnOq4gCDsiJjsoJXsnYAg7JWe7JeQIOy2lOqwgO2VmOuKlOqyjCDslYTri4jrnbwg7ZW064u5IO2PrOyKpO2KuOulvCDssL7slYTshJwg642u7Ja07JSM7JuM7JW8IOuQqFxyXG4gICAgICBjb25zdCBpbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtpbmRleF0gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgLy8gZHJhZnQubWFpblBvc3RzLmRhdGEudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3QuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfTU9ESUZZX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0LmlzQWRkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQubWFpblBvc3RzLmRhdGEuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtpbmRleF0uTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEudXNlcklkIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3RJbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgY29uc3QgbGlrZUluZGV4ID0gZHJhZnQubWFpblBvc3RzLmRhdGFbcG9zdEluZGV4XS5MaWtlcnMuZmluZEluZGV4KCh2KSA9PiB2LmlkXHJcbiAgICAgID09PSBhY3Rpb24uZGF0YS51c2VySWQpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtwb3N0SW5kZXhdLkxpa2Vycy5zcGxpY2UobGlrZUluZGV4LCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOiB7XHJcbiAgICAgIGRyYWZ0LmNvbW1lbnQuaXNBZGRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jb21tZW50LmFkZGVkID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNvbW1lbnQuZXJyb3IgPSAnJztcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQubWFpblBvc3RzLmRhdGEuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YVtpbmRleF0uQ29tbWVudHMucHVzaChhY3Rpb24uZGF0YS5jb21tZW50KTtcclxuICAgICAgZHJhZnQuY29tbWVudC5pc0FkZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jb21tZW50LmFkZGVkID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOiB7XHJcbiAgICAgIGRyYWZ0LmNvbW1lbnQuaXNBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY29tbWVudC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX0NPTU1FTlRTX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZGF0YS5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5kYXRhW2luZGV4XS5Db21tZW50cyA9IGFjdGlvbi5kYXRhLmNvbW1lbnRzO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIExPQURfTUFJTl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX01BSU5fUE9TVFNfU1VDQ0VTUzoge1xyXG4gICAgICBhY3Rpb24uZGF0YS5tYXAoKHYpID0+IGRyYWZ0Lm1haW5Qb3N0cy5kYXRhLnB1c2godikpO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5pc0Z1bGZpbGxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLmRhdGEgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9NQUlOX1BPU1RTX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX0NPTU1FTlRTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZGF0YS5maW5kSW5kZXgoKHYpID0+ICh2LmlkID09PSBhY3Rpb24uZGF0YSkpO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0ge1xyXG4gIG5pY2tuYW1lOiAn7Jik7ZWc66+8JyxcclxuICBQb3N0OiBbXSxcclxuICBGb2xsb3dpbmdzOiBbXSxcclxuICBGb2xsb3dlcnM6IFtdLFxyXG4gIGlkOiAxLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsmpTssq3spJHsnbjsp4BcclxuICBsb2dpbkVycm9yUmVhc29uOiAnJywgLy8g66Gc6re47J24IOyLpO2MqCDsnbTsnKBcclxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgaXNTaWduZWRVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDshLHqs7Ug7Jes67aAXHJcbiAgaXNTaWduaW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgc2lnblVwRXJyb3JSZWFzb246ICcnLCAvLyDtmozsm5DqsIDsnoUg7Iuk7YyoIOydtOycoFxyXG4gIC8vIOuCtCDsoJXrs7RcclxuICBtZTogbnVsbCxcclxuICAvLyBtZToge1xyXG4gIC8vICAgaWQ6IG51bGwsXHJcbiAgLy8gICBuaWNrbmFtZTogbnVsbCxcclxuICAvLyAgIHVzZXJJZDogbnVsbCxcclxuICAvLyAgIGNyZWF0ZWRBdDogbnVsbCxcclxuICAvLyAgIHVwZGF0ZWRBdDogbnVsbCxcclxuICAvLyB9LFxyXG4gIHVzZXJJbmZvOiBudWxsLCAvLyDrgqjsnZgg7KCV67O0XHJcbiAgZm9sbG93aW5nTGlzdDogeyAvLyDtjJTroZzsnokg66as7Iqk7Yq4XHJcbiAgICBpc0Z1bGZpbGxlZDogZmFsc2UsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGVycm9yOiAnJyxcclxuICB9LFxyXG4gIGZvbGxvd2VyTGlzdDogeyAvLyDtjJTroZzsm4wg66as7Iqk7Yq4XHJcbiAgICBpc0Z1bGZpbGxlZDogZmFsc2UsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGVycm9yOiAnJyxcclxuICB9LFxyXG59O1xyXG5cclxuLypcclxuZm9sbG93aW5nTGlzdDoge1xyXG4gIGlzRnVsZmlsbGVkOiBmYWxzZSxcclxuICBkYXRhOiBbXSxcclxuICBlcnJvcjogW10sXHJcbn1cclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1VTRVJfUkVRVUVTVCA9ICdGT0xMT1dfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19VU0VSX1NVQ0NFU1MgPSAnRk9MTE9XX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfVVNFUl9GQUlMVVJFID0gJ0ZPTExPV19VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1VTRVJfUkVRVUVTVCA9ICdVTkZPTExPV19VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfVVNFUl9TVUNDRVNTID0gJ1VORk9MTE9XX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19VU0VSX0ZBSUxVUkUgPSAnVU5GT0xMT1dfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX05JQ0tOQU1FX1JFUVVFU1QgPSAnRURJVF9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEVESVRfTklDS05BTUVfU1VDQ0VTUyA9ICdFRElUX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRURJVF9OSUNLTkFNRV9GQUlMVVJFID0gJ0VESVRfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgIC8vIG1lOiBkdW1teVVzZXIsXHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRToge1xyXG4gICAgICBkcmFmdC5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9naW5FcnJvclJlYXNvbiA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0ID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDoge1xyXG4gICAgICBkcmFmdC5zaWduVXBEYXRhID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5pc1NpZ25lZFVwID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRToge1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvclJlYXNvbiA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6IHtcclxuICAgICAgaWYgKGFjdGlvbi5pc01lKSB7IC8vIOuCmFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfrgpggbWUgPSAnLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g7IOB64yAXHJcbiAgICAgIGNvbnNvbGUubG9nKCfsg4HrjIAnKTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgRk9MTE9XX1VTRVJfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgRk9MTE9XX1VTRVJfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBGT0xMT1dfVVNFUl9GQUlMVVJFOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgVU5GT0xMT1dfVVNFUl9SRVFVRVNUOiB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkZPTExPV19VU0VSX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd2luZ0xpc3QuZGF0YSA9IGRyYWZ0LmZvbGxvd2luZ0xpc3QuZGF0YS5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVORk9MTE9XX1VTRVJfRkFJTFVSRToge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOiB7XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzoge1xyXG4gICAgICBhY3Rpb24uZGF0YS5mb3JFYWNoKCh2KSA9PiBkcmFmdC5mb2xsb3dlckxpc3QuZGF0YS5wdXNoKHYpKTtcclxuXHJcbiAgICAgIGlmIChhY3Rpb24uZGF0YS5sZW5ndGggPT09IDAgfHwgZHJhZnQuZm9sbG93ZXJMaXN0LmRhdGEubGVuZ3RoID09PSBkcmFmdC5tZS5Gb2xsb3dlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93ZXJMaXN0LmlzRnVsZmlsbGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6IHtcclxuICAgICAgYWN0aW9uLmRhdGEuZm9yRWFjaCgodikgPT4gZHJhZnQuZm9sbG93aW5nTGlzdC5kYXRhLnB1c2godikpO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMCB8fCBkcmFmdC5mb2xsb3dpbmdMaXN0LmRhdGEubGVuZ3RoID09PSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmxlbmd0aCkge1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd2luZ0xpc3QuaXNGdWxmaWxsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDoge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5mb2xsb3dlckxpc3QuZGF0YSA9IGRyYWZ0LmZvbGxvd2VyTGlzdC5kYXRhLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBFRElUX05JQ0tOQU1FX1JFUVVFU1Q6IHtcclxuICAgICAgZHJhZnQuaXNFZGl0aW5nTmlja25hbWUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5lZGl0aW5nTmlja25hbWVFcnJvclJlYXNvbiA9ICcnO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgRURJVF9OSUNLTkFNRV9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmlzRWRpdGluZ05pY2tuYW1lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmVkaXRpbmdOaWNrbmFtZUVycm9yUmVhc29uID0gJyc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBFRElUX05JQ0tOQU1FX0ZBSUxVUkU6IHtcclxuICAgICAgZHJhZnQuaXNFZGl0aW5nTmlja25hbWUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZWRpdGluZ05pY2tuYW1lRXJyb3JSZWFzb24gPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1L2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsodXNlciksXHJcbiAgICBmb3JrKHBvc3QpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgcHV0LCBjYWxsLCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIExPQURfTUFJTl9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfTUFJTl9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfTUFJTl9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfQ09NTUVOVFNfUkVRVUVTVCxcclxuICBMT0FEX0NPTU1FTlRTX1NVQ0NFU1MsXHJcbiAgTE9BRF9DT01NRU5UU19GQUlMVVJFLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFJFVFdFRVRfUkVRVUVTVCxcclxuICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgUkVUV0VFVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG5cclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBSRU1PVkVfVVBMT0FEX0lNQUdFX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1VQTE9BRF9JTUFHRV9GQUlMVVJFLFxyXG4gIFJFTU9WRV9VUExPQURfSU1BR0VfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuXHJcbiAgR0VUX01PRElGWV9JTUFHRVNfU1VDQ0VTUyxcclxuICBHRVRfTU9ESUZZX0lNQUdFU19GQUlMVVJFLFxyXG4gIEdFVF9NT0RJRllfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX01PRElGWV9JTUFHRVNfU1VDQ0VTUyxcclxuICBVUExPQURfTU9ESUZZX0lNQUdFU19SRVFVRVNULFxyXG4gIFVQTE9BRF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX01PRElGWV9JTUFHRV9TVUNDRVNTLFxyXG4gIFJFTU9WRV9NT0RJRllfSU1BR0VfRkFJTFVSRSxcclxuICBSRU1PVkVfTU9ESUZZX0lNQUdFX1JFUVVFU1QsXHJcbiAgQUREX01PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgQUREX01PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX01PRElGWV9QT1NUX1JFUVVFU1QsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG4vLyBpbXBvcnQgbmV4dCBmcm9tICduZXh0JztcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkocG9zdERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvJywgcG9zdERhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGFkZFBvc3RBUEkoYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5UG9zdEFQSShwb3N0RGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaCgnL3Bvc3QvJywgcG9zdERhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIG1vZGlmeVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIG1vZGlmeVBvc3RBUEkoYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX01PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICAvLyB5aWVsZCBwdXQoe1xyXG4gICAgLy8gICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgIC8vICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAvLyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9NT0RJRllfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTW9kaWZ5UG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9NT0RJRllfUE9TVF9SRVFVRVNULCBtb2RpZnlQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCB7IGNvbnRlbnQ6IGRhdGEuY29udGVudCB9LCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwb3N0SWQ6IGFjdGlvbi5kYXRhLnBvc3RJZCxcclxuICAgICAgICBjb21tZW50OiByZXN1bHQuZGF0YSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWFpblBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGltaXQ9JHtkYXRhLmxpbWl0fSZsYXN0SWQ9JHtkYXRhLmxhc3RJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNYWluUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE1haW5Qb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NQUlOX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcignYWN0aW9uIGVycm9yJywgZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01BSU5fUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNYWluUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01BSU5fUE9TVFNfUkVRVUVTVCwgbG9hZE1haW5Qb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7cG9zdElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2FjdGlvbiBlcnJvcicsIGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEudGFnKX0/bGltaXQ9JHtkYXRhLmxpbWl0fSZvZmZzZXQ9JHtkYXRhLm9mZnNldH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGEuaWR9L3Bvc3RzP2xpbWl0PSR7ZGF0YS5saW1pdH0mbGFzdElkPSR7ZGF0YS5sYXN0SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENvbW1lbnRzQVBJKGlkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtpZH0vY29tbWVudHNgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRDb21tZW50cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgbG9hZENvbW1lbnRzQVBJKGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ09NTUVOVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBvc3RJZDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgY29tbWVudHM6IHJlc3VsdC5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ09NTUVOVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRDb21tZW50c1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9DT01NRU5UU19SRVFVRVNULCBsb2FkQ29tbWVudHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZm9ybURhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZm9ybURhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgdXBsb2FkSW1hZ2VzQVBJKGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1cGxvYWRpbWFnZXMgc2FnYSBlcnJvciAgPSAke2V9YCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZE1vZGlmeUltYWdlc0FQSShmb3JtRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBmb3JtRGF0YSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkTW9kaWZ5SW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCB1cGxvYWRNb2RpZnlJbWFnZXNBUEkoYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX01PRElGWV9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1cGxvYWRpbWFnZXMgc2FnYSBlcnJvciAgPSAke2V9YCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfTU9ESUZZX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkTW9kaWZ5SW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX01PRElGWV9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkTW9kaWZ5SW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW9kaWZ5SW1hZ2VzQVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7cG9zdElkfS9pbWFnZXNgLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBnZXRNb2RpZnlJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGdldE1vZGlmeUltYWdlc0FQSShhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBHRVRfTU9ESUZZX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEdFVF9NT0RJRllfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hHZXRNb2RpZnlJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChHRVRfTU9ESUZZX0lNQUdFU19SRVFVRVNULCBnZXRNb2RpZnlJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShwb3N0SWQpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtwb3N0SWR9L2xpa2VgLCB7fSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB1c2VySWQ6IHJlc3VsdC5kYXRhLnVzZXJJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShwb3N0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke3Bvc3RJZH0vbGlrZWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBvc3RJZDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgdXNlcklkOiByZXN1bHQuZGF0YS51c2VySWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShwb3N0SWQpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtwb3N0SWR9L3JldHdlZXRgLCB7fSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAvLyBkYXRhOiB7XHJcbiAgICAgIC8vICAgICBwb3N0SWQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAvLyAgICAgdXNlcklkOiByZXN1bHQuZGF0YS51c2VySWRcclxuICAgICAgLy8gfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKHBvc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7cG9zdElkfWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVXBsb2FkSW1hZ2VBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2ltYWdlL3VwbG9hZC8ke2RhdGEuaW1nU3JjfWAsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVVwbG9hZEltYWdlKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKHJlbW92ZVVwbG9hZEltYWdlQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfVVBMT0FEX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLmltZ1NyYyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfVVBMT0FEX0lNQUdFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVVcGxvYWRJbWFnZSgpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoUkVNT1ZFX1VQTE9BRF9JTUFHRV9SRVFVRVNULCByZW1vdmVVcGxvYWRJbWFnZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU1vZGlmeUltYWdlQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGEucG9zdElkfS9pbWFnZS9tb2RpZnkvJHtkYXRhLmltZ1NyY31gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVNb2RpZnlJbWFnZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVNb2RpZnlJbWFnZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX01PRElGWV9JTUFHRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5wb3N0SWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX01PRElGWV9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlTW9kaWZ5SW1hZ2UoKSB7XHJcbiAgeWllbGQgdGFrZUV2ZXJ5KFJFTU9WRV9NT0RJRllfSU1BR0VfUkVRVUVTVCwgcmVtb3ZlTW9kaWZ5SW1hZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTWFpblBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlclBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkQ29tbWVudHNQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRNb2RpZnlJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaEdldE1vZGlmeUltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVubGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVVwbG9hZEltYWdlKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVNb2RpZnlJbWFnZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaE1vZGlmeVBvc3QpLFxyXG5cclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIHRha2VMYXRlc3QsIHRha2VFdmVyeSwgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLFxyXG4gIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gIEZPTExPV19VU0VSX1JFUVVFU1QsIEZPTExPV19VU0VSX1NVQ0NFU1MsIEZPTExPV19VU0VSX0ZBSUxVUkUsXHJcbiAgVU5GT0xMT1dfVVNFUl9SRVFVRVNULCBVTkZPTExPV19VU0VSX1NVQ0NFU1MsIFVORk9MTE9XX1VTRVJfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICBFRElUX05JQ0tOQU1FX1JFUVVFU1QsIEVESVRfTklDS05BTUVfU1VDQ0VTUywgRURJVF9OSUNLTkFNRV9GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKHNpZ25VcERhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvJywgc2lnblVwRGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcign7J2867aA66GcIOyXkOufrCDrgrTquLAnKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGxvZ2luRGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbi8nLCBsb2dpbkRhdGEsIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nb3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQvJywge30sIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogbG9nb3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ291dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkodXNlcklkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC91c2VyLyR7dXNlcklkfS9mb2xsb3cvYCwge30sIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1VTRVJfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkodXNlcklkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHt1c2VySWR9L2ZvbGxvdy9gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24qIHVuRm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuRm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1VTRVJfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkodXNlcklkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCh1c2VySWQgPyBgL3VzZXIvJHt1c2VySWR9YCA6ICcvdXNlci8nLCB7IC8vIC91c2VyIDog64K07KCV67O0LCAvdXNlci86aWQg64Ko7J2Y7KCV67O0XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIGlzTWU6ICFhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtkYXRhLmxpbWl0fSZvZmZzZXQ9JHtkYXRhLm9mZnNldH1gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci9mb2xsb3dlcnM/bGltaXQ9JHtkYXRhLmxpbWl0fSZvZmZzZXQ9JHtkYXRhLm9mZnNldH1gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKHVzZXJJZCkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7dXNlcklkfS9mb2xsb3dlci9gLCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXROaWNrbmFtZUFQSShuaWNrbmFtZSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUvJywgeyBuaWNrbmFtZSB9LCB7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0Tmlja25hbWUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZWRpdE5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBFRElUX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEVESVRfTklDS05BTUVfRkFJTFVSRSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1VTRVJfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nb3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1VTRVJfUkVRVUVTVCwgdW5Gb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEVkaXROaWNrbmFtZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfTklDS05BTUVfUkVRVUVTVCwgZWRpdE5pY2tuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICB3YXRjaFNpZ25VcCgpLFxyXG4gICAgd2F0Y2hMb2dpbigpLFxyXG4gICAgd2F0Y2hMb2dvdXQoKSxcclxuICAgIHdhdGNoTG9hZFVzZXIoKSxcclxuICAgIHdhdGNoRm9sbG93KCksXHJcbiAgICB3YXRjaFVuRm9sbG93KCksXHJcbiAgICB3YXRjaExvYWRGb2xsb3dlcnMoKSxcclxuICAgIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSxcclxuICAgIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSxcclxuICAgIHdhdGNoRWRpdE5pY2tuYW1lKCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAvLyBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgKHN0b3JlKSA9PiAoYWN0aW9uKSA9PiAobmV4dCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ2FjdGlvbiA9ICcsIGFjdGlvbik7XHJcbiAgLy8gICAvLyBuZXh0KGFjdGlvbik7XHJcbiAgLy8gfV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSxcclxuICAgICk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=