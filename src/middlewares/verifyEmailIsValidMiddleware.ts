import { Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities/user.entities'
import  AppError  from '../errors/appError'

const verifyUserAlreadyExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

        const username = req.body.username

        if(username){
            const userAlreadyExists = await userRepository.findOne({
                where: {
                    username: req.body.username
                }
            })
        
            if(userAlreadyExists){
        
                throw new AppError('User already exists', 409)
            }
            return next()
        }
       
    return next()

}

export default verifyUserAlreadyExists