// import {} from "../Utils/consts.js";
import axios from 'axios';

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
      if (!bookFound) throw new Error('Book not found');
      
      res.send(bookFound);
    } catch (error) {
      res.send(error);
    }
  };
}

export const bookController = new BookController();
