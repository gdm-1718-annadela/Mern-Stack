/*
Import the external libraries:
- express
*/
import express from 'express';

/*
Import the internal libraries:
- blog.routes.js
- category.routes.js
- post.routes.js
*/
import AuthService from '../service';
import authRouter from './auth.routes';
import blogRouter from './blog.routes';
import categoryRouter from './category.routes';
import postRouter from './post.routes';
import userRouter from './user.routes';
import museumRouter from './museum.routes';
import orderRouter from './order.routes';
import collectionRouter from './collection.routes';

// Initialize the AuthService
const authService = new AuthService();

// Define and initiate an express router
const apiV1Router = express.Router();
authRouter(apiV1Router, authService);
blogRouter(apiV1Router, authService);
categoryRouter(apiV1Router, authService);
postRouter(apiV1Router, authService);
userRouter(apiV1Router, authService);
museumRouter(apiV1Router, authService);
orderRouter(apiV1Router, authService);
collectionRouter(apiV1Router, authService);

export default apiV1Router;
