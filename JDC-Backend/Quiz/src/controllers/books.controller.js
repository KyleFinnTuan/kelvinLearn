// import {} from "../Utils/consts.js";
import axios from "axios";

class BookController {
  getBook = async (req, res) => {
    try {
      const { limit } = req.query;
      const response = await axios.get(`https://fakerapi.it/api/v2/books?_quantity=${limit}`);
      res.send(response.data.data);
    } catch (error) {
      res.send(error);
    }
  };

  findBook = async (req, res) => {
    try {
      const { id } = req.params;
      const { data: books } = await axios.get("https://fakerapi.it/api/v2/books");
      const bookFound = books.data.find((book) => book.id === +id);
      const fakePublisher = req.headers.steal;
      console.log(bookFound);

      if (!bookFound) throw { message: 'book not found', error: new Error("findBook Error") }

      res.status(200).send({
        id: bookFound.id,
        title: bookFound.title,
        author: bookFound.author,
        genre: bookFound.genre,
        description: bookFound.description,
        isbn: bookFound.isbn,
        image: bookFound.image,
        published: bookFound.published,
        publisher: fakePublisher,
      });
    } catch (error) {
      console.log(error.error);
      res.status(500).send(error);
    }
  };
}

export const bookController = new BookController();
