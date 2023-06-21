import { Router } from 'express'
import { createPostController } from '../controllers/post.controller'
import verifyTokenIsValidMiddleware from '../middlewares/verifyTokenIsValidMiddleware'

const postRouter = Router()

postRouter.post('', verifyTokenIsValidMiddleware,createPostController)

export default postRouter