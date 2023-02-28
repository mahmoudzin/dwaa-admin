import React from 'react';



interface PropsType {
    children:React.ReactNode
}


const UpdateModel = ({children}:PropsType) => {
    
    return (
        <div>
            <h3>Update:</h3>
            {children}
        </div>
    );
};

export default UpdateModel;