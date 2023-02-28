import { TextField } from '@mui/material';
import React from 'react';


interface PropsType {
    label: string,
    type?:string,
    placeholder:string,
    name:string,
    value:any,
    handleChange:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void,
    handleBlur:()=>void,
    handleFocus:()=>void,
    multiline?:boolean,
    minRows?:number,
    maxRows?:number,
    error:string | null | undefined
}



const AppInput = ({
    label,
    type="text",
    placeholder,
    name,
    value,
    handleChange,
    handleBlur,
    handleFocus,
    multiline=false,
    minRows=5,
    maxRows=10,
    error
}:PropsType) => {
    return (
        <>
           <TextField 
             fullWidth={true}
             id="outlined-basic" 
             variant="outlined" 
             {...{label, type, name, value, multiline, minRows, maxRows}}
             helperText={ <span className={error ? "text-red-500" : "text-gray-500"}>{error ? error : placeholder}</span>}
             onChange={handleChange}
             onBlur={handleBlur}
             onFocus={handleFocus}
             sx={{
                marginBottom:"30px"
             }}
           /> 
           
        </>
    );
};

export default AppInput;