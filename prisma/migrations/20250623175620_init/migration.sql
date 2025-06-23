/*
  Warnings:

  - The `region` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `category` on the `Habit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `Interaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `profileType` on the `Profile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `UserHabit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Region" AS ENUM ('NORTE', 'CENTRO', 'SUR', 'OCCIDENTE', 'SURESTE', 'CDMX', 'INTERNACIONAL');

-- CreateEnum
CREATE TYPE "ProfileType" AS ENUM ('ECO_PRINCIPIANTE', 'ECO_AVANZADO', 'ECO_EXPERTO');

-- CreateEnum
CREATE TYPE "HabitCategory" AS ENUM ('ENERGIA', 'AGUA', 'RESIDUOS', 'MOVILIDAD', 'CONSUMO');

-- CreateEnum
CREATE TYPE "HabitStatus" AS ENUM ('ACTIVO', 'PAUSADO', 'COMPLETADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "InteractionType" AS ENUM ('CLICK', 'IGNORE', 'COMPLETE', 'SKIP');

-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "category",
ADD COLUMN     "category" "HabitCategory" NOT NULL;

-- AlterTable
ALTER TABLE "Interaction" DROP COLUMN "type",
ADD COLUMN     "type" "InteractionType" NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "profileType",
ADD COLUMN     "profileType" "ProfileType" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "region",
ADD COLUMN     "region" "Region";

-- AlterTable
ALTER TABLE "UserHabit" DROP COLUMN "status",
ADD COLUMN     "status" "HabitStatus" NOT NULL;
