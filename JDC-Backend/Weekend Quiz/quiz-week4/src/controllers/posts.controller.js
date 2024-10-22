import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostController {
  addPost = async (req, res) => {
    try {
      const { title, content, author_id } = req.body;

      const newPost = await prisma.posts.create({
        data: {
          title,
          content,
          author_id,
        },
      });
      res.status(201).send(newPost);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };


getPost = async (req, res) => {
  
  try {
    const { id } = req.params;      

    const postFound = await prisma.posts.findUnique({
      where: { id },
      include: {
        author: true,
        comments: true,
      },
    });    

    res.status(20).send(postFound);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

getAllPost = async (req, res) => {
  try {
    const userShows = await prisma.posts.findMany({});

    res.status(200).send(userShows);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
  
  
};
removePost = async (req, res) => {
  try {
    const { id } = req.params;

    const postFound = await prisma.posts.findUnique({
      where: { id },
    });

    if (!postFound) res.status(404).send("Post Not Found");

    const deletedPosts = await prisma.posts.delete({
      where: { id },
    });
    res.send(deletedPosts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

updatedPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const postsFound = await prisma.posts.findUnique({
      where: { id }
    })

    if (!postsFound) return res.status(404).send('User not found');

    const updatedPost = await prisma.posts.update({
      where: { id },
      data: {
        title,
        content,
      }
    })

    res.status(200).send(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
}
}

export const postController = new PostController();
