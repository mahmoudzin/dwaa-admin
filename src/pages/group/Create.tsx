
import AppInput from '../../components/inputes/AppInput';
import AppSelecetBox from '../../components/inputes/AppSelecetBox';
import { IErrorValidation, checkTheError } from '../../helpers/validation';
import createLogicModel from '../../HOCS/createLogicModel';
import useOptions from '../../hooks/useOptions';
import { validationObject } from '../../interfaces/IGroup';
import { groupRepositary } from '../../store/group/index';

const itemInputs={
    name: "",
    productTypeId: ""
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
  
  const {categoryOptions} = useOptions();

    return (
        <>
          <AppInput
              {...{
                label:"Name",
                placeholder:"ex: Group 1",
                name:"name",
                value: item.name,
                handleChange,
                handleBlur,
                handleFocus,
                error:checkTheError(errors, "name")
              }}/>
           <AppSelecetBox 
            {...{
              name: "productTypeId",
              value: item.productTypeId,
              handleChange,
              handleBlur,
              handleFocus,
              options: categoryOptions,
              placeholder:"Select Category",
              label: "Category",
              error:checkTheError(errors, "productTypeId")
            }}
          />
        </> 
    ) 
}



export default createLogicModel(Create, itemInputs, validationObject, groupRepositary)