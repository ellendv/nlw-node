import { getCustomRepository } from "typeorm";
import {usersRepositories } from "../repositories/usersRepositories";
import{ hash } from "bcryptjs"
interface IuserRequest{
    name:string;
    email:string;
    admin?: boolean;
    password:string;
}

class CreateUserService{
    async execute({name, email, admin, password} : IuserRequest){
        const usersRepository = getCustomRepository(usersRepositories);

        if(!email){
            throw new Error("email incorrect")  
        }

        const userAlreadyExist = await usersRepository.findOne({
            email,
        });

        if(userAlreadyExist){
            throw new Error("user already exist");
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        })
        await usersRepository.save(user)
        return user
    }
}

export { CreateUserService}