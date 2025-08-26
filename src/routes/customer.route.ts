import { Router,Request,Response } from "express";
import { CustomerController } from "../controller/customer.controller";

export class CustomerRoute{ 
    private static instance:CustomerRoute;
    public router:Router;
    private customerController:CustomerController;
    public static getInstance():CustomerRoute{

        if(!CustomerRoute.instance){
            CustomerRoute.instance = new CustomerRoute();
        }
        return CustomerRoute.instance;
    }
    private constructor(){
        this.router = Router();
        this.customerController = CustomerController.getInstance();
        this.setupRoutes();
    }
    private setupRoutes(){
        this.router.get("/",this.customerController.getCustomer);

        
            }}
