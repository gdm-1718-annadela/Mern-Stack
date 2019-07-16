"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AuthController", {
  enumerable: true,
  get: function get() {
    return _auth.default;
  }
});
Object.defineProperty(exports, "BlogController", {
  enumerable: true,
  get: function get() {
    return _blog.default;
  }
});
Object.defineProperty(exports, "CategoryController", {
  enumerable: true,
  get: function get() {
    return _category.default;
  }
});
Object.defineProperty(exports, "PostController", {
  enumerable: true,
  get: function get() {
    return _post.default;
  }
});
Object.defineProperty(exports, "UserController", {
  enumerable: true,
  get: function get() {
    return _user.default;
  }
});

var _auth = _interopRequireDefault(require("./auth.controller"));

var _blog = _interopRequireDefault(require("./blog.controller"));

var _category = _interopRequireDefault(require("./category.controller"));

var _post = _interopRequireDefault(require("./post.controller"));

var _user = _interopRequireDefault(require("./user.controller"));