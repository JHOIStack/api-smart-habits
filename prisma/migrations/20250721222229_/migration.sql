-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('COMMON', 'SUPER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'COMMON';
