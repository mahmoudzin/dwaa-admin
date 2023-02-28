import React from 'react';
import { CreateProduct } from './Create';
import { IErrorValidation } from './../../helpers/validation';
import updateLogic from './../../HOCS/updateLogic';
import { validationObject } from '../../interfaces/IProduct';
import { productRepositary } from './../../store/product/index';


interface PropsType {
    item:any, 
    setItem:(item:any) => void
    handleFocus:()=> void, 
    handleBlur:()=> void,
    errors: IErrorValidation[] | null
  }
  

const Update = ({item, setItem, handleFocus, handleBlur, errors}:PropsType) => {
    return <CreateProduct {...{item, setItem, handleFocus, handleBlur, errors}}/>
};

export default updateLogic(Update, validationObject, productRepositary);