import { User, UserProfile } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";

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
    throw new Error("Invalid email or password");
  }
};

export const AuthServices = { registerIntoDb, loginIntoDb };
