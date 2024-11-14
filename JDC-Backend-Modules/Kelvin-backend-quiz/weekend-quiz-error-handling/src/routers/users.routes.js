import express from 'express';
import { userController } from '../controllers/users.controller.js';
const userRouter = express.Router();

userRouter.post ('/', userController.registerUser)
userRouter.get('/', userController.getAllUser)
userRouter.get('/:id', userController.findUser)
userRouter.get('/:id/posts',userController.findPost)

export default userRouter;