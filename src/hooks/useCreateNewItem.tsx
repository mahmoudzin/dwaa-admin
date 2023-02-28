
import { useState, useEffect } from 'react';
import useValidation from './useValidation';
import { IErrorValidation } from './../helpers/validation';




const useCreateNewItem = (initailState:any, validationObject:any) =>{    
    
    const [item, setItem] = useState(initailState);

    useEffect(()=>{
      setItem(initailState)
    }, [initailState])
    
    const [errors, setErrors] = useState<IErrorValidation[]| null>(null);

    const validate = useValidation(validationObject);
    
    const handleChange = (e: any, file=null, isFile:boolean=false) => {
     setItem({...item, [e.target.name]: isFile ? e.target.files[0] : e.target.value});
    }

    const handleFocus = () => setErrors(null)

    const handleBlur = () => {
     const valid = validate(item)
     if(valid) {
       setErrors(valid)
     }else{
       setErrors(null)
     }
    }

    const resetState = () => {
      setItem(initailState)
    }

    return {item, setItem, errors, setErrors, validate, handleChange, handleFocus, handleBlur, resetState}
}

export default useCreateNewItem