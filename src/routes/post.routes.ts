import { Router } from 'express'
import { createPostController, deletePostController, listPostsController, listUserPostsController, updatePostController } from '../controllers/post.controller'
import verifyTokenIsValidMiddleware from '../middlewares/verifyTokenIsValidMiddleware'
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware'
import { createPostSchema, updatePostSchema } from '../schemas/post.schemas'
import { verifyUserAuthorizationMiddleware } from '../middlewares/verifyUserAuthorizationMiddleware'

const postRouter = Router()

postRouter.post('', verifyTokenIsValidMiddleware,validateSchemaMiddleware(createPostSchema),createPostController)
postRouter.patch('/:id', validateSchemaMiddleware(updatePostSchema),verifyTokenIsValidMiddleware, verifyUserAuthorizationMiddleware,updatePostController)
postRouter.delete('/:id', verifyTokenIsValidMiddleware,verifyUserAuthorizationMiddleware,deletePostController)
postRouter.get('/:id', verifyTokenIsValidMiddleware,listUserPostsController)
postRouter.get('', verifyTokenIsValidMiddleware,listPostsController)

export default postRouter