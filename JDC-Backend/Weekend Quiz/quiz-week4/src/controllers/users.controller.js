import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserController {
    addUser = async (req, res) => {
        try {
            const { user_name, email, password } = req.body

            const newUser = await prisma.users.create ({
                data: {
                    user_name,
                    email,
                    password
                },
            })
            res.status(201).send(newUser)

        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
    };

    getAllUser = async (req, res) => {
        try {
            const showUser = await prisma.users.findMany({
                include: {
                    posts: true,
                    comments: true,
                  },
            })
            

            res.status(200).send(showUser)
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    }

    findUser = async (req,res) => {
        
        try {
            const { id } = req.params;
    
            const userFound = await prisma.users.findUnique({
                where: {id : id}
            })
    
            if (!userFound) {
                return res.status(404).send('User Not Found')   
            }
    
            res.status(202).send(userFound)
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
            
        }
    }

    findPost = async (req,res) => {
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
                console.log(error);
                res.status(500).send('Internal Server Error')
            }
    }
}
export const userController = new UserController();