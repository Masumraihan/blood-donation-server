import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";

type TPayload = {
  donorId: string;
  phoneNumber: string;
  dateOfDonation: string;
  hospitalName: string;
  reason: string;
};

const createBloodRequestIntoDb = async (payload: TPayload, user: JwtPayload) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  const result = await prisma.bloodRequest.create({
    data: { ...payload, requesterId: userData.id },
    include: {
      donor: {
        select: {
          id: true,
          name: true,
          email: true,
          bloodType: true,
          location: true,
          availability: true,
          createdAt: true,
          updateAt: true,
          userProfile: true,
        },
      },
    },
  });
  return result;
};

const getAllBloodRequestsFromDb = async (query: Record<string, unknown>) => {


  

  const result = await prisma.bloodRequest.findMany();
  return result;
};

export const BloodRequestServices = { createBloodRequestIntoDb, getAllBloodRequestsFromDb };
