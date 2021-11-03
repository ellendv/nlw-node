import { getCustomRepository } from "typeorm"
import { usersRepositories } from "../repositories/usersRepositories"
import { classToPlain } from "class-transformer"


class ListUserService{
    async exeute(){
        const UsersRepositories = getCustomRepository(usersRepositories)
        const users = await UsersRepositories.find()
        return classToPlain(users)
    }
}

export { ListUserService }