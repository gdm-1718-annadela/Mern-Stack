import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const OrderSchema = new Schema(
    {
        name: { type: String, required: true, max: 128 },
        firstname: { type: String, required: true, max: 128 },
        validationCode: { type: String, required: true, max: 200 },
        amount: { type: Number, required: true, max: 40 },
        museumId: { type: Schema.Types.ObjectId, ref: 'Museum', required: true },
        slug: {
            type: String, unique: true, lowercase: true, required: true,
        },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

OrderSchema.methods.slugify = function () {
    this.slug = slug(this.name + this.firstname + this.validationCode);
};

OrderSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

OrderSchema.virtual('id').get(function () { return this._id; });
OrderSchema.virtual('museum', {
    ref: 'Museum',
    localField: 'museumId',
    foreignField: '_id',
    justOne: true,
});


OrderSchema.plugin(mongoosePaginate);
export default mongoose.model('Order', OrderSchema);
