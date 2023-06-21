import { z } from 'zod'
import AppError from '../errors/appError'
import { returnUserSchema, userLoginReturnSchema } from './user.schemas';

const createPostSchema = z.object({
    title: z.string(),
    type: z.string(),
    content: z.string()
});

const updatePostSchema = z.object({
    title: z.string().max(250).optional(),
    type: z.string().max(20).optional(),
    content: z.string().max(150).optional(),}).refine(obj => {
    if (!('title' in obj) && !('type' in obj) && !('content' in obj)) {
      throw new AppError('Pelo menos um dos campos "title", "type", ou "content" é necessário', 400);
    }
    return true;
});
  
const returnPostSchema = z.object({
    id: z.string(),
    title: z.string(),
    type: z.string(),
    content: z.string(),
    createdAt: z.date(),
    user: returnUserSchema,
});

const returnMultiplePostSchema = returnPostSchema.array()

export {
 createPostSchema,
 updatePostSchema,
 returnPostSchema,
 returnMultiplePostSchema
}