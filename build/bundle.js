/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/manifest.json":
/*!****************************!*\
  !*** ./dist/manifest.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse(\"{\\\"main.js\\\":\\\"index.js\\\"}\");\n\n//# sourceURL=webpack://express-ssr/./dist/manifest.json?");

/***/ }),

/***/ "./component/Home.js":
/*!***************************!*\
  !*** ./component/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _store_home_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/home/actions */ \"./store/home/actions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Login */ \"./component/Login.js\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/*// const React = require('react');\nimport React from 'react';\n// const Page = require('./Page')\nimport Login from './Login'\nimport useLayoutEffect from './use-isomorphic-layout-effect'\n// const useLayoutEffect = require('./use-isomorphic-layout-effect');\n\nconst Home = (props) => {\n    const { useState, useLayoutEffect } = React;\n    // const [c, setC] = useState('1')\n    /!*useLayoutEffect(() => {\n        console.log('window', window)\n        // setC('2')\n    }, [])*!/\n\n    return (\n        <div className={props.className}>\n            <div>This is home</div>\n            <div>This is home222</div>\n            <button onClick={() => {alert('666')}}>click</button>\n            {/!*<div>{c}</div>*!/}\n            <Login/>\n        </div>\n    )\n}\n\n// module.exports = Home;\nexport default Home;*/\n\n\n\n // import styles from './home.less';\n// import './home.less';\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Home);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log('this.props.home.list.length', this.props.home.list.length);\n\n      if (!this.props.home.list.length) {\n        this.props.getHomeList();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var props = this.props;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(\"div\", {\n        className: \"title\"\n      }, \"This is home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(\"div\", null, \" \", !!props.home.list.length && props.home.list.map(function (item) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(\"div\", {\n          key: item\n        }, item);\n      }), \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(\"button\", {\n        onClick: function onClick() {\n          props.getHomeList();\n          console.log('props.home.list', props.home.list);\n        }\n      }, \"click me\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(\"button\", {\n        className: \"alert-me\",\n        onClick: function onClick() {\n          return alert('hhhhhh');\n        }\n      }, \"alert\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_10__.default, null));\n    }\n  }], [{\n    key: \"loadData\",\n\n    /*UNSAFE_componentWillMount(){\n        // 通过这个属性可以判断是在服务端调用\n        if(this.props.staticContext) {\n            const styles = require('./home.less');\n            console.log('styles', styles._getCss(), styles._getContent(), styles._insertCss());\n            // console.log('this.props.staticContext', this.props.staticContext);\n            // 给服务端注入的变量 staticContext 的 css属性中加入 css文本\n            this.props.staticContext.css.push(styles._getCss());\n        }\n    }*/\n    // 预加载数据，服务端调用\n    value: function () {\n      var _loadData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(store, match) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log('store.dispatch', store.dispatch); // 参数 match 是当前匹配路由的信息\n\n                return _context.abrupt(\"return\", store.dispatch((0,_store_home_actions__WEBPACK_IMPORTED_MODULE_8__.getHomeList)()));\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function loadData(_x, _x2) {\n        return _loadData.apply(this, arguments);\n      }\n\n      return loadData;\n    }()\n  }]);\n\n  return Home;\n}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    home: state.home\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mapStateToProps, {\n  getHomeList: _store_home_actions__WEBPACK_IMPORTED_MODULE_8__.getHomeList\n})(Home));\n\n//# sourceURL=webpack://express-ssr/./component/Home.js?");

/***/ }),

