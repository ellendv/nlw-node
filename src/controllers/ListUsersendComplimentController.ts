import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUsersendComplimentController{
    async handle(request: Request, response: Response){
        const { user_id } = request

        const listUsersendComplimentsService = new ListUserSendComplimentsService()

        const compliments = await listUsersendComplimentsService.execute(user_id)

        return response.json(compliments)
    }
}

export { ListUsersendComplimentController }