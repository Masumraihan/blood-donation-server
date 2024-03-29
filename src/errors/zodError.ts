import { TErrorResponse, TIssue } from "../types/error";

const zodError = (error: any): TErrorResponse => {
  const issues = error.issues.map((issue: any) => ({
    field: issue.path[issue.path.length - 1] || "unknown",
    message: issue.message,
  }));

  return {
    statusCode: 400,
    message: "validation error",
    errorDetails: {
      issues,
    },
  };
};

export default zodError;
