import { UserService } from './../service/user.service';
import { errorResponse, successResponse } from '../common/responseHandler';
import { HttpStatus } from '../common/constants/httpStatus.enum';
import { ERRORS } from '../common/constants/errors.constants';
import { Request, Response } from 'express';
import { CreateUserDto } from '../dto/user/createUser.dto';

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
            const user = req.body as CreateUserDto;
            const now = new Date();
            const userWithTimestamps = {
                ...user,
                createdAt: now,
                updatedAt: now
            };
            const newUser = await this.UserService.createUser(userWithTimestamps);
            return  successResponse(HttpStatus.CREATED,res,newUser);
            
        } catch(error:any) {
            return errorResponse(HttpStatus.INTERNAL_SERVER_ERROR, res, error.message);
            }
           }
    
           getUserByEmail = async (req:Request, res:Response) => {
        try {
            const {email} = req.params;
            const user = await this.UserService.getUserByEmail(email);
           return  successResponse(HttpStatus.OK,res,user);

        }catch(error:any) {
            console.log(JSON.stringify(error));
            if(error.message === ERRORS.GET_FAILED.key){
             return errorResponse(HttpStatus.NOT_FOUND,res,ERRORS.USER_NOT_FOUND);
            }
            return errorResponse(HttpStatus.INTERNAL_SERVER_ERROR,res, ERRORS.BAD_REQUEST);
        }
    }
}
