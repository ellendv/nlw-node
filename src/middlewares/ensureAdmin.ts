import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { usersRepositories } from "../repositories/usersRepositories";

export async function ensureAdmin(request:Request, response: Response, next: NextFunction){

    const { user_id } = request
    const UsersRepositories = getCustomRepository(usersRepositories)
    const { admin } = await UsersRepositories.findOne(user_id)


    if(admin) {
     return next();
    }

    return response.status(401).json({
        error: "is not admin "
    });
}


