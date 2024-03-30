import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { UserServices } from "./user.service";
import { userFilterableFields } from "./user.constant";

const getAllBloodRequests = catchAsync(async (req, res) => {
  const filter = pick(req.query, userFilterableFields);
  const paginateOptions = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const { result, limit, page, total } = await UserServices.getAllUsersFromDb(
    filter,
    paginateOptions,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blood Requests fetched successfully",
    meta: { limit, page, total },
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
  getAllBloodRequests,
  getMyProfile,
  updateMyProfile,
};
