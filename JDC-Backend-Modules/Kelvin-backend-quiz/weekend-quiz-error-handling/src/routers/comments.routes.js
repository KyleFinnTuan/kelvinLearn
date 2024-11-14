import express from 'express';
import { commentController } from '../controllers/comments.controller.js';
const commentRouter = express.Router();

commentRouter.post('/', commentController.addComment)
commentRouter.get('/', commentController.getAllComment)
commentRouter.get('/:id', commentController.findComment)

export default commentRouter;