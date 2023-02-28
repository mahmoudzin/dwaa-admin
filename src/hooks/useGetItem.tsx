import { useAppSelector } from "../Hooks";
import { useEffect, useState } from 'react';

const useGetItem = (id:any, itemsSate:any) => {
    const [item, setItem] = useState(null);

    const {items}:any = useAppSelector(itemsSate);
    
    useEffect(()=>{
       if(id)
        setItem(items.find((item:any)=> item.id == id))
        
    }, [items,id])
  

    return item
}


export default useGetItem