import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProductController {
  addProduct = async (req, res) => {
    try {
      const { product_name, price, description, stock_quantity } = req.body;

      const newUser = await prisma.products.create({
        data: {
          product_name,
          price : +price,
          description,
          stock_quantity : +stock_quantity
        },
      });

      res.status(201).send(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  getProduct = async (req, res)=>{
    try {
        const { id } = req.params;

        const productFound = await prisma.products.findUnique({
            where: { id: +id }
          })
    
          if (!productFound) return res.status(404).send('product not found');
        res.status(200).send(productFound)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error")
        
        
    }
  };


}

export const productController = new ProductController();
