import { Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities/user.entities'
import  AppError  from '../errors/appError'

const verifyEmailAlreadyExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

        const email = req.body.email

        if(email){
            const emailAlreadyExists = await userRepository.findOne({
                where: {
                    email: req.body.email
                }
            })
        
            if(emailAlreadyExists){
        
                throw new AppError('Email already exists', 409)
            }
            return next()
        }
       

        return next()
   

}

export default verifyEmailAlreadyExists