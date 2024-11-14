/*
  Warnings:

  - Made the column `name` on table `Roles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Roles" ALTER COLUMN "name" SET NOT NULL;
