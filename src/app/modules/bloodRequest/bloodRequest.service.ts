import { BloodRequest } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";

const createBloodRequestIntoDb = async (payload: BloodRequest, user: JwtPayload) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  const result = await prisma.bloodRequest.create({
    data: payload,
  });
return result;
};

export const BloodRequestServices = { createBloodRequestIntoDb };
