import express from 'express'
import { userController } from '../controllers/users.controller.js';
import { postController } from '../controllers/posts.controller.js';
import { commentController } from '../controllers/comments.controller.js';
import { errorHandler } from '../middlewares/errorHandler.js';

const router = express.Router();

router.get ('/', (req, res) => {
    res.send('Testing successfully')
})

router.post ('/users', userController.addUser)
router.get('/users', userController.getAllUser)
router.get('/users/:id', userController.findUser)
router.get('/users/:id/posts',userController.findPost)

router.post('/posts', postController.addPost)
router.get('/posts',postController.getAllPost)
router.get('/posts/:id',postController.findPost)
router.delete('/posts/:id', postController.removePost)
router.put('/posts/:id',postController.updatedPost)


router.post('/comments', commentController.addComment)
router.get('/comments', commentController.getAllComment)
router.get('/comments/:id', commentController.findComment)

router.use(errorHandler);
 
export default router;
