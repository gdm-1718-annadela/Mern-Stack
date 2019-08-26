import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const CollectionSchema = new Schema(
    {
        title: { type: String, required: true, max: 128 },
        body: { type: String, required: true },
        artistName: { type: String, required: true },
        image:{ type: String, required: true},
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
        museumId: { type: Schema.Types.ObjectId, ref: 'Museum', required: true },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    },
);

CollectionSchema.methods.slugify = function () {
    this.slug = slug(this.title + this.test);
};

CollectionSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

CollectionSchema.virtual('id').get(function () { return this._id; });
CollectionSchema.virtual('museum', {
    ref: 'Museum',
    localField: 'museumId',
    foreignField: '_id',
    justOne: true,
});

CollectionSchema.plugin(mongoosePaginate);
export default mongoose.model('Collection', CollectionSchema);
