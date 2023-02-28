
import AppInput from '../../components/inputes/AppInput';
import { IErrorValidation, checkTheError } from '../../helpers/validation';
import createLogicModel from '../../HOCS/createLogicModel';
import { validationObject } from '../../interfaces/IBrand';
import { brandRepositary } from './../../store/brand/index';

const itemInputs={
    name: ""
} 

  

interface PropsType {
  item:any, 
  setItem:(item:any) => void
  handleFocus:()=> void, 
  handleBlur:()=> void,
  handleChange:(e:any)=> void
  errors: IErrorValidation[] | null
}


export const Create = ({item, handleChange, handleFocus, handleBlur, errors}:PropsType) => {
  

    return (
        <>
          <AppInput
              {...{
                label:"Name",
                placeholder:"ex: brnad 1",
                name:"name",
                value: item.name,
                handleChange,
                handleBlur,
                handleFocus,
                error:checkTheError(errors, "name")
              }}/>
        </> 
    ) 
}



export default createLogicModel(Create, itemInputs, validationObject, brandRepositary)