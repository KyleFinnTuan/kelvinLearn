import { PrismaClient } from '@prisma/client'
import jsonwebtoken from 'jsonwebtoken'

const prisma = new PrismaClient()

export const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        
        const payload = jsonwebtoken.verify(access_token, process.env.JWT_SECRET)

        await prisma.user.findUniqueOrThrow({
            where: { id : payload.id}
        })        

        req.user = {
            id : payload.id

        }
        
        
        
        next()
    } catch (error) {
        next(error)
    }

 }