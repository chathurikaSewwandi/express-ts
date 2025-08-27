import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import ajvFormats from "ajv-formats";
import { errorResponse } from "../common/responseHandler";
import { HttpStatus } from "../common/constants/httpStatus.enum";
import { ERRORS } from "../common/constants/errors.constants";
import { Request, Response, NextFunction } from "express";

function createAjv(){

    const ajv = new Ajv({allErrors:true});
    ajvFormats(ajv);
    ajvErrors(ajv);


    return ajv;
}

export function ValidateRequestBody(schema : any) : (req: Request, resp: Response, next: NextFunction) => void {

    const ajv = createAjv();

    return (req: Request, resp: Response, next: NextFunction) => {

        const isValidRequestBody = ajv.validate(schema, req.body);

        if (!isValidRequestBody) {
            return errorResponse(
                HttpStatus.BAD_REQUEST,
                resp,
                ERRORS.INVALID_REQUEST_BODY_FORMAT
            )
}
 
}
}