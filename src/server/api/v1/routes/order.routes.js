/*
Import the internal libraries:
- OrderController
*/
import { OrderController } from '../controller';

// Create instance of OrderController otherwise you can't use it
const orderController = new OrderController();

const initializeEndpoints = (parentRouter, authService) => {
    /**
     * @swagger
     * /api/v1/order:
     *   get:
     *     tags:
     *       - Order
     *     description: Returns all order
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of order
     */
    parentRouter.get('/order', orderController.index);
    /**
     * @swagger
     * /api/v1/order/create:
     *   get:
     *     tags:
     *       - Order
     *     description: Returns specific viewmodel such as order
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Create post
     */
    parentRouter.get('/order/create/', orderController.create);
    /**
     * @swagger
     * /api/v1/order/{id}:
     *   get:
     *     tags:
     *       - Order
     *     description: Returns specific post
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Order id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Get post by id
     */
    parentRouter.get('/order/:id', orderController.show);
    /**
     * @swagger
     * /api/v1/order:
     *   post:
     *     tags:
     *       - Order
     *     description: Save post
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: post
     *         description: Order object
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Return saved post
     */
    parentRouter.post('/order', orderController.store);
    /**
     * @swagger
     * /api/v1/order/{id}/edit:
     *   get:
     *     tags:
     *       - Order
     *     description: Returns specific viewmodel such as post, order
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Order id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Edit order by id
     */
    parentRouter.get('/order/:id/edit', orderController.edit);
    /**
     * @swagger
     * /api/v1/order/{id}:
     *   put:
     *     tags:
     *       - Order
     *     description: Update specific post detail
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Order id
     *         in: path
     *         required: true
     *         type: string
     *       - name: nlog object
     *         description: order data
     *         in: body
     *         required: true
     *     responses:
     *       200:
     *         description: Update order
     */
    parentRouter.put('/order/:id', orderController.update);
    /**
     * @swagger
     * /api/v1/order/{id}:
     *   delete:
     *     tags:
     *       - Order
     *     description: Delete specific order
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         description: Order id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Delete order
     */
    parentRouter.delete('/order/:id', orderController.destroy);
};

export default initializeEndpoints;
