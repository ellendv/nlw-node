import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs"

import { sign } from "jsonwebtoken"

import { usersRepositories } from "../repositories/usersRepositories"


interface IAuthenticateRequest{
    email: string,
    password: string
}


class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest){
        const UserRepositories = getCustomRepository(usersRepositories)

        const user = await UserRepositories.findOne({email})

        if(!user){
            throw new Error("Email/Password -> Incorrect <-")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password -> Incorrect <-")
        }

        const token = sign({
            email: user.email
        },
        "4h6j5y8n4y8yr5er5f5d4er7t8rg0ff5h236yhfx9",
        {
            subject:user.id,
            expiresIn: "1d"
        })

        return token;
    }
} 

export { AuthenticateUserService }