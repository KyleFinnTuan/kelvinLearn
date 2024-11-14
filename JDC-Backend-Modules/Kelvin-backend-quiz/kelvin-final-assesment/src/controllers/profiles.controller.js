import { PrismaClient } from "@prisma/client";
const prisma =  new PrismaClient();

class ProfileController {
    addProfile = async (req, res,  next) => {
        try {
            const { user_id, first_name, last_name, bio } = req.body

            const newProfile = await prisma.profile.create ({
                data: {
                    user_id,
                    first_name,
                    last_name,
                    bio,
                }
            })

            res.status(201).send(newProfile)

        } catch (error) {
            next(error)
        }
        
    }

    getProfile = async (req, res, next) => {
        try {
            const findProfile = await prisma.profile.findMany({})
            res.status(200).send(findProfile)
        } catch (error) {
            next(error)
        }
    }

    findProfile = async (req, res, next) => {
        try {
            const { id } = req.params

            const findProfile = await prisma.profile.findUniqueOrThrow({
                where: { id }
            })
            res.status(200).send(findProfile)
        } catch (error) {
            next(error)
        }        
    }

    updateProfile = async (req, res ,next) => {
        try {
            const { id } = req.params
            const { user_id, first_name, last_name, bio, } = req.body

            await prisma.profile.findUniqueOrThrow({
                where: { id }
            })

            const updatedUser = await prisma.profile.update ({
                where:{
                    id
                },
                data: {
                    user_id: req.user.id,
                    first_name,
                    last_name,
                    bio,
                }
                
            })

            res.status(201).send(updatedUser)
        } catch (error) {
            next(error)
        }       
    }

    deleteProfile = async (req, res , next ) => {
        try {
            const { id } = req.params
            
            await prisma.profile.findUniqueOrThrow({
                where: { id }
            })
    
            await prisma.profile.delete ({
                where: { id }
            }) 
            res.status(204).send(`id "${id}" was deleted Successfully`)
        } catch (error) {
            next(error)
        }
        
    }

}

export const profileController = new ProfileController();