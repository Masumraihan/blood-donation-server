import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { userSearchableField } from "./user.constant";
import { TUserFilter } from "./user.interface";
import { TPaginationOptions } from "../../../types/paginate";
import { PaginateHelpers } from "../../../helpers/paginateHelper";
import { JwtPayload } from "jsonwebtoken";

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
          query = Boolean(filterQuery[field]);
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

  const result = await prisma.user.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
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
  });

  const total = await prisma.user.count();

  return { result, total, limit, page };
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

export const UserServices = {
  getAllUsersFromDb,
  getMyProfileFromDb,
};
