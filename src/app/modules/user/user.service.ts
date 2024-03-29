import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createUserIntoDb = async (payload: Partial<User>) => {
  console.log({ payload });
  return null;
};

export const UserServices = { createUserIntoDb };
