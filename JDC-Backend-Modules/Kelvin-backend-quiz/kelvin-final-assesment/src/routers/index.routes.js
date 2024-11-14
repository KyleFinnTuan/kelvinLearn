import express from 'express'
const router = express.Router()
import userRouter from './users.routes.js'
import roleRouter from './roles.routes.js'
import profileRouter from './profiles.routes.js'
import { errorHandler } from '../middlewares/errorHandler.js'


router.get ('/', (req, res, next) => {
    res.send('Testing Successfully')
})

router.use('/users', userRouter)
router.use('/roles', roleRouter)
router.use('/profiles', profileRouter)

router.use(errorHandler)

export default router;