import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const userAuthorization = async (req, res, next) => {
  try {
    const { id: resourcesId } = req.params
    const { id: userId } = req.user;
    
        const resourceType = req.baseUrl.split('/').at(-1)



        let hasAccess = false

        switch (resourceType) {
            case 'users':
                const user = await prisma.user.findUniqueOrThrow({
                    where: {
                        id: resourcesId
                    }
                })

                if (user.id === userId) hasAccess = true;
                break;
        
            case 'profiles':
                const profile = await prisma.profile.findUniqueOrThrow({
                
                    where: {
                        id: resourcesId
                    }
                })
                if (profile.user_id === userId) hasAccess = true;
                break;

            default:
                break;
        }

        if (req.user.role === 'admin') hasAccess = true

        if (!hasAccess) throw { name: 'Unauthorized', message:'you are not authorized'}


        next()
    } catch (error) {      
      console.log("error1!");
      
        next(error)
    }
}

export const adminAuthorization = (role) => {
    return async (req, res, next) => {
      try {
        const user = await prisma.user.findUniqueOrThrow({
          where: {
            id: req.user.id
          },
          include: {
            role: true
          }
        })
  
        if (user.role.name !== role) throw { name: 'Unauthorized', message: 'You are not authorized' }
  
        next();
      } catch (error) {
        next(error);
      }
    }
  }