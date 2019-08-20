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
var OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 128
  },
  firstname: {
    type: String,
    required: true,
    max: 128
  },
  validationCode: {
    type: String,
    required: true,
    max: 200
  },
  amount: {
    type: Number,
    required: true,
    max: 40
  },
  museumId: {
    type: Schema.Types.ObjectId,
    ref: 'Museum',
    required: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  published_at: {
    type: Date,
    required: false
  },
  deleted_at: {
    type: Date,
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

OrderSchema.methods.slugify = function () {
  this.slug = (0, _slug.default)(this.name + this.firstname + this.validationCode);
};

OrderSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify();
  }

  return next();
});
OrderSchema.virtual('id').get(function () {
  return this._id;
});
OrderSchema.virtual('museum', {
  ref: 'Museum',
  localField: 'museumId',
  foreignField: '_id',
  justOne: true
});
OrderSchema.plugin(_mongoosePaginate.default);

var _default = _mongoose.default.model('Order', OrderSchema);

exports.default = _default;