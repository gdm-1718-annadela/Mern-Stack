/*
Import the external libraries:
- uuidv4
*/

/*
Import the internal libraries:
- * from database
- errorHandler
*/
import { Collection } from '../database';
import { APIError, handleAPIError } from '../../../utilities';

class CollectionController {
    // List all the models
    index = async (req, res, next) => {
        try {
            const collections = await Collection.find().populate('__collection').sort({ created_at: -1 }).exec();

            if (collections === undefined || collections === null) {
                throw new APIError(404, 'Collection for blogs not found!');
            }
            return res.status(200).json(collections);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving blogs', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Collection.findById(id).populate('__Collection').populate('__posts').exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Blog with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving blogs', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            collections: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const collectionCreate = new Collection({
                name: req.body.name,
                image: req.body.image,
                description: req.body.description,
            });
            const blog = await collectionCreate.save();
            return res.status(201).json(blog);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Blog!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const collection = await Collection.findById(id).exec();

            if (!collection) {
                throw new APIError(404, `Blog with id: ${id} not found!`);
            } else {
                const vm = {
                    collection,
                    collections: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Blog with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const collectionUpdate = req.body;
            const collection = await Collection.findOneAndUpdate({ _id: id }, collectionUpdate, { new: true }).exec();

            if (!collection) {
                throw new APIError(404, `collection with id: ${id} not found!`);
            }
            return res.status(200).json(collection);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Blog with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            const collection = await Collection.findOneAndRemove({ _id: id });

            if (!collection) {
                throw new APIError(404, `Blog with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Blog with id: ${id}!` });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Blog with id: ${id}!`, next);
        }
    }
}

export default CollectionController;
