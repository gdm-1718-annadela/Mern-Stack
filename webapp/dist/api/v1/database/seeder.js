"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _faker = _interopRequireDefault(require("faker"));

var _utilities = require("../../../utilities");

var _schemas = require("./schemas");

/*
Import the external libraries:
- faker
*/

/*
Import the internal libraries:
- logger
- Blog
- Category
- Post
- User
*/
var Seeder = function Seeder() {
  var _this = this;

  (0, _classCallCheck2.default)(this, Seeder);
  (0, _defineProperty2.default)(this, "blogCreate",
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(title, description) {
      var blogDetail, blog, newblog;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              blogDetail = {
                title: title,
                description: description,
                categoryId: _this.getRandomCategory(),
                posts: _this.getRandomPosts()
              };
              blog = new _schemas.Blog(blogDetail);
              _context.prev = 2;
              _context.next = 5;
              return blog.save();

            case 5:
              newblog = _context.sent;

              _this.blogs.push(newblog);

              _utilities.logger.log({
                level: 'info',
                message: "Blog created with id: ".concat(newblog.id, "!")
              });

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a blog: ".concat(_context.t0, "!")
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "categoryCreate",
  /*#__PURE__*/
  function () {
    var _ref2 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(name, description) {
      var categoryDetail, category, newCategory;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              categoryDetail = {
                name: name,
                description: description
              };
              category = new _schemas.Category(categoryDetail);
              _context2.prev = 2;
              _context2.next = 5;
              return category.save();

            case 5:
              newCategory = _context2.sent;

              _this.categories.push(newCategory);

              _utilities.logger.log({
                level: 'info',
                message: "Category created with id: ".concat(newCategory.id, "!")
              });

              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a category: ".concat(_context2.t0, "!")
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 10]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "postCreate",
  /*#__PURE__*/
  function () {
    var _ref3 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(title, synopsis, body) {
      var postDetail, post, newPost;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              postDetail = {
                title: title,
                synopsis: synopsis,
                body: body,
                categoryId: _this.getRandomCategory()
              };
              post = new _schemas.Post(postDetail);
              _context3.prev = 2;
              _context3.next = 5;
              return post.save();

            case 5:
              newPost = _context3.sent;

              _this.posts.push(newPost);

              _utilities.logger.log({
                level: 'info',
                message: "Post created with id: ".concat(newPost.id, "!")
              });

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a post: ".concat(_context3.t0, "!")
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 10]]);
    }));

    return function (_x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "userCreate",
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(email, password) {
      var userDetail, user, newUser;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              userDetail = {
                email: email,
                localProvider: {
                  password: password
                }
              };
              user = new _schemas.User(userDetail);
              _context4.prev = 2;
              _context4.next = 5;
              return user.save();

            case 5:
              newUser = _context4.sent;

              _this.posts.push(newUser);

              _utilities.logger.log({
                level: 'info',
                message: "User created with id: ".concat(newUser.id, "!")
              });

              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](2);

              _utilities.logger.log({
                level: 'info',
                message: "An error occurred when creating a user: ".concat(_context4.t0, "!")
              });

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 10]]);
    }));

    return function (_x8, _x9) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2.default)(this, "createBlogs",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee5() {
              return _regenerator.default.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", _this.blogCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph()));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }))()]);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  (0, _defineProperty2.default)(this, "createCategories",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee11() {
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee7() {
              return _regenerator.default.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", _this.categoryCreate(_faker.default.lorem.word(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee8() {
              return _regenerator.default.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", _this.categoryCreate(_faker.default.lorem.word(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee9() {
              return _regenerator.default.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", _this.categoryCreate(_faker.default.lorem.word(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee10() {
              return _regenerator.default.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", _this.categoryCreate(_faker.default.lorem.word(), _faker.default.lorem.sentence()));

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }))()]);

          case 2:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
  (0, _defineProperty2.default)(this, "createPosts",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee19() {
    return _regenerator.default.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee12() {
              return _regenerator.default.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      return _context12.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee13() {
              return _regenerator.default.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      return _context13.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee14() {
              return _regenerator.default.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      return _context14.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee15() {
              return _regenerator.default.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      return _context15.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee16() {
              return _regenerator.default.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      return _context16.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee17() {
              return _regenerator.default.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      return _context17.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee18() {
              return _regenerator.default.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", _this.postCreate(_faker.default.lorem.sentence(), _faker.default.lorem.paragraph(), "<p>".concat(_faker.default.lorem.paragraphs(10, '</p></p>'), "</p>")));

                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }))()]);

          case 2:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  })));
  (0, _defineProperty2.default)(this, "createUsers",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee27() {
    return _regenerator.default.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            _context27.next = 2;
            return Promise.all([(0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee20() {
              return _regenerator.default.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      return _context20.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee21() {
              return _regenerator.default.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      return _context21.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee22() {
              return _regenerator.default.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      return _context22.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee23() {
              return _regenerator.default.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      return _context23.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee24() {
              return _regenerator.default.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      return _context24.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee25() {
              return _regenerator.default.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      return _context25.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25);
            }))(), (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee26() {
              return _regenerator.default.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      return _context26.abrupt("return", _this.userCreate(_faker.default.internet.email(), 'wicked4u'));

                    case 1:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26);
            }))()]);

          case 2:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27);
  })));
  (0, _defineProperty2.default)(this, "getRandomCategory", function () {
    var category = null;

    if (_this.categories && _this.categories.length > 0) {
      category = _this.categories[Math.round(Math.random() * (_this.categories.length - 1))];
    }

    return category;
  });
  (0, _defineProperty2.default)(this, "getRandomPosts", function () {
    var cPosts = null;

    if (_this.posts && _this.posts.length > 0) {
      var nPosts = Math.round(Math.random() * (_this.posts.length - 1));
      cPosts = _this.posts.slice(0, _this.posts.length);

      while (cPosts.length > nPosts) {
        cPosts.splice(Math.round(Math.random() * (_this.posts.length - 1)), 1);
      }
    }

    return cPosts;
  });
  (0, _defineProperty2.default)(this, "seed",
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee32() {
    return _regenerator.default.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _context32.next = 2;
            return _schemas.Category.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref29 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee28(count) {
                return _regenerator.default.wrap(function _callee28$(_context28) {
                  while (1) {
                    switch (_context28.prev = _context28.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context28.next = 3;
                          break;
                        }

                        _context28.next = 3;
                        return _this.createCategories();

                      case 3:
                        return _context28.abrupt("return", _schemas.Category.find().exec());

                      case 4:
                      case "end":
                        return _context28.stop();
                    }
                  }
                }, _callee28);
              }));

              return function (_x10) {
                return _ref29.apply(this, arguments);
              };
            }());

          case 2:
            _this.categories = _context32.sent;
            _context32.next = 5;
            return _schemas.Post.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref30 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee29(count) {
                return _regenerator.default.wrap(function _callee29$(_context29) {
                  while (1) {
                    switch (_context29.prev = _context29.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context29.next = 3;
                          break;
                        }

                        _context29.next = 3;
                        return _this.createPosts();

                      case 3:
                        return _context29.abrupt("return", _schemas.Post.find().exec());

                      case 4:
                      case "end":
                        return _context29.stop();
                    }
                  }
                }, _callee29);
              }));

              return function (_x11) {
                return _ref30.apply(this, arguments);
              };
            }());

          case 5:
            _this.posts = _context32.sent;
            _context32.next = 8;
            return _schemas.Blog.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref31 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee30(count) {
                return _regenerator.default.wrap(function _callee30$(_context30) {
                  while (1) {
                    switch (_context30.prev = _context30.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context30.next = 3;
                          break;
                        }

                        _context30.next = 3;
                        return _this.createBlogs();

                      case 3:
                        return _context30.abrupt("return", _schemas.Blog.find().exec());

                      case 4:
                      case "end":
                        return _context30.stop();
                    }
                  }
                }, _callee30);
              }));

              return function (_x12) {
                return _ref31.apply(this, arguments);
              };
            }());

          case 8:
            _this.blogs = _context32.sent;
            _context32.next = 11;
            return _schemas.User.estimatedDocumentCount().exec().then(
            /*#__PURE__*/
            function () {
              var _ref32 = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee31(count) {
                return _regenerator.default.wrap(function _callee31$(_context31) {
                  while (1) {
                    switch (_context31.prev = _context31.next) {
                      case 0:
                        if (!(count === 0)) {
                          _context31.next = 3;
                          break;
                        }

                        _context31.next = 3;
                        return _this.createUsers();

                      case 3:
                        return _context31.abrupt("return", _schemas.User.find().exec());

                      case 4:
                      case "end":
                        return _context31.stop();
                    }
                  }
                }, _callee31);
              }));

              return function (_x13) {
                return _ref32.apply(this, arguments);
              };
            }());

          case 11:
            _this.users = _context32.sent;

          case 12:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32);
  })));
  this.blogs = [];
  this.categories = [];
  this.posts = [];
  this.users = [];
};

var _default = Seeder;
exports.default = _default;