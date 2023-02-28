import useGetItem from './useGetItem';
import { useState, useEffect } from 'react';

const useUpdateProduct = (id:any, state:any) => {
    const [initialState, setInitialState] = useState<any | null>(null);
    const itemToUpdate:any = useGetItem(id, state);
        
    useEffect(()=> {
        if(itemToUpdate){
            setInitialState({ 
                id: itemToUpdate.id,
                image: "",
                prdocutRequerments:{
                    name: itemToUpdate.name,
                    description: itemToUpdate.description,
                    price: itemToUpdate.price,
                    imgUrl: itemToUpdate.imgUrl,
                    productTypeId: itemToUpdate.productTypeId,
                    productBrandId: itemToUpdate.productBrandId,
                    productGroupId: itemToUpdate.productGroupId,
                },
                subCategorieNames: itemToUpdate.subCategories,
                subCategories: itemToUpdate.subCategoriesIds
            })
        }
    }, [itemToUpdate, id])
    
    return initialState
}

export default useUpdateProduct