"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Blog", {
  enumerable: true,
  get: function get() {
    return _blog.default;
  }
});
Object.defineProperty(exports, "Category", {
  enumerable: true,
  get: function get() {
    return _category.default;
  }
});
Object.defineProperty(exports, "Post", {
  enumerable: true,
  get: function get() {
    return _post.default;
  }
});
Object.defineProperty(exports, "User", {
  enumerable: true,
  get: function get() {
    return _user.default;
  }
});

var _blog = _interopRequireDefault(require("./blog.schema"));

var _category = _interopRequireDefault(require("./category.schema"));

var _post = _interopRequireDefault(require("./post.schema"));

var _user = _interopRequireDefault(require("./user.schema"));