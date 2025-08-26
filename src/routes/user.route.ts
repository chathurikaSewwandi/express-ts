import { UserController } from './../controller/user.controller';
import { Router } from "express";

export class UserRoute{

     private static instance:UserRoute;
     public router:Router;
     private userController:UserController;

   

    public static getInstance(): UserRoute {
        if (!UserRoute.instance) {
            UserRoute.instance = new UserRoute();
        }
        return UserRoute.instance;
    }
     private constructor() {
        this.router = Router();
        this.userController = UserController.getInstance();
        this.setupRoutes();
    
    }
 private setupRoutes(){
    this.router.post("/", this.userController.createUser);
    this.router.get("/:email", this.userController.getUserByEmail);
 }

}
    