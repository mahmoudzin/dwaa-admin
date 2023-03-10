import React from 'react';
import { Create } from './Create';
import { IErrorValidation } from '../../helpers/validation';
import updateLogic from '../../HOCS/updateLogic';
import { validationObject } from '../../interfaces/ISubCategory';
import { supCategoryRepositary } from './../../store/subcategory/index';


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

export default updateLogic(Update, validationObject, supCategoryRepositary);