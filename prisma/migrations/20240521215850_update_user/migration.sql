-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isDonate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isRequest" BOOLEAN NOT NULL DEFAULT false;
