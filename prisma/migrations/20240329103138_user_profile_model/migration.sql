/*
  Warnings:

  - You are about to drop the column `lastDanationDate` on the `userProfiles` table. All the data in the column will be lost.
  - Added the required column `lastDonationDate` to the `userProfiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userProfiles" DROP COLUMN "lastDanationDate",
ADD COLUMN     "lastDonationDate" TEXT NOT NULL;
