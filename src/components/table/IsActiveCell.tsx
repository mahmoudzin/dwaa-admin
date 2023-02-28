import React from 'react';
import ActiveSwitch from '../ActiveSwitch';

interface PropsType {
   active: boolean, 
   handleSwitch:(id:number)=>void, 
   id:number
}


const IsActiveCell = (
     {   
        active, 
        handleSwitch, 
        id
     }:PropsType) => <ActiveSwitch 
            checked={active} 
            id={id} 
            handleSwitch={handleSwitch}  
        />


export default IsActiveCell;