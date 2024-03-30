import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";
import { RequestStatus } from "@prisma/client";

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

const getMyDonationsFromDb = async (user: JwtPayload) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  const result = await prisma.bloodRequest.findMany({
    where: {
      donorId: userData.id,
    },
    include: {
      requester: true,
    },
  });
  return result;
};

const updateBloodRequestStatusInfoDb = async (
  payload: { requestStatus: RequestStatus },
  id: string,
) => {
  const result = await prisma.bloodRequest.update({
    where: {
      id,
    },
    data: {
      requestStatus: payload.requestStatus,
    },
  });
  return result;
};

export const BloodRequestServices = {
  createBloodRequestIntoDb,
  getMyDonationsFromDb,
  updateBloodRequestStatusInfoDb,
};
