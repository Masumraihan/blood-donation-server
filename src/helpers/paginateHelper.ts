import { TPaginationOptions } from "../types/paginate";

type TPaginateReturn = {
  limit: number;
  page: number;
  skip: number;
  sortBy: string;
  sortOrder: string;
};

const calculatePaginate = (options: TPaginationOptions): TPaginateReturn => {
  const limit = Number(options.limit) || 10;
  const page = Number(options.page) || 1;
  const skip = (page - 1) * limit;
  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";
  return {
    limit,
    page,
    skip,
    sortBy,
    sortOrder,
  };
};
export const PaginateHelpers = {
  calculatePaginate,
};
