import { Response } from 'express';
import { HttpStatus } from "./constants/httpStatus.enum";
import { IError } from '../interface/error.interface';

export const successResponce = (code:HttpStatus,response:Response,data:any, alreadyWrappedWithData:boolean = false)=>{
    let responseData = alreadyWrappedWithData ? data : {data};
    response.status(code).json(responseData);
}
export const errorResponce = (code:HttpStatus,response:Response,error:IError )=>{
    const errorData = {
        code,
        key:error.key,
        message:error.message
    }
    response.status(code).json({error});
}