"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

var _slug = _interopRequireDefault(require("slug"));

var Schema = _mongoose.default.Schema;
var CollectionSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 128
  },
  body: {
    type: String,
    required: true
  },
  artistName: {
    type: String,
    required: false
  },
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  published_at: {
    type: Date,
    required: false
  },
  deleted_at: {
    type: Date,
    required: false
  },
  museumId: {
    type: Schema.Types.ObjectId,
    ref: 'Museum',
    required: false
  }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

CollectionSchema.methods.slugify = function () {
  this.slug = (0, _slug.default)(this.title + this.artistName);
};

CollectionSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }

  return next();
});
CollectionSchema.virtual('id').get(function () {
  return this._id;
});
CollectionSchema.virtual('museum', {
  ref: 'Museum',
  localField: 'museumId',
  foreignField: '_id',
  justOne: true
});
CollectionSchema.plugin(_mongoosePaginate.default);

var _default = _mongoose.default.model('Collection', CollectionSchema);

exports.default = _default;