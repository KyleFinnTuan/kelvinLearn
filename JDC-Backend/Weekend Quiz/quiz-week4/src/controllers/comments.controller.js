import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentController {
    addComment = async (req, res) => {
        try {
            const { content } = req.body

            const newComment = await prisma.comments.create ({
                data: {
                    content,
                },
            })
            res.status(201).send(newComment)

        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
    };

    getAllComment = async (req, res) => {
        try {
            const getComment = await prisma.comments.findMany({
            })
            

            res.status(200).send(getComment)
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
        }
    }

    findComment = async (req,res) => {
        
        try {
            const { id } = req.params;
    
            const commentFound = await prisma.comments.findUnique({
                where: {id : id}
            })
    
            if (!commentFound) {
                return res.status(404).send('Comment Not Found')   
            }
    
            res.status(202).send(commentFound)
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error')
            
        }
    }
}
export const commentController = new CommentController();