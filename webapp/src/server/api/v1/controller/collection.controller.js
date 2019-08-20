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
            const { limit, skip } = req.query;
            let collections = null;
            if (limit && skip) {
                const options = {
                    page: parseInt(skip, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    populate: 'museum',
                    sort: { created_at: -1 },
                };
                collections = await Collection.paginate({}, options);
            } else {
                collections = await Collection.find().populate('museum').sort({ created_at: -1 }).exec();
            }

            if (collections === undefined || collections === null) {
                throw new APIError(404, 'Collection for collections not found!');
            }
            return res.status(200).json(collections);
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occurred while retrieving collections', next);
        }
    };

    // Show specific model by id
    show = async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await Collection.findById(id).populate('museum').exec();
            if (item === undefined || item === null) {
                throw new APIError(404, `Collection with id: ${id} not found!`);
            }
            return res.status(200).json(item);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while retrieving collections', next);
        }
    }

    // ViewModel for Insert / Create
    create = (req, res) => {
        const vm = {
            musea: [],
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = async (req, res, next) => {
        try {
            const collectionCreate = new Collection({
                title: req.body.title,
                body: req.body.body,
                artistName: req.body.artistName,
                museumId: req.body.museumId,
            });
            const collection = await collectionCreate.save();
            return res.status(201).json(collection);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || 'Some error occurred while saving the Collection!', next);
        }
    }

    // ViewModel for Edit / Update
    edit = async (req, res, next) => {
        const { id } = req.params;

        try {
            const collection = await Collection.findById(id).exec();

            if (!collection) {
                throw new APIError(404, `Collection with id: ${id} not found!`);
            } else {
                const vm = {
                    collection,
                    musea: [],
                };
                return res.status(200).json(vm);
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Collection with id: ${id}!`, next);
        }
    }

    // Update the model
    update = async (req, res, next) => {
        const { id } = req.params;

        try {
            const collectionUpdate = req.body;
            const collection = await Collection.findOneAndUpdate({ _id: id }, collectionUpdate, { new: true }).exec();

            if (!collection) {
                throw new APIError(404, `Collection with id: ${id} not found!`);
            }
            return res.status(200).json(collection);
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Collection with id: ${id}!`, next);
        }
    }

    // Delete / Destroy the model
    destroy = async (req, res, next) => {
        const { id } = req.params;

        try {
            let collection = null;

            let { mode } = req.query;
            if (mode) {
                collection = await Collection.findByIdAndUpdate({ _id: id }, { deleted_at: (mode === 'softdelete' ? Date.now() : null) }, { new: true });
            } else {
                mode = 'delete';
                collection = await Collection.findOneAndRemove({ _id: id });
            }

            if (!collection) {
                throw new APIError(404, `Collection with id: ${id} not found!`);
            } else {
                return res.status(200).json({ message: `Successful deleted the Collection with id: ${id}!`, collection, mode });
            }
        } catch (err) {
            return handleAPIError(err.status || 500, err.message || `Some error occurred while deleting the Collection with id: ${id}!`, next);
        }
    }
}

export default CollectionController;
