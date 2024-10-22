import { pool } from "../config/postgres.js";

class UserController {
  getUsers = async (req, res) => {
    try {
      const { id } = req.params;

      const userFound = await pool.query(
        `SELECT u.username, oi.order_id, pr.product_name,  pr.price, oi.quantity
        FROM "Users" AS u
        JOIN "Orders" AS o ON u.user_id = o.user_id
        JOIN "Order_Items" AS oi on oi.order_id = o.order_id
        JOIN "Products" AS pr on pr.product_id = oi.product_id WHERE u.user_id = ${id}`
      );
      res.status(200).send(userFound.rows);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  };

  addOrder 
}

export const userController = new UserController();
