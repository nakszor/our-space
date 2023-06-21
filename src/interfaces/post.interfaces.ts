import { z } from 'zod/lib'
import { DeepPartial } from 'typeorm'
import { createPostSchema, returnMultiplePostSchema, returnPostSchema } from '../schemas/post.schemas'

export type IPost = z.infer<typeof createPostSchema>
export type IPostReturn = z.infer<typeof returnPostSchema>
export type IPostUpdate = DeepPartial<IPost>
export type IPostsResponse = z.infer<typeof returnMultiplePostSchema>