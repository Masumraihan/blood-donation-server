import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { UserServices } from "./user.service";
import { userFilterableFields } from "./user.constant";

const getAllUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, userFilterableFields);
  const paginateOptions = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const { result, limit, page, total } = await UserServices.getAllUsersFromDb(
    filter,
    paginateOptions,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Users fetched successfully",
    meta: { limit, page, total },
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const result = await UserServices.getSingleUserFromDb(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User retrieved successfully",
    data: result,
  });
});

const getAllDonor = catchAsync(async (req, res) => {
  const filter = pick(req.query, userFilterableFields);
  const paginateOptions = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await UserServices.getAllDonorFromDb(filter, paginateOptions);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Donors retrieved successfully",
    data: result,
  });
});

const getSingleDonor = catchAsync(async (req, res) => {
  const result = await UserServices.getSingleDonorFromDb(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "donor retrieved successfully",
    data: result,
  });
});

const getTestimonial = catchAsync(async (req, res) => {
  console.log({test:"test"});
  const result = await UserServices.getTestimonialsFromDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Testimonial added successfully",
    data: result,
  });
});

const getMyProfile = catchAsync(async (req, res) => {
  const result = await UserServices.getMyProfileFromDb(req.user);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Profile retrieved successfully",
    data: result,
  });
});

const updateMyProfile = catchAsync(async (req, res) => {
  const result = await UserServices.updateMyProfileIntoDb(req.body, req.user);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User profile updated successfully",
    data: result,
  });
});

export const UserController = {
  getAllUsers,
  getMyProfile,
  updateMyProfile,
  getSingleUser,
  getAllDonor,
  getSingleDonor,
  getTestimonial,
};
