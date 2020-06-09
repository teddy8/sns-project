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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch2\\front\\components\\AppLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // 서버쪽에서 받은 데이터가 없기 때문에 가짜데이터를 만들어줌

const dummy = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: true
};

const AppLayout = ({
  children
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    mode: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, dummy.isLoggedIn ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    me: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://www.zerocho.com",
    prefetch: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Made by ZeroCho")))));
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

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
/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/signup */ "./pages/signup.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch2\\front\\components\\LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LoginForm = () => {
  const [id, onChangeId] = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_3__["useInput"])('');
  const [password, onChangePassword] = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_3__["useInput"])('');
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    console.log({
      id,
      password
    });
  }, [id, password]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmitForm,
    style: {
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "user-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    required: true,
    value: id,
    onChange: onChangeId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "user-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/signup */ "./pages/signup.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch2\\front\\components\\PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '오한민'
    },
    content: '첫 번째 게시글',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAgVBMVEX/////0xpwfoW9zdOUnqR5ho329/e3vsHb3+DJztGmr7Pt7/Dk5+j80iOCjpSMl52dpquvt7uRkm3AxsnP2t79/Pa3qFDS19ntyjD/+N3c5ej/9MbbvzT/6pF/jIXI1dr/2j6inF//5HT/3lP/7qnOtz7/4WLg0XL/8bfBr0jOz6JHQ9SfAAALj0lEQVR4nO1ca3ujqhbOWMULxsaamEvTmHTaOdP9/3/gAQFFBQUFzT7H98M806Yqr+u+WGSzWbFixYoVK1asWLFixYoVK1Zo4/xOcVh6JSPx/vXx5/f2VwP3359f/yZC56/P+y857n8+zksvUQF/e0kwbD//Lr3QXvz93A6TeHou5w8VWTSU7OMJDeb9jyYLKpYnM5f332NolHgmqUyggaXysfT6KQ6fU2hgJven0K8PdUclx/JCObej90j8WdhSvszQQFhWvaZaB4ftdjkmB90AOEBlKSZnszwWY3I2Zh4V7ktYvAUeyHf9j/BYIMjb4TG/mRj2VxyRmZVrVMquhvc5eXzY4zGrvb9PXu32muf590n42XxWMtlAtg+H4O1b8Ol8jmuqYl1vToVHVyr3uXicJ/L49eZweOv68bl0S7WsPf080JLfHtf27wmB/PuaYxV7dC78moeHoqWf3qQvHf+KatQJUeko1+c8RNQEkvPq03rp+VvO/9C59j4LDyULOTXMwHGUuNeYhYhSTUjc6+0tz0tG3Zfejzms/aCSLP6U+kSN/Dv/0U0w58hSvlQWgoXQ9lXPRkQlW7zqK9PsRA4q6zjdBPH6yYj8nbTAJyJisI+1LJFJXfdnIjILjxkC4uTEVwlb+0Sml4Yq+G2fiM1avcYMJeI8RP7V3vf6qFL7GUzEmvfF9VVFRFxXxb4fPjuRbX7jePwSzkOEOKH2N0ffz4BNItcHWsttVIZV0uCSZaFmwbLASV7xv54BJjIi32Ud9RhLw8nrV7AValbA15uZNSKkL5KLP+zDtSwlm7WLsDyEYRD4CSXiWyPCOg0PSRNUQv+HVPY/jd92BAKQXfiR67rZZkceE08nIokjOa7PHdauUiJzpSxubTm2BRJ7tUoxBYsmW4mECKrRkXZ8s47ubYDN9edBm6YdGl2B7JwuEWc3lYikYt/enFLNtxUXLJu3/Od6bfYdrtf8wTXuBC3sjoW41Z97MGX/dacSkSWN18rtnL4frZ4WEhBB69e5qD3RTbMqIklca9lkiajVIwIyLXQbwgSC7ekIUdghcz8CgLWMcAkmE1EP7dfvvCMEQqLHgARBvQzpHnJaTgh9H+Ifk+NkHtrp7wlZRf6TI06PHOF67XVpwl03Fj0cLwuyHYh9AzQsl4hb4dwD53+xNNLUBI/Nxta2NIZkejZ+bajmZI9V4mCxtJJviwRRLRUPGiGi1sQehXvvc0PGw0B+QmBLJEOzG6Z5WBPJwMYhzU4MFomWRDK0bxgRgRjkYafevQ88ExBrj4wSsTDhNDjc5BPNMhILa5jvNw51sqhAzGrWRnH/TQODrUUqELOaZZ7J4EgmFYiJGtcqk8GDPanJ5KSFd3MWfx96Vkyj+vQqRARz08uDMzSuLQuh0DgX1ofBnnVGsxN7w83vRoQyFNOZYhmOIU2YOHQxYOqAVoiG6ikZDtOP8wxoDK2qXu3yMEDl3n/7iFa4c0z/H76m2ErvmC94NV6G9ON9xJ7c6XT6D8L+cokvF3EzN/Rm5rHBYlGdMsfr/+eflyYEd4QZawQlM/LAOH8MccEUXoRo3yv269aJu8DpmMOXtOo6yThg7Ll7gMB3uVaWZ7K61cFZYC69JDgi8OjvEofHa2hi63Msld8tFv0kMIog9HfNPhwiES3JosSHFguMFofE9YOlSZSgSb4ii5cXburfjZ6EA8F5++s0YBcNIoiJ6/pZYKgfahCxBo2Xl4udmmk64F6HBiKy2EKznYux8/0w6MRdoEljMSLBruVkPMQorE30Mrjwomj+vO97nC2AyJEBexxkrqAQL5+s+QLjS/sPliBy9KQ8GJ1URqQo4AZ2WCxCpBaHyyBmc7t1WOBcPRabz+xEIEsj0mbMCoLA99M2KX6plxirnERUxdzGzjZY5QUCCLK0yl1roVygzCUXRTx/EGQF224ohQDBK47VN16nRJZxgeROcF4ubD9SpeMXc0oFRTSQ3RMSoPRhdlfeBOOhNIh3qN46Wi5s0yhiRmJPP7K68iYYD8WCjRhEIbANahSg4Yfn0y1NHkS3kDhAM8wXpF8C2m54NiKBJo8NIOJoGgdRKSAw/LmIML+rMai6L0ArV9mXqxWHxJkaPqyRrLNDAVrJI3ZeSNEkIXGmiEgj9qtWCdpI5gt8KRSnxcWFxRPboHuqmltf3LsvLVwUEov9ZcZYWE3b6l1Wrbu0DQGNgnV8UV4/i2oluh6LgOpRIaZxaUaTwsK622ARRNNESCQp89oODRrZIZcN21h5C3UDMNEyEkC1qhPZLySY7Bv0LC2eA+QrDC3tKrWq3YjY44jRCewvL/bdVtaolXSujDsJCqEmcl8zhPZGxyTRu7a15EJe61qWyDFKYKNHrnWWptVMuYBOYC/wvhuAtsNhjP3upiEQoPNI0LAN0FApRGG2Ehcnil7YIOL6WmdQeNvg0pN9UYsA4K6FP/3wQQ/KRDHmz2/g6XStHdbKHC6VMPYsmoMg8102DGA198VxEA9IwZTbDMMWoz4KzWI7jRgFzaviMOU3CQ0cNBKsfudntCmNM0VyvOxQ90jLvEs55+I6EMW+DOYQcXCa8KwMy9Cn4Ka0n+58pgaR66ZHt3RajsZYCGQsSlHAMEocAbydb161/NYz3FpC6AVDMnOkPutZswjS9lZni0xm1IcFkg51TQi7MnUfU7yUGnWMxLfd+RFHL0nNbVtFkS98IkcIKZz68zCLOBWzSFKSxwc+d64tMmMwwPFArwZ0JTSMbCcgkqSNFXOK56UGdAx5XD8e3P7g1+MqHZuFRz+qHG7ipqFgrTCruLiTVawMEoFk0RIqOjcfyJ1hpYTutMhSVh5uXREqwFPe2weOwgAyCKmDnjagRRj4G3XtiuDgDgPDUYUIokK9zaSZIFp5hBso2U5rwQ2Qa1C9eeoonkNnZ9zGMwHVe0auZlgoUbwJEvVx9VfltYHqhY5EbRsoGz34vVRew8MGpI563lW+JVVvRHO7sXbCb5/jLCtsjwVQJBFigZS5ZKr6rQXYRNQLfnqgaiSThgi8MmEMWtNgKA4eyxhQnXBUjcRYehozyMRINRtpFLHTQpUuwKAEG5FEWWzNWfWlYbeqUQfSBGPU+QRRltWaR4dB2JibVNcWqKOGGDQEyA0eSCOYKMmq3iEqSIRJmGpgL5tjWpkHcT3SajTwZBUZEK2TOVco+pD/gyG4GtKj2PU9AHrStyhMTJh5SpN7RW0B/M0UAfqUi7i1no/aIAZ+kMaUumEH+rL68i3pHgAhr1b42qmGCC8TltPUbcgHtCq1xzJL/F77066ZXKnQUzkRmRUkWZCJOZZg3QkWOyOhWCD/t+ogAUHw3U3sWKLoIp3cvQZrQ3A5gCtQ6vIFjjiSE0lEQhcrvGPaWaQKXNHFXtoSC3mBI85Ilb6pKxImEOEd1RL3NogJHTu/bzZEiM8bU7/63FO6axUa3SgeROpA7NNcmpYxVR/Bg926GRWZ6xHfcRyRgLuxewy6/atX13WnHKknImlExWoHTRzDxhEpe4gOv9CjJPcfec62GxWrUCD+JjphgjIMfCnNuOtbCesYzT27CkQkVcoF6ntLkopRPPDqqUAaagy7XMa2qmh8o5VJWKuuTFWVGoxt4OTYrf7XADg2utbjOwlUlVD1HfORWWpyXReqAL//60rKTSmMaEIXVJxy9CSrfFC7CS/u4li9MIvbsgKL83oVNVDSrgZHyAr9saasgq6u7IbOJcJs15MfClAV+la+jIGhFZsUB2IO/Ej4ANzqdVk9a97I5BI9t3Hg9o7lyKrS0eo+OWfuotRa6Ral25HxwN/BwFrOVmcwqEiSdlatDzyd4LYVrjyxMHJKUBMZ8uCZyZ3fQ4BEhI+JuBH9ar5K7EudDDaGSvGsfkfGDKgaraa+424xVMW+XTOZAcE831syB0Ly9cgrVqxYsWLFihUrVqxY8X+I/wLGCrh+STMDpAAAAABJRU5ErkJggg=='
  }, {
    User: {
      id: 2,
      nickname: '오한민'
    },
    content: '2 번째 게시글',
    img: 'https://sb-content-file.s3-ap-northeast-1.amazonaws.com/smallbridge_favicon.png'
  }]
};

