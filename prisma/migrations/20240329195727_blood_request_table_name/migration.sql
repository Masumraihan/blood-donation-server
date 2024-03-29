/*
  Warnings:

  - You are about to drop the `BloodRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BloodRequest" DROP CONSTRAINT "BloodRequest_donorId_fkey";

-- DropForeignKey
ALTER TABLE "BloodRequest" DROP CONSTRAINT "BloodRequest_requesterId_fkey";

-- DropTable
DROP TABLE "BloodRequest";

-- CreateTable
CREATE TABLE "bloodRequests" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "requesterId" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "dateOfDonation" TEXT NOT NULL,
    "hospitalName" TEXT NOT NULL,
    "hospitalAddress" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "requestStatus" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bloodRequests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bloodRequests" ADD CONSTRAINT "bloodRequests_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bloodRequests" ADD CONSTRAINT "bloodRequests_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
