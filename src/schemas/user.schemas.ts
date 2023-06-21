import { z } from 'zod'
import AppError from '../errors/appError'

const createUserSchema = z.object({
    name: z.string().max(250),
    username: z.string().max(20),
    password: z.string().max(150)
});
const userLoginSchema = z.object({
  username: z.string().max(20),
  password: z.string().max(150)
})
const userLoginReturnSchema = z.object({
  user: userLoginSchema,
  token: z.string()
   
}) 
const userUpdateSchema = z.object({
    name: z.string().max(250).optional(),
    username: z.string().max(20).optional(),
    password: z.string().max(150).optional(),}).refine(obj => {
    if (!('name' in obj) && !('username' in obj) && !('password' in obj)) {
      throw new AppError('Pelo menos um dos campos "name", "username", ou "password" é necessário', 400);
    }
    return true;
});
  
const createdUserSchema = z.object({
    id: z.string(),
    name: z.string().max(250),
    username: z.string().max(20),
    password: z.string().max(150),
    createdAt: z.date()
});

const returnUserSchema = createdUserSchema.omit({password: true})
const returnMultipleUserSchema = returnUserSchema.array()

export {
    createUserSchema,
    returnUserSchema,
    userUpdateSchema,
    userLoginSchema,
    userLoginReturnSchema,
    returnMultipleUserSchema
}