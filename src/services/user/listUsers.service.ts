import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entities"
import { IUserResponse } from "../../interfaces/user.interfaces"
import { returnMultipleUserSchema } from "../../schemas/user.schemas"

const listUsersService = async (): Promise<IUserResponse[]> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const returnUsers = returnMultipleUserSchema.parse(users)

    return returnUsers

}

export default listUsersService