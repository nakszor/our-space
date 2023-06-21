import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Post } from "../../entities/post.entities"
import { IPostsResponse } from "../../interfaces/post.interfaces"
import { returnMultiplePostSchema } from "../../schemas/post.schemas"

const listPostsService = async (): Promise<IPostsResponse> => {

    const postRepository: Repository<Post> = AppDataSource.getRepository(Post)

    const posts = await postRepository.find({
        relations:{
            user:true
        }
    })

    const parsedposts = returnMultiplePostSchema.parse(posts)

    return parsedposts

}

export default listPostsService