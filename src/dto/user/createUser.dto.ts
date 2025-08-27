import { format } from "path";
import { UserTypes } from "../../interface/util/userTypes.enum";

export const createUserDtoSchema ={
    type: 'object',
    properties:{
        name:{type: 'string',minLength:3, maxLength:45},
        email:{type:'string',format:'email'},
        password:{type:'string', minLength:8, maxLength:28},
        type:{type:'string', enum: Object.values(UserTypes)}
    },
    required:['name','email','password','type'],
    additionalProperties:false,

    }
    export interface CreateUserDto{
        name:string;
        email:string;
        password:string;
        type:UserTypes;
    }
