import { errorResponse } from './../common/responseHandler';
import { HttpStatus } from "../common/constants/httpStatus.enum";
import { successResponse} from "../common/responseHandler";
import { Request, Response } from "express";
import { ERRORS } from '../common/constants/errors.constants';

export class CustomerController{
    private static instance:CustomerController;
    public static getInstance():CustomerController{
        if(!CustomerController.instance){
            CustomerController.instance = new CustomerController();
        }
        return CustomerController.instance;
    }
    private constructor(){}
    getCustomer = async(req:Request, res:Response) => {
        try{
            const {id} = req.params;
            const customer = {
                id:1,
                name:"John Doe",
                email:"jon@example.com",
                phone:"1234567890",
                address:"123 Main St, City, Country",

            };
            return successResponse(HttpStatus.OK,res,customer);
        }
        catch(error){
             return errorResponse(HttpStatus.INTERNAL_SERVER_ERROR,res,ERRORS.BAD_REQUEST);
        }
    }
        
    }