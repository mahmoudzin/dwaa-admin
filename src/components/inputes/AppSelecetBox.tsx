import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import { IOption } from '../../helpers/types';

interface PropsType {
    label: string,
    placeholder:string,
    name:string,
    value:any,
    handleChange:(e: any)=> void,
    handleBlur:()=>void,
    handleFocus:()=>void,
    error:string| null| undefined,
    options:IOption[] | null,
    disabled?:boolean,
}


const AppSelecetBox = ({
    label,
    placeholder,
    name,
    value,
    handleChange,
    handleBlur,
    handleFocus,
    options,
    disabled=false,
    error,
}:PropsType) => {

    return (
        <>
            <FormControl fullWidth disabled={disabled} sx={{
                marginBottom: "30px"
            }}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                    <Select
                        {...{value, label, name}}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    >
                    {options?.map(o => <MenuItem key={o.key} value={o.key}>{o.name}</MenuItem>)}
                </Select>
                <FormHelperText>{<span className={error ? "text-red-500" : "text-gray-500"}>{error ? error : placeholder}</span>}</FormHelperText>
            </FormControl>
        </>
    );
};


export default AppSelecetBox;