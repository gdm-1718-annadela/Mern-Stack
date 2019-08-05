import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const OrderSchema = new Schema(
    {
        name: { type: String, required: true, max: 128 },
        firsname: { type: String, required: true, max: 128 },
        validationCode: { type: String, required: true, max: 200 },
        sortRoute: { type: String, required: true, max: 100 },
        museumId: { type: Schema.Types.ObjectId, ref: 'Museum', required: true },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
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
    this.slug = slug(this.name);
};

OrderSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

OrderSchema.plugin(mongoosePaginate);
export default mongoose.model('Order', OrderSchema);
