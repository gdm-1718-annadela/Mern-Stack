"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = require("../controller");

/*
Import the internal libraries:
- CollectionController
*/
// Create instance of CollectionController otherwise you can't use it
var collectionController = new _controller.CollectionController();

var initializeEndpoints = function initializeEndpoints(parentRouter, authService) {
  /**
   * @swagger
   * /api/v1/collections:
   *   get:
   *     tags:
   *       - Collections
   *     description: Returns all collections
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: An array of collections
   */
  parentRouter.get('/collections', collectionController.index);
  /**
   * @swagger
   * /api/v1/collections/create:
   *   get:
   *     tags:
   *       - Collection
   *     description: Returns specific viewmodel such as categories
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Create collection
   */

  parentRouter.get('/collections/create/', collectionController.create);
  /**
   * @swagger
   * /api/v1/collections/{id}:
   *   get:
   *     tags:
   *       - Collection
   *     description: Returns specific collection
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Collection id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Get collection by id
   */

  parentRouter.get('/collections/:id', collectionController.show);
  /**
   * @swagger
   * /api/v1/collections:
   *   collection:
   *     tags:
   *       - collection
   *     description: Save collection
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: collection
   *         description: collection object
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Return saved collection
   */

  parentRouter.post('/collections', collectionController.store);
  /**
   * @swagger
   * /api/v1/collections/{id}/edit:
   *   get:
   *     tags:
   *       - collection
   *     description: Returns specific viewmodel such as collection, categories
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: collection id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Edit collection by id
   */

  parentRouter.get('/collections/:id/edit', collectionController.edit);
  /**
   * @swagger
   * /api/v1/collections/{id}:
   *   put:
   *     tags:
   *       - collection
   *     description: Update specific collection detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: collection id
   *         in: path
   *         required: true
   *         type: string
   *       - name: collection object
   *         description: collection data
   *         in: body
   *         required: true
   *     responses:
   *       200:
   *         description: Update collection
   */

  parentRouter.put('/collections/:id', collectionController.update);
  /**
   * @swagger
   * /api/v1/collections/{id}:
   *   delete:
   *     tags:
   *       - collection
   *     description: Delete specific collection detail
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: collection id
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Delete collection
   */

  parentRouter.delete('/collections/:id', collectionController.destroy);
};

var _default = initializeEndpoints;
exports.default = _default;