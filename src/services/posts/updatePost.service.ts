import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Post } from "../../entities/post.entities"
import { IPostReturn, IPostUpdate } from "../../interfaces/post.interfaces"
import { returnPostSchema } from "../../schemas/post.schemas"

const updatePostService = async (newPostData: IPostUpdate, postId: string): Promise<IPostReturn> => {

    const postRepository: Repository<Post> = AppDataSource.getRepository(Post)

    const query = postRepository.createQueryBuilder()
    .update(Post)

    if (newPostData.title) {
     query.set({ title: newPostData.title })
    }

    if (newPostData.type) {
        query.set({ type: newPostData.type })
    }

    if (newPostData.content) {
        query.set({ content: newPostData.content })
    }
  
    query.where("id = :postId", { postId })

    await query.execute()
    
    const updatedPost = await postRepository.findOne({
       where:{
        id: postId
       },
       relations:{
        user: true
       }
    })

    if (!updatedPost) {
        throw new Error('Failed to update user')
    }

    const parsedPost = returnPostSchema.parse(updatedPost)
    
    return parsedPost
}
export default updatePostService