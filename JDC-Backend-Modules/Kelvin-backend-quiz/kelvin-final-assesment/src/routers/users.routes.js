import express from 'express';
import { userController } from '../controllers/users.controller.js';
import { authentication } from '../middlewares/authentication.js';
import { userAuthorization } from '../middlewares/authorization.js'; 

const userRouter = express.Router();

userRouter.post('/register', userController.registerUser)
userRouter.post('/login', userController.loginUser)
userRouter.get('/', userController.getUser)
userRouter.get('/:id', userController.findUser)
userRouter.put('/:id', authentication, userAuthorization, userController.updateUser)
userRouter.delete('/:id', authentication, userAuthorization, userController.deleteUser)

export default userRouter