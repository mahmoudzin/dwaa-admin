import axios from 'axios';
import { useAppDispatch } from '../Hooks';

const saveImage = async (image:File) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
        const res = await axios.post("https://localhost:5001/api/Product/ImportFile", formData);
        return res.data
    } catch (ex) {
        console.log(ex);
    }
}


const useSubmitToUpdate = (thuncFunc:any, item:any, items:any,oldName:string, validate:(item:any)=> any, setErrors:(errors:any)=>void, resetForm:()=>void) => {

    const dispatch = useAppDispatch();
    
    const handleSubmit = async () => {    
        const isValid = validate(item);
        
        if(isValid){
            setErrors(isValid);
        }
        else if(items.filter((i:any) => i.name.toLowerCase() !== oldName.toLowerCase()).some((i:any) => i.name.toLowerCase() === (item && (item.prdocutRequerments ? item.prdocutRequerments.name : item.name)).toLowerCase())){
            setErrors([{message: "This name already exists", name: "name"}])
        }
        else{
            if(item.prdocutRequerments){

                let res = item.image ? await saveImage(item.image) : item.prdocutRequerments.imgUrl.split("images/")[1]
                
                dispatch(thuncFunc({
                    id:item.id,
                    prdocutRequerments: {
                        ...item.prdocutRequerments,
                        imgUrl: res
                    },
                    subCategories: item.subCategories
                }))
            }else{
                dispatch(thuncFunc(item)); 
            }
            resetForm();
        } 
    } 

    return handleSubmit
}

export default useSubmitToUpdate