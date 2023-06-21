import { Request, Response } from 'express'
import createPostService from "../services/posts/createPost.service"

export const createPostController = async (req: Request, res: Response) => {

    const postData = req.body

    const userId = req.user.id

    const newPost = await createPostService(postData, userId)

    return res.status(201).json(newPost)

}