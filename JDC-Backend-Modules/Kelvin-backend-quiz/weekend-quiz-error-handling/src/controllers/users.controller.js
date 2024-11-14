import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';

class UserController {
    registerUser = async (req, res, next) => {
        try {
            const { username, email, password } = req.body

            const hashedPassword = await bcrypt.hash(password, 10)
            console.log(hashedPassword);
            

            const newUser = await prisma.users.create ({
                data: {
                    username,
                    email,
                    password
                },
            })
            res.status(201).send(newUser)

        } catch (error) {
            next(error)

        }
    };

    getAllUser = async (req, res, next) => {
        try {
            const showUser = await prisma.users.findMany({
                include: {
                    posts: true,
                    comments: true,
                  },
            })
            

            res.status(200).send(showUser)
        } catch (error) {
            next(error)

        }
    }

    findUser = async (req, res, next) => {
        
        try {
            const { id } = req.params;
    
            const userFound = await prisma.users.findUniqueOrThrow({
                where: {id : id}
            })
    
            if (!userFound) {
                throw { name: 'IdNotFound', message: 'No users found' };
            }
    
            res.status(202).send(userFound)
        } catch (error) {            
            next(error)

            
        }
    }

    findPost = async (req, res, next) => {
        try {
            const { id } = req.params;

            const userFound = await prisma.users.findUnique({
                where: {id : id},
                include: {
                    posts:true,
                },
            })
    
            if (!userFound) {
                return res.status(404).send('User Not Found')   
            }
        
            
                // const postFound = userFound.p
            res.status(202).send(userFound.posts)
            }catch (error) {
                next(error)
            }
    }
}
export const userController = new UserController();