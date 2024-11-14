import express from 'express'

import { profileController } from '../controllers/profiles.controller.js'
import { authentication } from '../middlewares/authentication.js';
import { userAuthorization } from '../middlewares/authorization.js';

const profileRouter = express.Router();

profileRouter.post('/', authentication, profileController.addProfile)
profileRouter.get('/', profileController.getProfile)
profileRouter.get('/:id', profileController.findProfile)
profileRouter.put('/:id', authentication, userAuthorization, profileController.updateProfile)
profileRouter.delete('/:id', authentication, userAuthorization, profileController.deleteProfile)



export default profileRouter