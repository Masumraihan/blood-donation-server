import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BloodRequestServices } from "./bloodRequest.service";

const createBloodRequest = catchAsync(async (req, res) => {
  const result = await BloodRequestServices.createBloodRequestIntoDb(req.body, req.user);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: "Request successfully made",
    data: result,
  });
});

const getMyDonations = catchAsync(async (req, res) => {
  const result = await BloodRequestServices.getMyDonationsFromDb(req.user);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Donation requests retrieved successfully",
    data: result,
  });
});

const updateBloodRequestStatus = catchAsync(async (req, res) => {
  const result = await BloodRequestServices.updateBloodRequestStatusInfoDb(
    req.body,
    req.params.requestId,
  );
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Donation request status successfully updated",
    data: result,
  });
});

export const BloodRequestControllers = {
  createBloodRequest,
  getMyDonations,
  updateBloodRequestStatus,
};
