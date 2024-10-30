/*
  Warnings:

  - You are about to drop the column `author_id` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `_CommentsToPosts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CommentsToUsers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userid]` on the table `Comments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postid` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorid` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_author_id_fkey";

-- DropForeignKey
ALTER TABLE "_CommentsToPosts" DROP CONSTRAINT "_CommentsToPosts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommentsToPosts" DROP CONSTRAINT "_CommentsToPosts_B_fkey";

-- DropForeignKey
ALTER TABLE "_CommentsToUsers" DROP CONSTRAINT "_CommentsToUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommentsToUsers" DROP CONSTRAINT "_CommentsToUsers_B_fkey";

-- DropIndex
DROP INDEX "Users_user_name_key";

-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "postid" TEXT NOT NULL,
ADD COLUMN     "userid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "author_id",
ADD COLUMN     "authorid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "user_name",
ADD COLUMN     "username" VARCHAR(50);

-- DropTable
DROP TABLE "_CommentsToPosts";

-- DropTable
DROP TABLE "_CommentsToUsers";

-- CreateIndex
CREATE UNIQUE INDEX "Comments_userid_key" ON "Comments"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userid_fkey" FOREIGN KEY ("userid") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postid_fkey" FOREIGN KEY ("postid") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
