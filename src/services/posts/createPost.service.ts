import { IUser, IUserResponse } from '../../interfaces/user.interfaces'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entities'
import { Repository } from 'typeorm'
import { returnUserSchema } from '../../schemas/user.schemas'
import { Post } from '../../entities/post.entities'
import { returnPostSchema } from '../../schemas/post.schemas'
import { IPost, IPostReturn } from '../../interfaces/post.interfaces'

const createPostService = async (postData: IPost, userId:string): Promise<IPostReturn> => {

    const postRepository: Repository<Post> = AppDataSource.getRepository(Post)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where:{
            id: userId
        }
    })

    const post = postRepository.create({
        ...postData,
        user: user!
    })

    const newPost = await postRepository.save(post)
    
    const parsedPost = returnPostSchema.parse(newPost)

    return parsedPost

}

export default createPostService