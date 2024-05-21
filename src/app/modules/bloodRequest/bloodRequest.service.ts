import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";
import { BloodRequest, RequestStatus } from "@prisma/client";
import { UserRole } from "../../../../prisma/generated/client";

type TPayload = {
  donorId: string;
  phoneNumber: string;
  dateOfDonation: string;
  hospitalName: string;
  hospitalAddress: string;
  reason: string;
};

const createBloodRequestIntoDb = async (payload: TPayload, user: JwtPayload) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  await prisma.user.findUniqueOrThrow({
    where: {
      id: payload.donorId,
      role: UserRole.DONOR,
    },
  });

  const result = await prisma.$transaction(async (transactionClient) => {
    if (userData.isRequest === false) {
      await transactionClient.user.update({
        where: {
          id: user.id,
        },
        data: {
          isRequest: true,
        },
      });
    }

    const data = await transactionClient.bloodRequest.create({
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
    return data;
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
      requester: {
        select: {
          id: true,
          name: true,
          email: true,
          location: true,
          bloodType: true,
          availability: true,
        },
      },
    },
  });
  const modifyResult = result.map(({ requester, ...data }) => {
    if (data.requestStatus === RequestStatus.APPROVED) {
      return { ...data, requester };
    } else {
      return { ...data };
    }
  });
  return modifyResult;
};

const updateBloodRequestStatusInfoDb = async (payload: Partial<BloodRequest>, id: string) => {
  const result = await prisma.bloodRequest.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const BloodRequestServices = {
  createBloodRequestIntoDb,
  getMyDonationsFromDb,
  updateBloodRequestStatusInfoDb,
};
