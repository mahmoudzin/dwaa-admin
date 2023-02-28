import useGetItem from './useGetItem';
import { useState, useEffect } from 'react';

const useUpdateTypeAndBrand = (id:any, state:any) => {
    const [initialState, setInitialState] = useState<any | null>(null);
    const itemToUpdate:any = useGetItem(id, state);
    
    useEffect(()=> {
        if(itemToUpdate){
            setInitialState({ 
                id: itemToUpdate.id,
                name: itemToUpdate.name,
            })
        }
    }, [itemToUpdate, id])
    
    return initialState
}

export default useUpdateTypeAndBrand