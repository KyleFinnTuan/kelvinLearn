import express from "express";
import { bookController } from "../controllers/books.controller.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Javascript Developer Class')
})

router.get('/books?:limit', bookController.getBook)
router.get('/books/:id', bookController.findBook)

export default router;