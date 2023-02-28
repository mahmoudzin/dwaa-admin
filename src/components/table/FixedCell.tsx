import React, { ReactNode } from 'react';
import {TableCell } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

interface MakeTableButtonRpopsType {
    children:ReactNode, cFunc:(id:number)=>void, id:number, bgColor:string, TextHover:string
}



const MakeTableButton = ({children, cFunc, id, bgColor, TextHover}:MakeTableButtonRpopsType) => {
    return (
        <button
                className={`rounded py-0.5 px-2 mr-1  text-gray-400 ${bgColor} ${TextHover} text-white`} 
                onClick={()=> cFunc(id)}
            >
            {children}
        </button>
    )
}


interface PropsType {
  id:number, 
  update:()=> void, 
  deleteItem:(id:number)=> void, 
  baseUrl:string 

}

const FixedCell = ({id, update, deleteItem, baseUrl}:PropsType) => {
    return (
        <>
            <button className={`rounded py-0.5 px-2 mr-1  text-gray-400 text-white hover:bg-yellow-100 hover:text-yellow-600`}>
                <Link to={`/${baseUrl}/${id}`}>
                    <RemoveRedEyeIcon />
                </Link>
            </button>
            <button onClick={update} className={`rounded py-0.5 px-2 mr-1  text-gray-400 text-white hover:bg-green-100 hover:text-green-600`}>
                {/* <Link to={`/${baseUrl}/update/${id}`}> */}
                    <EditIcon />
                {/* </Link> */}
            </button>
            <MakeTableButton cFunc={deleteItem} id={id} bgColor="hover:bg-red-100" TextHover="hover:text-red-600">
                <DeleteForeverIcon />
            </MakeTableButton>
        </>
    );
};

export default FixedCell;