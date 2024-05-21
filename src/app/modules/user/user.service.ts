import { Prisma, User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { userSearchableField } from "./user.constant";
import { TUserFilter } from "./user.interface";
import { TPaginationOptions } from "../../../types/paginate";
import { PaginateHelpers } from "../../../helpers/paginateHelper";
import { JwtPayload } from "jsonwebtoken";
import { UserRole } from "../../../../prisma/generated/client";

const getAllUsersFromDb = async (query: TUserFilter, paginateOptions: TPaginationOptions) => {
  const andConditions: Prisma.UserWhereInput[] = [];
  const { searchTerm, ...filterQuery } = query;

  const { limit, page, skip, sortBy, sortOrder } =
    PaginateHelpers.calculatePaginate(paginateOptions);

  if (searchTerm) {
    andConditions.push({
      OR: userSearchableField.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterQuery).length) {
    andConditions.push({
      AND: Object.keys(filterQuery).map((field) => {
        let query = (filterQuery as any)[field];
        if (field === "availability") {
          query = filterQuery[field] === "true" ? true : false;
        }
        return {
          [field]: {
            equals: query,
          },
        };
      }),
    });
  }

  const whereCondition: Prisma.UserWhereInput = { AND: andConditions };
  const sortConditions =
    sortBy === "name"
      ? { [sortBy]: sortOrder as Prisma.SortOrder }
      : { userProfile: { [sortBy]: sortOrder } };

  const result = await prisma.user.findMany({
    where: { ...whereCondition },
    skip,
    take: limit,
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      bloodType: true,
      location: true,
      availability: true,
      role: true,
      createdAt: true,
      updateAt: true,
      userProfile: true,
    },
    orderBy: sortConditions,
  });

  const total = await prisma.user.count({
    where: { ...whereCondition },
  });

  return { result, total, limit, page };
};
const getSingleUserFromDb = async (id: string) => {
  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      bloodType: true,
      location: true,
      availability: true,
      role: true,
      createdAt: true,
      updateAt: true,
      userProfile: true,
    },
  });
  return result;
};

const getAllDonorFromDb = async (query: TUserFilter, paginateOptions: TPaginationOptions) => {
  const andConditions: Prisma.UserWhereInput[] = [];
  const { searchTerm, ...filterQuery } = query;

  const { limit, page, skip, sortBy, sortOrder } =
    PaginateHelpers.calculatePaginate(paginateOptions);

  if (searchTerm) {
    andConditions.push({
      OR: userSearchableField.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterQuery).length) {
    andConditions.push({
      AND: Object.keys(filterQuery).map((field) => {
        let query = (filterQuery as any)[field];
        if (field === "availability") {
          query = filterQuery[field] === "true" ? true : false;
        }
        return {
          [field]: {
            equals: query,
          },
        };
      }),
    });
  }

  const whereCondition: Prisma.UserWhereInput = { AND: andConditions };
  const sortConditions =
    sortBy === "name"
      ? { [sortBy]: sortOrder as Prisma.SortOrder }
      : { userProfile: { [sortBy]: sortOrder } };

  const result = await prisma.user.findMany({
    where: { ...whereCondition, role: UserRole.DONOR },
    skip,
    take: limit,
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      bloodType: true,
      location: true,
      availability: true,
      role: true,
      createdAt: true,
      updateAt: true,
      userProfile: true,
    },
    orderBy: sortConditions,
  });

  const total = await prisma.user.count({
    where: { ...whereCondition, role: UserRole.DONOR },
  });

  return { result, total, limit, page };
};

const getSingleDonorFromDb = async (id: string) => {
  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id,
      role: UserRole.DONOR,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      bloodType: true,
      location: true,
      availability: true,
      role: true,
      createdAt: true,
      updateAt: true,
      userProfile: true,
    },
  });
  return result;
};

const getTestimonialsFromDb = async () => {

  console.log("here");

  const result = await prisma.user.findMany({
    where: {
      OR: [
        {
          isDonate: true,
        },
        {
          isRequest: true,
        },
      ],
    },
    select: {
      id: true,
      name: true,
      email: true,
      bloodType: true,
      location: true,
    },
  });
  console.log({result});
  return result;
};

const getMyProfileFromDb = async (user: JwtPayload) => {
  const { password, ...userData } = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
    include: { userProfile: true },
  });
  return userData;
};

const updateMyProfileIntoDb = async (payload: Partial<User>, user: JwtPayload) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  const result = await prisma.userProfile.update({
    where: {
      userId: userData.id,
    },
    data: payload,
    select: {
      id: true,
      userId: true,
      bio: true,
      age: true,
      lastDonationDate: true,
      createdAt: true,
      updateAt: true,
    },
  });
  return result;
};

export const UserServices = {
  getAllUsersFromDb,
  getMyProfileFromDb,
  updateMyProfileIntoDb,
  getSingleUserFromDb,
  getAllDonorFromDb,
  getSingleDonorFromDb,
  getTestimonialsFromDb,
};
