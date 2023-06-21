import { Router } from 'express'
import userRouter from './user.routes'
import sessionRouter from './session.routes'
import postRouter from './post.routes'

const router = Router()

router.use('/users', userRouter)
router.use('/login', sessionRouter)
router.use('/posts', postRouter)

export default router
