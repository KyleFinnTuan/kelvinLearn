import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jsonwebtoken from 'jsonwebtoken'

class UserContorller {
  registerUser = async (req, res, next) => {
    try {
      const { email, password, role_id } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role_id: parseInt(role_id),
        },
      });
      res.status(201).send(newUser);
    } catch (error) {
      next(error);
    }
  };

  loginUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      let user;

      user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
        },
      });      

      await bcrypt.compare(password, user.password)
      
      const payload = {
        id: user.id
      }

      const access_token = jsonwebtoken.sign(payload, process.env.JWT_SECRET)

      res.status(200).send({ access_token });
    } catch (error) {
      next(error);
    }
  };

  getUser = async (req, res, next) => {
    try {
        const userFound = await prisma.user.findMany({})
        res.status(200).send(userFound)
    } catch (error) {
        next(error)
    }
  }

  findUser = async (req, res, next) => {
    try {
      const { id } = req.params

      const userFound = await prisma.user.findUniqueOrThrow({
        where: { id }
      }) 


      res.status(200).send(userFound)
    } catch (error) {
        next(error)
    }
  }

  updateUser = async (req, res, next) => {
    try {
      const { id } = req.params
      const { email, password, role_id } = req.body

      

      await prisma.user.findUniqueOrThrow({
        where: { id }
      }) 

      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          email,
          password,
          role_id,
        }
      })
      
    
      res.status(201).send(updatedUser)
    } catch (error) {
      console.log("error 2");
      
      next(error)
    }
  }

  deleteUser = async (req, res, next) => {
    try {

      const { id } = req.params

      await prisma.user.findUniqueOrThrow({
        where: { id }
      }) 

      await prisma.user.delete({
        where: { id }
      })

      res.status(201).send(`id "${id}" was deleted Successfully`)
    } catch (error) {
      next(error)
    }
    
  }

}

export const userController = new UserContorller();
