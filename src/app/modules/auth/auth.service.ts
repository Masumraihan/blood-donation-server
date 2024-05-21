import { User, UserProfile } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import { StatusCodes } from "http-status-codes";
import jwt, { Secret } from "jsonwebtoken";
import config from "../../../config";

const registerIntoDb = async (payload: User & UserProfile) => {
  const password = payload.password;

  const hashedPass = await bcrypt.hash(password, 10);

  const result = await prisma.$transaction(async (transactionClient) => {
    const { password, ...userData } = await transactionClient.user.create({
      data: {
        password: hashedPass,
        name: payload.name,
        email: payload.email,
        bloodType: payload.bloodType,
        location: payload.location,
      },
    });

    const userProfileData = await transactionClient.userProfile.create({
      data: {
        age: payload.age,
        bio: payload.bio,
        lastDonationDate: payload.lastDonationDate,
        userId: userData.id,
      },
    });
    return { ...userData, userProfile: userProfileData };
  });
  return result;
};

const loginIntoDb = async ({ email, password }: { email: string; password: string }) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
  });

  const isMatch = await bcrypt.compare(password, userData.password);

  if (!isMatch) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Password is incorrect");
  }

  const accessToken = jwt.sign(
    { email: userData.email, id: userData.id, role: userData.role }, 
    config.accessTokenSecret as Secret,
    {
      expiresIn: config.accessTokenExpiresOn as string,
    },
  );

  return { id: userData.id, name: userData.name, email: userData.email, token: accessToken };
};

export const AuthServices = { registerIntoDb, loginIntoDb };
