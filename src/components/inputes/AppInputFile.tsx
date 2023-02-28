import React from 'react';
import { IconButton } from '@mui/material';
import { BiImageAdd } from 'react-icons/bi';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface PropsType {
  placeholder:string,
  name:string,
  value:any,
  clear:()=> void
  handleChange:(e: React.ChangeEvent<HTMLInputElement>)=> void,
  error:string | null | undefined
}


const AppInputFile = ({
    name,
    placeholder,
    clear,
    handleChange,
    value,
    error
}:PropsType ) => {
  return (
      <>
        <div className="flex mb-10 justify-center md:justify-between items-center">
          <div className="hidden md:block w-1/4">{placeholder}</div>
          <IconButton  sx={{'&:hover': {backgroundColor: "transparent"}}} className='w-full md:w-1/2 rounded-none hover:rounded-none' aria-label="upload picture" component="label">
              <input hidden 
                  accept="image/*" 
                  type="file"
                  onChange={(e) => handleChange(e)} 
                  {...{name}}
              />
              {value ? 
              <div className="relative transition-all ">
              <div className="w-full  bg-black absolute flex items-center justify-center transition-all opacity-0 hover:opacity-50" style={{height: "400px"}}>
                <FaCloudUploadAlt className='text-white text-4xl hover:text-green-900'/>
                <MdDelete style={{zIndex: "1000"}} className='text-white text-4xl hover:text-red-900'
                  onClick={(e)=> {
                    e.preventDefault()
                    clear();
                  }}
                />
              </div>
              <img src={value} style={{
                height: "400px",
                objectFit: "cover"
              }} className="w-full border-double border-4 border-gray-500" alt="product"/>
              </div>:<BiImageAdd className='w-1/2 h-1/2 hover:text-sky-700' />}
             
          </IconButton>
        </div>
        {error && <p>{error}</p>}
      </>
    );
};

export default AppInputFile;