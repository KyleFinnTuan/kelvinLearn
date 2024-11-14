import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PostController {
  addPost = async (req, res, next) => {
    try {
      const { title, content, author_id } = req.body;

      const newPost = await prisma.posts.create({
        data: {
          title,
          content,
          author_id: author_id,
        },
      });
      res.status(201).send(newPost);
    } catch (error) {
      next(error);
    }
  };

  findPost = async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await prisma.posts.findUniqueOrThrow({
        where: { id: id },
        include: {
          author: true,
          comments: {
            orderBy: {
              created_at: 'desc',
            },
          },
        },
      });

      res.status(200).send(post);
    } catch (error) {
      next(error);
    }
  };

  getPost = async (req, res, next) => {
    try {
      const posts = await prisma.posts.findMany({});
      res.status(200).send(posts);
    } catch (error) {
      next(error);
    }
  };

  removePost = async (req, res, next) => {
    try {
      const { id } = req.params;

      const postFound = await prisma.posts.findUniqueOrThrow({
        where: { id: id },
      });

      if (!postFound) throw { name: 'IdNotFound', message: 'No Posts found' };

      const deletedPosts = await prisma.posts.delete({
        where: { id: id },
      });
      res.send(deletedPosts);
    } catch (error) {
      next(error);
    }
  };

  updatedPost = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;

      const postsFound = await prisma.posts.findUniqueOrThrow({
        where: { id: id },
      });

      if (!postsFound) throw { name: 'IdNotFound', message: 'No Posts found' };

      const updatedPost = await prisma.posts.update({
        where: { id:id },
        data: {
          title,
          content,
        },
      });

      res.status(200).send(updatedPost);
    } catch (error) {
      next(error);
    }
  };
}

export const postController = new PostController();

