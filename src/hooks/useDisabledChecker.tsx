import { useState, useEffect } from "react";


const useDisabledChecker =(dep:any)=>{
    const [disabled, setDisabled] = useState(true); 
    
    useEffect(()=> {
        if(dep && dep > 0) 
            setDisabled(false);
        else
            setDisabled(true);
    }, [dep])
    
    return disabled
}

export default useDisabledChecker