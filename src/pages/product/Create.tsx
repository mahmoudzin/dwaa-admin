
import AppInput from '../../components/inputes/AppInput';
import AppInputFile from '../../components/inputes/AppInputFile';
import useOptions from '../../hooks/useOptions';
import AppSelecetBox from '../../components/inputes/AppSelecetBox';
import { IErrorValidation, checkTheError } from '../../helpers/validation';
import AppSelectMulti from '../../components/inputes/AppSelectMulti';
import createLogicModel from '../../HOCS/createLogicModel';
import useDisabledChecker from '../../hooks/useDisabledChecker';
import { validationObject } from '../../interfaces/IProduct';
import { productRepositary } from './../../store/product/index';

const prdocutInputs={
  image: "",
  prdocutRequerments:{
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    productTypeId: "",
    productBrandId: "",
    productGroupId: ""
  },
  subCategories: []
} 


const fields = [
  {label: "Product image", name: "imgUrl", placeholder: "Upload Product Image", type:"file"},
  {label: "Product Name",placeholder: "Set Product Name Here", name: "name"},
  {label: "Product Description",placeholder: "Descripe the Product", name: "description", multiline:true},
  {label: "Product Price",placeholder: "Set Product Price Here", name: "price"},
] 
  

interface PropsType {
  item:any, 
  setItem:(item:any) => void
  handleFocus:()=> void, 
  handleBlur:()=> void,
  errors: IErrorValidation[] | null
}


export const CreateProduct = ({item, setItem, handleFocus, handleBlur, errors}:PropsType) => {
    const {brandOptions, categoryOptions, groupOptions, subCategoriesOptions} = useOptions()
    const disabledChecker = useDisabledChecker;

    const handleChange = (e: any) => {
      setItem({...item, subCategories: item.subCategories, prdocutRequerments:{...item.prdocutRequerments,  [e.target.name]: e.target.value}});
     }
     const subCategoriesChange = (value: any) => {
       setItem({...item, subCategories: value});
     }

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
                        setItem({...item, image: e.target.files[0], prdocutRequerments: {...item.prdocutRequerments, imgUrl: URL.createObjectURL(e.target.files[0])}})
                    } 
                  },
                  clear: ()=> setItem({...item, image: "", prdocutRequerments: {...item.prdocutRequerments, imgUrl:""}}),
                  value: item.prdocutRequerments.imgUrl,
                  error:checkTheError(errors, field.name)
                }}/>
              return <AppInput
                      key={field.name}
                      {...{
                        ...field,
                        value: item.prdocutRequerments[field.name],
                        handleChange,
                        handleBlur,
                        handleFocus,
                        error:checkTheError(errors, field.name)
                      }}/>
            })}
          
          <AppSelecetBox 
            {...{
              name: "productTypeId",
              value: item.prdocutRequerments.productTypeId,
              handleChange:(e)=>{
                setItem({...item, subCategories: [], prdocutRequerments:{...item.prdocutRequerments, [e.target.name]:e.target.value, productGroupId:  ""}});
              },
              handleBlur,
              handleFocus,
              options: categoryOptions,
              placeholder:"Select Prodcut Category",
              label: "Product Category",
              error:checkTheError(errors, "productTypeId")
            }}
          />
          <AppSelecetBox 
            {...{
              name: "productBrandId",
              value: item.prdocutRequerments.productBrandId,
              handleChange:(e)=>{
                setItem({...item, subCategories: [], prdocutRequerments:{...item.prdocutRequerments, [e.target.name]:e.target.value}});
              },
              handleBlur,
              handleFocus,
              options: brandOptions,
              placeholder:"Select Product Brand",
              label: "Product Brand",
              error:checkTheError(errors, "productBrandId")
            }}
          />
          <AppSelecetBox 
            {...{
              name: "productGroupId",
              value: item.prdocutRequerments.productGroupId,
              handleChange,
              handleBlur,
              handleFocus,
              options: groupOptions?.filter(g=> g.key === item.prdocutRequerments.productTypeId) || null,
              placeholder:"Select Product Group",
              label: "Product Group",
              disabled:disabledChecker(item.prdocutRequerments.productTypeId),
              error:checkTheError(errors, "productGroupId") 
            }}
          />
          <AppSelectMulti
            options={subCategoriesOptions?.filter(g => g.key === item.prdocutRequerments.productGroupId) || null}
            disabled={disabledChecker(item.prdocutRequerments.productGroupId)}
            setSubCategories={subCategoriesChange}
            subCategorieNames={item.subCategorieNames}
            label="Sub Categories"
            error={checkTheError(errors, "subCategories")} 
            placeholder="Select Product Sub Categories"
            {...{handleBlur, handleFocus, dependence: [item.prdocutRequerments.productGroupId, item.prdocutRequerments.productTypeId] }}

          />
        </> 
    ) 
}



export default createLogicModel(CreateProduct, prdocutInputs, validationObject, productRepositary)