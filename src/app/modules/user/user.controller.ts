import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.createUserIntoDb(req.body);
    return result;
  } catch (error) {
    next(next);
  }
};

export const UserController = {
  createUser,
};