const PostCard = ({
  post
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: +post.createdAt,
    cover: post.img && __jsx("img", {
      alt: "example",
      src: post.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }),
    actions: [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "retweet",
      key: "retweet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "heart",
      key: "heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "message",
      key: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "ellipsis",
      key: "ellipsis",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    })],
    extra: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, "\uD314\uB85C\uC6B0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }));
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    img: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string // createdAt: object,

  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

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
/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/signup */ "./pages/signup.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch2\\front\\components\\PostForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '오한민'
    },
    content: '첫 번째 게시글',
    img: 'data:image/png;base64,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'
  }, {
    User: {
      id: 2,
      nickname: '오한민'
    },
    content: '2 번째 게시글',
    img: 'https://sb-content-file.s3-ap-northeast-1.amazonaws.com/smallbridge_favicon.png'
  }]
};

const PostForm = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      marginBottom: 20
    },
    encType: "multipart/form-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      float: 'right'
    },
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, dummy.imagePaths.map((v, i) => {
    return __jsx("div", {
      key: v,
      style: {
        display: 'inline-block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, __jsx("img", {
      src: 'https://localhost:3065/' + v,
      style: {
        width: '200px'
      },
      alt: v,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, "\uC81C\uAC70")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

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
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch2\\front\\components\\UserProfile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const dummy = {
  nickname: '오한민',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: true
};

const UserProfile = () => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, "\uC9F9\uC9F9", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }), dummy.Post.length), __jsx("div", {
      key: "following",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }), dummy.Followings.length), __jsx("div", {
      key: "follower",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }), dummy.Followers.length)],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, dummy.nickname[0]),
    title: dummy.nickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

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

      var cb = listeners.get(entry.target);

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

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

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
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
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
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
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

        this.prefetch();
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

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
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

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

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

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
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
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
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
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
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
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
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
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
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

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
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
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
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
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
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
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

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

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
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
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch2\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '오한민'
    },
    content: '첫 번째 게시글',
    img: 'data:image/png;base64,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'
  }, {
    User: {
      id: 2,
      nickname: '오한민'
    },
    content: '2 번째 게시글',
    img: 'https://sb-content-file.s3-ap-northeast-1.amazonaws.com/smallbridge_favicon.png'
  }]
};

