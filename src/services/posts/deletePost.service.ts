import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Post } from "../../entities/post.entities"

const deletePostService = async (postId: string): Promise<void> => {

    const postRepository: Repository<Post> = AppDataSource.getRepository(Post)

    const post = await postRepository.findOne({
        where: {
            id: postId
        }
    })

    await postRepository.remove(post!)

}

export default deletePostService