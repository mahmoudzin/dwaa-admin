import { IError } from "./types"

export interface IErrorValidation  {
    message:string
    name: string | undefined
}

export function checkTheError (arr:IErrorValidation[] | null, value:string):string | null | undefined {
   return arr ? arr.find(item => item.name === value)?.message : null 
}

export function returnError(axiosObject: any):IError{
    if(axiosObject.response)
        return {
            statusCode: axiosObject.response.data.statusCode,
            message: axiosObject.response.data.message
        }
    else 
        return {
            statusCode: "500",
            message:"a network error occurred, please check your network settings and try again"
        }
}