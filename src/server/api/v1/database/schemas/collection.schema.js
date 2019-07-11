import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import slug from 'slug';

const { Schema } = mongoose;

const CollectionSchema = new Schema(
    {
        name: { type: String, required: true, max: 128 },
        description: { type: String, required: true, max: 512 },
        slug: {
            type: String, lowercase: true, unique: true, required: true,
        },
        published_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
        parentCollectionId: { type: Schema.Types.ObjectId, ref: 'Museum', required: false },
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
    this.slug = slug(this.name);
};
CollectionSchema.pre('validate', function (next) {
    if (!this.slug) {
        this.slugify();
    }
    return next();
});

CollectionSchema.virtual('id').get(function () { return this._id; });
CollectionSchema.virtual('subCategories', {
    ref: 'Collection',
    localField: '_id',
    foreignField: 'parentCollectionId',
    justOne: false,
});

CollectionSchema.plugin(mongoosePaginate);
export default mongoose.model('Collection', CollectionSchema);
