import { Request, Response } from 'express'
import createPostService from "../services/posts/createPost.service"
import updatePostService from '../services/posts/updatePost.service'
import deletePostService from '../services/posts/deletePost.service'
import listPostsService from '../services/posts/listPosts.service'
import listUserPostsService from '../services/posts/listUsersPosts.service'

export const createPostController = async (req: Request, res: Response) => {

    const postData = req.body

    const userId = req.user.id

    const newPost = await createPostService(postData, userId)

    return res.status(201).json(newPost)

}

export const updatePostController = async (req: Request, res:Response) =>{
    
    const newPostData = req.body
    
    const postId = req.params.id
    
    const newPost = await updatePostService(newPostData,postId)
    
    return res.status(200).json(newPost)
}

export const deletePostController = async (req: Request, res:Response) =>{
    
    const postId = req.params.id
    
    await deletePostService(postId)
    
    return res.status(204).json()
}

export const listPostsController = async (req: Request, res:Response) =>{
   
    const posts = await listPostsService()

    return res.status(200).json(posts)
}
export const listUserPostsController = async (req: Request, res:Response) =>{
   
    const userId = req.params.id
    
    const posts = await listUserPostsService(userId)

    return res.status(200).json(posts)
}