import { pool } from "../config/postgres.js";

class ProductController {
  addProduct = async (req, res) => {
    try {
      console.log(req.body);

      const { productName, price } = req.body;

      await pool.query(`INSERT INTO "Products" (product_name, price) VALUES ($1, $2)`,[productName, price]);

      res.status(201).send({
        message: "product added",
        product: req.body,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Internal Server Error');
    }
  };

  updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const { productName, price } = req.body;

      const response = await pool.query(
        `SELECT * FROM "Products" WHERE product_id = ${id}`
      );
      const productFound = response.rows[0];

      if (!productFound) throw new Error("Product Not Found");

      let query = `UPDATE "Products" SET `;

      if (productName) query += `product_name = '${productName}',`;
      if (price) query += `price = '${price}',`;

      if (query.at(-1) === ",") query = query.substring(0, query.length - 1);

      query += `WHERE product_id = '${id}'`;

      await pool.query(query);

console.log(query);


      res.status(200).send({
        message: "product Updated",
        product: req.body,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Internal Server Error');
    }
  };

  removeProduct = async (req, res) => {
    try {
        const { id } = req.params;        

        const response = await pool.query(
            `SELECT * FROM "Products" WHERE product_id = ${id}`
        )        
        const productFound = response.rows[0];
        

        if (!productFound) throw new Error ("Product Not Found")

        await pool.query(`DELETE FROM "Products" WHERE product_id = ${id}`)

        res.status(200).send({
            message: `${productFound.product_name} has been removed`
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error');
        
        
    }
  }
}

export const productController = new ProductController();
