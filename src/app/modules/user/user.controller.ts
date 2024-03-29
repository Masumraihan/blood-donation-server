import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.service";

const catchAsync = (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await UserServices.createUserIntoDb(req.body);
  return result;
});

export const UserController = {
  createUser,
};