/***/ "./component/Login.js":
/*!****************************!*\
  !*** ./component/Login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// const React = require('react');\n\n\nvar Login = function Login() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"This is login page\"));\n}; // module.exports = Page;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://express-ssr/./component/Login.js?");

/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => /* binding */ routes,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Home */ \"./component/Home.js\");\n/* harmony import */ var _component_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Login */ \"./component/Login.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n\n\n // const Home = require('./component/home')\n\n\n // 根组件\n\nvar Root = function Root(_ref) {\n  var route = _ref.route;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/home\"\n  }, \"home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/login\"\n  }, \"login\")), (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.renderRoutes)(route.routes));\n};\n\nvar routes = [{\n  breadcrumb: '首页',\n  path: \"/\",\n  component: Root,\n  routes: [{\n    path: \"/home\",\n    exact: true,\n    component: _component_Home__WEBPACK_IMPORTED_MODULE_2__.default,\n    loadData: _component_Home__WEBPACK_IMPORTED_MODULE_2__.default.loadData //服务端获取异步数据的函数\n\n  }, {\n    path: \"/login\",\n    component: _component_Login__WEBPACK_IMPORTED_MODULE_3__.default,\n    exact: true // routes: [\n    //   {\n    //     path: \"/child/:id/grand-child\",\n    //     component: GrandChild\n    //   }\n    // ]\n\n  }]\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_4__.renderRoutes)(routes)));\n\n//# sourceURL=webpack://express-ssr/./router.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! @babel/register */ \"@babel/register\");\n\nvar express = __webpack_require__(/*! express */ \"express\"); // const React = require('react');\n// const { renderToString } = require('react-dom/server')\n// require(\"node-jsx\").install()\n\n\nvar _require = __webpack_require__(/*! ./utils */ \"./server/utils.js\"),\n    render = _require.render; // const Home =  require('../component/Home');\n\n\nvar app = express();\napp.use(express.static('dist')); // const content = renderToString(React.createElement(Home));\n\n/*app.use('/', function(req, res, next){\n    res.send(\n        `\n     <html>\n       <head>\n         <title>ssr</title>\n       </head>\n       <body>\n       <div id=\"root\" />\n       <script src=\"/index.js\"></script>\n       </body>\n     </html>\n    `\n    );\n})*/\n\napp.get('/api/list', function (req, res, next) {\n  res.json({\n    data: [11, 22, 33]\n  });\n});\napp.use('*', function (req, res, ctx) {\n  if (req.baseUrl === '/favicon.ico') return res.end(); // res.send(render(req))\n\n  render(req, res);\n});\napp.listen(3001, function () {\n  console.log('listen on port 3001');\n});\n\n//# sourceURL=webpack://express-ssr/./server/app.js?");

/***/ }),

/***/ "./server/utils.js":
/*!*************************!*\
  !*** ./server/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => /* binding */ render\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ \"./router.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n/* harmony import */ var _dist_manifest_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dist/manifest.json */ \"./dist/manifest.json\");\n\n\n //重要是要用到StaticRouter\n\n\n\n\n\n // 改造这里 服务端做数据预取\n\nvar loadBranchData = function loadBranchData(pathname, store) {\n  // 使用 matchRoutes api做路由匹配\n  var branch = (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.matchRoutes)(_router__WEBPACK_IMPORTED_MODULE_1__.routes, pathname); // console.log('branch', branch);\n\n  var promises = branch.map(function (_ref) {\n    var route = _ref.route,\n        match = _ref.match;\n    console.log('route', route.loadData); // 判断匹配的路由是否挂载有异步加载数据逻辑\n\n    return route.loadData ? route.loadData(store, match) // 把store 和 match 传入数据预取函数\n    : Promise.resolve(null);\n  });\n  return Promise.all(promises);\n};\n\nvar render = function render(req, res) {\n  var store = (0,_store__WEBPACK_IMPORTED_MODULE_6__.getServerStore)();\n  var context = {\n    css: []\n  }; // console.log('req', req.headers.cookie);\n  // 加载完数据后，再把组件生成字符串返回，现在返回的组件都是有数据的结果\n\n  loadBranchData(req.baseUrl, store).then(function (data) {\n    // 到这里所有的数据预加载完毕\n    // 数据加载完毕后再渲染组件\n    var string = getRenderString(); // console.log('string', string);\n\n    res.send(string);\n  }).catch(function (_err) {\n    console.log(_err);\n    res.send('loadBranchData_error');\n  }); // 下面的是拼接出一个完整的 HTML 并发送给浏览器\n\n  var renderLink = function renderLink() {\n    return Object.keys(_dist_manifest_json__WEBPACK_IMPORTED_MODULE_7__).filter(function (key) {\n      return /\\.css$/.test(key);\n    }).map(function (key) {\n      return \"<link rel=\\\"stylesheet\\\" href=\\\"\".concat(_dist_manifest_json__WEBPACK_IMPORTED_MODULE_7__[key], \"\\\">\");\n    }).join('\\n');\n  };\n\n  console.log('renderLink', _dist_manifest_json__WEBPACK_IMPORTED_MODULE_7__, renderLink());\n\n  function getRenderString() {\n    var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)(\n    /*#__PURE__*/\n    // Warning 这里的 store 一定要和 loadBranchData 的store一致，因为预取的数据要在流到组件中，组件再被生成字符串返回\n    // 如果这两个store不一致，将即使数据预取成功，也没有再次流到组件中\n    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n      location: req.baseUrl,\n      context: context\n    }, _router__WEBPACK_IMPORTED_MODULE_1__.default))); // 服务端的 renderToString执行完后 context中已经被注入了数据\n    // const cssStr = context.css.length ? context.css.join('\\n') : '';\n    // 数据注水\n\n    var hydrate = \"\\n      window.initialState = \".concat(JSON.stringify(store.getState()), \";\\n    \"); // <!--          <style>${cssStr}</style>-->\n\n    return \"\\n      <html>\\n        <head>\\n          <title>ssr</title>\\n          \".concat(renderLink(), \"\\n        </head>\\n        <body>\\n        <div id=\\\"root\\\">\").concat(content, \"</div>\\n          <script>\\n            // Warning \\u8FD9\\u4E2Ascript\\u4E00\\u5B9A\\u4E0D\\u80FD\\u653E\\u5230\\u540E\\u9762\\uFF0C\\u5B83\\u5FC5\\u987B\\u5728\\u5BA2\\u6237\\u7AEF\\u4EE3\\u7801\\u6267\\u884C\\u4E4B\\u524D\\u6CE8\\u6C34\\u6570\\u636E\\n            \").concat(hydrate, \"\\n          </script>\\n          <script src=\\\"/index.js\\\"></script>\\n        </body> \\n      </html>\\n    \");\n  }\n}; // <div id=\"root\">${content}</div><script src=\"/index.js\"></script>\n\n//# sourceURL=webpack://express-ssr/./server/utils.js?");

