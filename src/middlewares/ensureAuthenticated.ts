import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request:Request, response: Response, next: NextFunction){

    const authToken = request.headers.authorization

    if (!authToken){
        return response.status(401).end()
    }
    
    const [,token] = authToken.split(" ")

    try{ 
    const { sub } = verify( token , "4h6j5y8n4y8yr5er5f5d4er7t8rg0ff5h236yhfx9") as IPayload

    request.user_id = sub

    return next()

    }catch(err){
        return response.status(401).end()
    }

    verify( token , "4h6j5y8n4y8yr5er5f5d4er7t8rg0ff5h236yhfx9")

}
 