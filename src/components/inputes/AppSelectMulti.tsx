import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Chip, FormHelperText} from '@mui/material';
import { IOption } from '../../helpers/types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const handleValue = (value:any) => {
    return value.map((val:any) => {
          return Number(val.slice(0,val.indexOf(",")))
    })
}

function getStyles(name: string, selectedOptions: readonly string[], theme: Theme) {
  return {
    fontWeight:
      selectedOptions.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


interface PropsType {
  options: IOption[] | null
  disabled:boolean
  setSubCategories:(val:any) => void
  subCategorieNames?: string[]
  error:string|null|undefined
  placeholder:string
  handleBlur:()=>void,
  handleFocus:()=>void,
  label: string
  dependence?:any
}
export default function AppSelectMulti({dependence, options,label, disabled=false, handleBlur, handleFocus, subCategorieNames, setSubCategories, error, placeholder}:PropsType) {
  const theme = useTheme();
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(["M", "S", "A"]);
  
  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    
    const {
      target: { value },
    } = event;
    setSubCategories(handleValue(value));
    setSelectedOptions(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  React.useEffect(()=>{
    if(dependence)
      setSelectedOptions([]);
  }, [...dependence])
  React.useEffect(()=>{
    if(subCategorieNames){
      setSelectedOptions([...subCategorieNames])
    }
  }, [])
  
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          disabled={disabled}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedOptions}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value.slice(value.indexOf(",") + 1 , value.length)} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options?.map((option) => (
            <MenuItem
              key={option.key}
              value={`${option.key},${option.name}`}
              style={getStyles(option.name, selectedOptions, theme)}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText><span className={error ? "text-red-500" : "text-gray-500"}>{error ? error : placeholder}</span></FormHelperText>
      </FormControl>
    </>
  );
}