/***/ }),

/***/ "./store/home/actions.js":
/*!*******************************!*\
  !*** ./store/home/actions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHomeList\": () => /* binding */ getHomeList\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./store/home/constants.js\");\n\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = 'http://localhost:3001'; //普通action\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_1__.CHANGE_LIST,\n    payload: list\n  };\n}; //异步操作的action(采用thunk中间件)\n\n\nvar getHomeList = function getHomeList() {\n  console.log('getHomeList');\n  return function (dispatch, getState, axiosInstance) {\n    console.log('getHomeList dispatch');\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/list').then(function (res) {\n      var list = res.data;\n      console.log('list', list);\n      dispatch(changeList(list.data));\n    }).catch(function (err) {\n      console.log('err', err);\n    });\n  };\n};\n\n//# sourceURL=webpack://express-ssr/./store/home/actions.js?");

/***/ }),

/***/ "./store/home/constants.js":
/*!*********************************!*\
  !*** ./store/home/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CHANGE_LIST\": () => /* binding */ CHANGE_LIST\n/* harmony export */ });\nvar CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack://express-ssr/./store/home/constants.js?");

/***/ }),

/***/ "./store/home/index.js":
/*!*****************************!*\
  !*** ./store/home/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./store/home/constants.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initState = {\n  name: 'xj',\n  list: []\n};\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__.CHANGE_LIST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        list: action.payload\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://express-ssr/./store/home/index.js?");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerStore\": () => /* binding */ getServerStore,\n/* harmony export */   \"getClientStore\": () => /* binding */ getClientStore\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./store/home/index.js\");\n\n\n // import {serverAxiosInstance, clientAxiosInstance} from \"../utils/axios\";\n//合并项目组件中store的reducer\n\nvar reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  home: _home__WEBPACK_IMPORTED_MODULE_2__.default\n}); // const store = createStore(reducer, applyMiddleware(thunk));\n// export default store;\n//导出创建的store\n// 导出函数的目的是，在服务端渲染时，保证每个用户请求得到是不同的store\n\nvar getServerStore = function getServerStore() {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()))); // .withExtraArgument(serverAxiosInstance)\n}; // 服务端不支持 window，所以这里要区分服务端和客户端的方法\n\nvar getClientStore = function getClientStore() {\n  console.log('window.initialState', window.initialState);\n  var initialState = window.initialState ? window.initialState : {};\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, initialState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()))); // .withExtraArgument(clientAxiosInstance)\n};\n\n//# sourceURL=webpack://express-ssr/./store/index.js?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/register");;

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/classCallCheck");;

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/createClass");;

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");;

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/getPrototypeOf");;

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/inherits");;

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
eval("__webpack_require__(/*! ./app */ \"./server/app.js\");\n\n//# sourceURL=webpack://express-ssr/./server/index.js?");
})();

/******/ })()
;