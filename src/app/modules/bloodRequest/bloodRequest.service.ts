import { JwtPayload } from "jsonwebtoken";
import prisma from "../../../shared/prisma";
import { BloodRequest, RequestStatus } from "@prisma/client";
import { UserRole } from "../../../../prisma/generated/client";
import ApiError from "../../../errors/ApiError";
import { StatusCodes } from "http-status-codes";

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
          status: true,
          createdAt: true,
          updateAt: true,
        },
      },
    },
  });
  const modifyResult = result.map(({ requester, ...data }) => {
    if (data.requestStatus === "APPROVED") {
      return { ...data, requester };
    } else {
      return {
        ...data,
        requester: {
          bloodType: requester.bloodType,
          name: requester.name,
        },
      };
    }
  });
  return modifyResult;
};

const updateBloodRequestStatusInfoDb = async (
  payload: {
    requestStatus: RequestStatus;
  },
  id: string,
  user: JwtPayload,
) => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  const bloodRequestData = await prisma.bloodRequest.findUniqueOrThrow({
    where: {
      id,
    },
  });

  if (user.id !== bloodRequestData.donorId) {
    throw new ApiError(StatusCodes.FORBIDDEN, "You are not authorized to perform this action");
  }

  const result = await prisma.bloodRequest.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const getMyRequestsFromDb = async (user: JwtPayload) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  const result = await prisma.bloodRequest.findMany({
    where: {
      requesterId: userData.id,
    },
    include: {
      donor: {
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

  const modifyResult = result.map(({ donor, ...data }) => {
    if (data.requestStatus === "APPROVED") {
      return { ...data, donor };
    } else {
      return {
        ...data,
        donor: {
          name: donor.name,
          availability: donor.availability,
          bloodType: donor.bloodType,
          id: donor.id,
        },
      };
    }
  });

  return modifyResult;
};

export const BloodRequestServices = {
  createBloodRequestIntoDb,
  getMyDonationsFromDb,
  updateBloodRequestStatusInfoDb,
  getMyRequestsFromDb,
};
