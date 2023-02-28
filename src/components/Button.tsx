import React from 'react';


interface PropsType  {
    icon?:any, 
    bgColor:string, 
    color:string, 
    bgHoverColor?:string, 
    size?:string, 
    text:string, 
    borderRadius?:string, 
    width?: string
}
const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }:PropsType) => {

  return (
    <button
      type="button"
      onClick={() => {}}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
