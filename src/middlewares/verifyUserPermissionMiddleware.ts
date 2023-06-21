import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";

export const verifyUserPermissionMiddleware = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
 
  const searchedUserId = req.params.id

  const requestUserId = req.user.id

  if (searchedUserId !== requestUserId) {
    throw new AppError("Sorry, you do not have permission to access this resource.", 403);
  }

  return next();
};