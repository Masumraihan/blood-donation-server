import { Prisma, RequestStatus, User } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import { UserProfile, UserRole, UserStatus } from "../../../../prisma/generated/client";
import { PaginateHelpers } from "../../../helpers/paginateHelper";
import prisma from "../../../shared/prisma";
import { TPaginationOptions } from "../../../types/paginate";
import { userSearchableField } from "./user.constant";
import { TUserFilter } from "./user.interface";

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
      status: true,
      isDonate: true,
      isRequest: true,
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
      status: true,
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
      status: true,
    },
    orderBy: sortConditions,
  });

  const total = await prisma.user.count({
    where: { ...whereCondition, role: UserRole.DONOR },
  });

  const meta = {
    limit,
    page,
    total,
  };

  return { result, meta };
};

const getSingleDonorFromDb = async (user: JwtPayload, id: string) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

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
      status: true,
      createdAt: true,
      updateAt: true,
      userProfile: true,
      requestedBloodRequests: true,
    },
  });

  if (result.requestedBloodRequests.length) {
    const myRequest = result.requestedBloodRequests.find(
      (request) =>
        request.donorId === userData.id && request.requestStatus === RequestStatus.APPROVED,
    );

    if (myRequest) {
      return {
        id: result.id,
        name: result.name,
        bloodType: result.bloodType,
        location: result.location,
        availability: result.availability,
        role: result.role,
        createdAt: result.createdAt,
        updateAt: result.updateAt,
        userProfile: result.userProfile,
        contactInfo: {
          email: result.email,
          phoneNumber: result.phoneNumber,
        },
      };
    } else {
      return {
        id: result.id,
        name: result.name,
        bloodType: result.bloodType,
        location: result.location,
        availability: result.availability,
        role: result.role,
        createdAt: result.createdAt,
        updateAt: result.updateAt,
        userProfile: result.userProfile,
      };
    }
  }

  return result;
};

const getTestimonialsFromDb = async () => {
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

const updateMyProfileIntoDb = async (payload: Partial<User & UserProfile>, user: JwtPayload) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id: user.id,
    },
  });

  const { age, photo, bio, lastDonationDate, ...userPayload } = payload;

  const profilePayload = {
    age,
    bio,
    lastDonationDate,
    photo,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    if (Object.values(profilePayload).length) {
      const profileData = await transactionClient.userProfile.update({
        where: {
          userId: userData.id,
        },
        data: profilePayload,
        select: {
          id: true,
          userId: true,
          bio: true,
          age: true,
          lastDonationDate: true,
          createdAt: true,
          updateAt: true,
          photo: true,
        },
      });
    }

    if (Object.keys(userPayload).length) {
      await transactionClient.user.update({
        where: {
          id: userData.id,
        },
        data: userPayload,
        select: {
          id: true,
          name: true,
          email: true,
          phoneNumber: true,
          bloodType: true,
          location: true,
          availability: true,
          status: true,
          role: true,
          createdAt: true,
          updateAt: true,
          userProfile: true,
        },
      });
    }

    const user = await transactionClient.user.findUniqueOrThrow({
      where: {
        id: userData.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        bloodType: true,
        location: true,
        availability: true,
        status: true,
        role: true,
        createdAt: true,
        updateAt: true,
        userProfile: true,
      },
    });

    return user;
  });
  return result;
};

const updateUserIntoDb = async (id: string, payload: { status: UserStatus; role: UserRole }) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      bloodType: true,
      location: true,
      availability: true,
      role: true,
      status: true,
      createdAt: true,
      updateAt: true,
    },
  });

  return result;
};

//  GET ALL LOCATION FROM DB
const getAllLocationFromDb = async () => {
  const result = await prisma.user.groupBy({
    by: ["location"],
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
  updateUserIntoDb,
  getAllLocationFromDb,
};