const Home = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, dummy.isLoggedIn && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), dummy.mainPosts.map(c => {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: c.User.id,
      post: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Program Files\\Git\\usr\\react-nodebird\\ch2\\front\\pages\\signup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const TextInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  name,
  value,
  onChange
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: name,
    value: value,
    required: true,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  });
});
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

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput(''); // 패스워드

  const [passwordCheck, onChangePasswordCheck] = useInput(''); // 패스워드확인

  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwordError,
    1: setPasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: termError,
    1: setTermError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log({
      id,
      nickname,
      password,
      passwordCheck,
      term
    });
  }, [password, passwordCheck, term]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setPasswordError(password !== passwordCheck);
  }, [password, passwordCheck]);
  const onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setTerm(e.target.checked);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onSubmit,
    style: {
      padding: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "user-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx(TextInput, {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "user-nickname",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(TextInput, {
    name: "user-nickname",
    value: nickname,
    onChange: onChangeNickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "user-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "user-pass",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("label", {
    htmlFor: "user-password-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    name: "user-password-check",
    type: "password",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), passwordError && __jsx("div", {
    style: {
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "\uC81C\uB85C\uCD08 \uB9D0\uC744 \uC798 \uB4E4\uC744 \uAC83\uC744 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
    style: {
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "\uAC00\uC785\uD558\uAE30"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Program Files\Git\usr\react-nodebird\ch2\front\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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
//# sourceMappingURL=index.js.map