import { UserDAO } from "../dao/user.dao";
import { IUser } from "../interface/models/user.interface";

export class UserService{
    private static instance:UserService;
    private userDao:UserDAO;
    public static getInstance():UserService{
        if(!UserService.instance){
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
    private constructor(){
        this.userDao = UserDAO.getInstance();
    }
    public async createUser(user:IUser):Promise<IUser>{
        try{
            const newUser = await this.userDao.createUser(user);
            return newUser;
        }
        catch(error:any){
            throw new Error(error.message);
        }
    }
    public async getUserByEmail(email:string):Promise<IUser>{
        try{
            const user = await this.userDao.getUserByEmail(email);
            return user;
        }catch(error:any){
            throw new Error(error.message);
        }
    }
            
}