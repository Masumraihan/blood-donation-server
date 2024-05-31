-- AlterTable
ALTER TABLE "userProfiles" ALTER COLUMN "lastDonationDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "availability" SET DEFAULT true;
