
import AppInput from '../../components/inputes/AppInput';
import AppSelecetBox from '../../components/inputes/AppSelecetBox';
import { IErrorValidation, checkTheError } from '../../helpers/validation';
import createLogicModel from '../../HOCS/createLogicModel';
import useOptions from '../../hooks/useOptions';
import { validationObject } from '../../interfaces/ISubCategory';
import { supCategoryRepositary } from '../../store/subcategory';

const itemInputs={
    name: "",
    productGroupId: ""
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
  
  const {groupOptions} = useOptions();

    return (
        <>
          <AppInput
              {...{
                label:"Name",
                placeholder:"ex: Sub Category 1",
                name:"name",
                value: item.name,
                handleChange,
                handleBlur,
                handleFocus,
                error:checkTheError(errors, "name")
              }}/>
           <AppSelecetBox 
            {...{
              name: "productGroupId",
              value: item.productGroupId,
              handleChange,
              handleBlur,
              handleFocus,
              options: groupOptions,
              placeholder:"Select Group",
              label: "Group",
              error:checkTheError(errors, "productGroupId")
            }}
          />
        </> 
    ) 
}



export default createLogicModel(Create, itemInputs, validationObject, supCategoryRepositary)