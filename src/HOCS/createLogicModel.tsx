import * as React from 'react';

import useCreateNewItem from '../hooks/useCreateNewItem';
import AppModel from '../components/AppModel';
import useSubmitItem from '../hooks/useSubmitItem';


interface PropsType {
  handleClose:()=>void, open:boolean,isFull:boolean, title:string, items:any, isApiActionLoading: null | string
}

export default function createLogicModel(CreateComponent:any, inputs:any, validationObject:any,repositary:any, isUser:boolean = false) {

    return ({handleClose, open, isFull, title, items, isApiActionLoading}:PropsType)=> {

      const {item, setItem, errors, setErrors, validate, handleChange, handleFocus, handleBlur, resetState} = useCreateNewItem(inputs, validationObject)
    
      const resetForm = () => {
        resetState();
        handleClose();
        setErrors(null);
      };

      const handleSubmit = useSubmitItem(repositary.addNew, item, items, validate, setErrors, resetForm, isUser)    
      return (
        <>
          <AppModel {...{resetForm, open, isFull, title, handleSubmit, isApiActionLoading}}>
                <CreateComponent 
                {...{item,setItem, handleChange, handleFocus, handleBlur, errors}}
             />
          </AppModel>
        </>
      );  
  }
}