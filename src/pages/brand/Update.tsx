import React from 'react';
import { Create } from './Create';
import { IErrorValidation } from '../../helpers/validation';
import updateLogic from '../../HOCS/updateLogic';
import { validationObject } from '../../interfaces/IBrand';
import { brandRepositary } from './../../store/brand/index';


interface PropsType {
    item:any, 
    setItem:(item:any) => void
    handleFocus:()=> void, 
    handleBlur:()=> void,
    handleChange:(e:any) => void
    errors: IErrorValidation[] | null
  }
  

const Update = ({item, setItem, handleFocus, handleBlur, handleChange, errors}:PropsType) => {
    return <Create {...{item, setItem, handleFocus, handleBlur,handleChange, errors}}/>
};

export default updateLogic(Update, validationObject, brandRepositary);