import useGetItem from './useGetItem';
import { useState, useEffect } from 'react';

const useUpdateUser = (id:any, state:any) => {
    const [initialState, setInitialState] = useState<any | null>(null);
    const itemToUpdate:any = useGetItem(id, state);
        
    useEffect(()=> {
        if(itemToUpdate){
            setInitialState({ 
                id: itemToUpdate.id,
                userName: itemToUpdate.userName,
                email: itemToUpdate.email,
                imgUrl: itemToUpdate.imgUrl,
                displayName: itemToUpdate.displayName,
                phoneNumber: itemToUpdate.phoneNumber,
                roles: itemToUpdate.roles
            })
        }
    }, [itemToUpdate, id])
    
    return initialState
}

export default useUpdateUser