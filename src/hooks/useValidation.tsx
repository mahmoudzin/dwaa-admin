import Joi, { ObjectSchema } from "joi";


const useValidation = (object:any) => {
  
    const schema = ((object:ObjectSchema)=> Joi.object(object))(object)
    
    function validate(item:ObjectSchema){
        const {error} = schema.validate(item ,{abortEarly: false})
        return error?.details.map((detail:any) => ({message: detail.message,  name: detail.context?.key})) || null;
    }
    
    return validate
}

export default useValidation