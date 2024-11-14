/*
  Warnings:

  - You are about to drop the column `postid` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `userid` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `authorid` on the `Posts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Comments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `post_id` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_postid_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_userid_fkey";

-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_authorid_fkey";

-- DropIndex
DROP INDEX "Comments_userid_key";

-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "postid",
DROP COLUMN "userid",
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "authorid",
ADD COLUMN     "author_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Comments_user_id_key" ON "Comments"("user_id");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
