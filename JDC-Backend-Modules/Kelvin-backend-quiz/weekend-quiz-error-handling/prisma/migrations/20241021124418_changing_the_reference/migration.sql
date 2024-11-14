/*
  Warnings:

  - You are about to drop the `_PostsToUsers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author_id` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PostsToUsers" DROP CONSTRAINT "_PostsToUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostsToUsers" DROP CONSTRAINT "_PostsToUsers_B_fkey";

-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "author_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "_PostsToUsers";

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
