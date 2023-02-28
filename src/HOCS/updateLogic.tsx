
import AppModel from '../components/AppModel';
import { productRepositary } from '../store/product';
import useCreateNewItem from './../hooks/useCreateNewItem';
import useSubmitToUpdate from './../hooks/useSubmitToUpdate';


interface PropsType {
    initialState:any, 
    handleClose:()=>void, 
    open:boolean,
    isFull:boolean, 
    title:string, 
    items:any, 
    isApiActionLoading: null | string
    oldName: any
}

const updateLogic = (UpdateComponent:any, validationObject:any, repositary:any)=>{
    
    return ({initialState, open, isFull, title, isApiActionLoading, items, oldName, handleClose}:PropsType)=>{
        
        const {item, setItem, handleFocus, handleBlur, setErrors, handleChange, validate, errors} = useCreateNewItem(initialState, validationObject)
        
        const resetForm = () => {
            setItem(null);
            handleClose();
        }

        const handleSubmit = useSubmitToUpdate(repositary.updateOld, item, items, oldName, validate, setErrors, resetForm);
        
        return ( 
            <AppModel {...{resetForm, open, isFull, title, handleSubmit, isApiActionLoading}}>
                {item ?
                <UpdateComponent {...{item, setItem, handleFocus, handleBlur, handleChange, errors}}/>
                : <>Loading.... </>}
            </AppModel>
        )
    }
}

export default updateLogic