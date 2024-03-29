import prisma from "../../../shared/prisma";

const createUserIntoDb = async (payload: any) => {


  //const result = await prisma.user.create({
  //  data: payload,
  //});
  //return result;
};

export const UserServices = { createUserIntoDb };
