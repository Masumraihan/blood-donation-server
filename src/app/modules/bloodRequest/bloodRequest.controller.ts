import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import { BloodRequestServices } from "./bloodRequest.service";
import sendResponse from "../../../shared/sendResponse";

const createBloodRequest = catchAsync(async (req, res) => {
  const result = await BloodRequestServices.createBloodRequestIntoDb(req.body, req.user);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Blood request created successfully",
    data: result,
  });
});

const getAllBloodRequests = catchAsync(async (req, res) => {
  const result = await BloodRequestServices.getAllBloodRequestsFromDb(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Blood Requests fetched successfully",
    data: result,
  });
});

export const BloodRequestControllers = { createBloodRequest, getAllBloodRequests };
