import { UserService } from './../service/user.service';
import { errorResponse, successResponse } from '../common/responseHandler';
import { HttpStatus } from '../common/constants/httpStatus.enum';
import { ERRORS } from '../common/constants/errors.constants';
import { Request, Response } from 'express';

export class UserController{
     private static instance:UserController;
      private UserService:UserService;
    
       public static getInstance():UserController{
   
           if(!UserController.instance){
               UserController.instance = new UserController();
           }
           return UserController.instance;
       }
       private constructor(){
        this.UserService = UserService.getInstance();
          
       }
       createUser = async (req:Request, res:Response) => {
        try {
            const user = req.body;
            const newUser = await this.UserService.createUser(user);
            successResponse(HttpStatus.CREATED,res,newUser);
        } catch(error:any) {
            errorResponse(HttpStatus.INTERNAL_SERVER_ERROR, res, error.message);
        }
       }

       getUserByEmail = async (req:Request, res:Response) => {
        try {
            const {email} = req.params;
            const user = await this.UserService.getUserByEmail(email);
            successResponse(HttpStatus.OK,res,user);
        }catch(error:any) {
            console.log(JSON.stringify(error));
            if(error.message === ERRORS.GET_FAILED.key){
                errorResponse(HttpStatus.NOT_FOUND,res,ERRORS.GET_FAILED);
            }
            errorResponse(HttpStatus.INTERNAL_SERVER_ERROR,res, ERRORS.BAD_REQUEST);
        }
    }
}
