
import AppInput from '../../components/inputes/AppInput';
import AppInputFile from '../../components/inputes/AppInputFile';
import { IErrorValidation, checkTheError } from '../../helpers/validation';
import createLogicModel from '../../HOCS/createLogicModel';
import { validationObject } from '../../interfaces/IUser';
import { userRepositary } from './../../store/user/index';

const userInputs={
  displayName: "",
  email: "",
  phoneNumber: "",
  image:"",
  imgUrl: "",
  password: "",
  confirmPassword: "",
}


const fields = [
  {label: "Image", name: "imgUrl", placeholder: "Upload User Image", type:"file"},
  {label: "Username",placeholder: "Set User Name Here", name: "displayName"},
  {label: "Email",placeholder: "ex:ahmed@gmail.com", name: "email"},
  {label: "Phone Number",placeholder: "ex:203215697", name: "phoneNumber"},
  {label: "Password",placeholder: "Make it compining of numbers, characters and symbols such as [+/*-]", name: "password", type:"password"},
  {label: "Confirm Password",placeholder: "Confirm the Password", name: "confirmPassword", type:"password"},
] 
  

interface PropsType {
  item:any, 
  setItem:(item:any) => void
  handleFocus:()=> void, 
  handleBlur:()=> void,
  handleChange:(e:any) => void
  errors: IErrorValidation[] | null
}


export const Create = ({item, setItem, handleFocus, handleBlur, handleChange, errors}:PropsType) => {
    return (
        <>
          {fields.map(field =>{ 
            if(field.type === "file")
              return <AppInputFile 
                key={field.name}
                {...{
                  placeholder:field.placeholder,
                  name:field.name,
                  handleChange: e =>{
                    if(e.target.files){
                        setItem({...item, image: e.target.files[0],  imgUrl: URL.createObjectURL(e.target.files[0])})
                    } 
                  },
                  clear: ()=> setItem({...item, image: "", imgUrl:""}),
                  value: item.imgUrl,
                  error:checkTheError(errors, field.name)
                }}/>
              return <AppInput
                      key={field.name}
                      {...{
                        ...field,
                        value: item[field.name],
                        handleChange,
                        handleBlur,
                        handleFocus,
                        error:checkTheError(errors, field.name)
                      }}/>
            })}
        </> 
    ) 
}



export default createLogicModel(Create, userInputs, validationObject, userRepositary, true)