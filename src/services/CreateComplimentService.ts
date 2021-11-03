import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { usersRepositories } from "../repositories/usersRepositories"
interface IComplimentRequest {
    tag_id:string,
    user_sender: string,
    user_receiver: string,
    message: string,
}

class CreateComplimentService{
    async execute({tag_id, user_sender, user_receiver, message}:IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const UserRepositories = getCustomRepository(usersRepositories)

        if(user_sender === user_receiver){
            throw new Error(" incorrect User receiver does !")

        }

        const userReceiverExist = await UserRepositories.findOne(user_receiver)

        if(!userReceiverExist){
            throw new Error("User receiver does not exist!")
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliment)
        return compliment;
    }
}

export{CreateComplimentService}