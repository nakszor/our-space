import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";

export const verifyUserAuthorizationMiddleware = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
 
  const postId = req.params.id

  const requestUserId = req.user.id

  if (postId !== requestUserId) {
    throw new AppError("Sorry, you do not have permission to access this resource.", 403);
  }

  return next();
};