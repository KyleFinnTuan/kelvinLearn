import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class RoleController {
  addRole = async (req, res, next) => {
    try {
      const { name } = req.body;

      const newRole = await prisma.role.create({
        data: {
          name,
        },
      });
      res.status(201).send(newRole);
    } catch (error) {
      next(error);
    }
  };

  getRoles = async (req, res, next) => {
    try {
      const roleFound = await prisma.role.findMany({});

      res.status(200).send(roleFound);
    } catch (error) {
      next(error);
    }
  };

  findRole = async (req, res, next) => {
    try {
      const { id } = req.params;

      const roleFound = await prisma.role.findUniqueOrThrow({
        where: { id: Number(id) },
        include: {
          User: true,
        },
      });

      res.status(200).send(roleFound);
    } catch (error) {
      next(error);
    }
  };

  updateRole = async (req, res, next) => {
    try {
      const { id } = req.params
      const  { name } = req.body

      await prisma.role.findUniqueOrThrow({
        where: {id: Number(id)}
      })

      const updatedRole = await prisma.role.update({
        where: {id: Number(id)},
        data: {
          name
        },
      })

      res.status(201).send(updatedRole)
    } catch (error) {
     next(error) 
    }
  };

  deleteRole = async (req, res, next) => {
    try {
      const { id } = req.params;
      await prisma.role.findUniqueOrThrow({
        where: {id: Number(id)}
      })

      const deletedRole = await prisma.role.delete({
        where: {id: Number(id)},
      })
      res.status(204).send(deletedRole)
    } catch (error) {
      next(error)
    }
  }

}

export const roleController = new RoleController();
