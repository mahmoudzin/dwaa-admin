
import axios from 'axios';
import { useAppDispatch } from '../Hooks';

const saveImage = async (image:File, controller = "Product/ImportFile") => {
    const formData = new FormData();
    formData.append("file", image);

    try {
        const res = await axios.post(`https://localhost:5001/api/${controller}`, formData);
        return res.data
    } catch (ex) {
        console.log(ex);
    }
}



const useSubmitItem = (thuncFunc:any, item:any, items:any, validate:(item:any)=> any, setErrors:any, resetForm:()=>void, isUser:boolean) => {
    
    const dispatch = useAppDispatch();

    const handleSubmit = async () => {
        const isValid = validate(item);
        if(isValid)
            setErrors(isValid);
        else if(!isUser && items.some((i:any) => i.name.toLowerCase() === (item.prdocutRequerments ? item.prdocutRequerments.name.toLowerCase() : item.name.toLowerCase()))){
            setErrors([{message: "This name already exists", name: "name"}])
        }
        else{
            if(item.prdocutRequerments){
                let res = await saveImage(item.image)
                dispatch(thuncFunc({
                    prdocutRequerments: {
                        ...item.prdocutRequerments,
                        imgUrl: res
                    },
                    subCategories: item.subCategories
                }))
            }else{
                if(item.image){
                    const imgUrl = await saveImage(item.image, "Users/ImportFile");
                    const userToSubmit = {
                        displayName: item.displayName,
                        email: item.email,
                        phoneNumber: item.phoneNumber,
                        imgUrl,
                        password: item.password,
                        confirmPassword: item.confirmPassword,
                        roles: [{name:"admin", isSelect: true}]
                    };
                    dispatch(thuncFunc(userToSubmit)); 
                }else{
                    dispatch(thuncFunc(item)); 
                }
                console.log(item);
            }
            resetForm();
        } 
    } 

    return handleSubmit
}

export default useSubmitItem