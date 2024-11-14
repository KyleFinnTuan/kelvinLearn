import express from 'express';
import { postController } from '../controllers/posts.controller.js';
const postRouter = express.Router();

postRouter.post('/', postController.addPost)
postRouter.get('/',postController.getPost)
postRouter.get('/:id',postController.findPost)
postRouter.delete('/:id', postController.removePost)
postRouter.put('/:id',postController.updatedPost)

export default postRouter;

