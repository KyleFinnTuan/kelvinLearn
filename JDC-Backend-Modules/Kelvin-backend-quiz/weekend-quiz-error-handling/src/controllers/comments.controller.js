import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentController {
    addComment = async (req, res, next) => {
        try {
            const { content, user_id, post_id } = req.body

            const newComment = await prisma.comments.create ({
                data: {
                    content,
                    post_id,
                    user_id,

                },
            })
            res.status(201).send(newComment)

        } catch (error) {
            next(error)
        }
    };

    getAllComment = async (req, res, next) => {
        try {
            const getComment = await prisma.comments.findMany({
            })
            

            res.status(200).send(getComment)
        } catch (error) {
            next(error)
        }
    }

    findComment = async (req, res, next) => {
        
        try {
            const { id } = req.params;
    
            const commentFound = await prisma.comments.findUniqueOrThrow({
                where: {id : id}
            })
    
            if (!commentFound) {
                return res.status(404).send('Comment Not Found')   
            }
    
            res.status(202).send(commentFound)
        } catch (error) {
            next(error)
            
        }
    }
}
export const commentController = new CommentController();