import React from 'react';
import AppTable from '../../components/table/AppTable';
import componentLayout from '../../HOCS/ComponentLayout';
import Create from './Create'
import FixedCell from '../../components/table/FixedCell';
import Update from './Update';
import useDeleteAlret from '../../hooks/useDeleteAlret';
import { selectUserstate, userRepositary } from './../../store/user/index';
import useUpdateUser from './../../hooks/useUpdateUser';



interface PropsType {
    items:any, 
    switchActive:(id:number) => void,
    createModel: any,
    updateModel: any,
    isApiActionLoading: null | string,
}

const Index  = ({
        items, 
        isApiActionLoading,
        createModel, 
        updateModel
    }:PropsType) => {
    
    const [updateItemId, setUpdateItemId] = React.useState("");

    const initialState = useUpdateUser(updateItemId, selectUserstate);

    const deleteItem = useDeleteAlret(userRepositary, isApiActionLoading, "User")
    
    return (
        <>
            <AppTable 
                header={["Image", "UserName", "Email", "Phonenumber"]} 
                body={items?.map((item:any) => ({
                    image: <img className='w-10 h-10 rounded-lg border-1 border-gray-300 object-cover' src={`${item.imgUrl}`} alt="user avatar"/>,
                    name: item.displayName,
                    email: item.email,
                    phone: item.phoneNumber,
                    actions: <FixedCell id={item.id} 
                        update={()=>{
                            setUpdateItemId(item.id);
                            updateModel.handleClickOpen();
                        }} 
                        deleteItem={deleteItem} baseUrl={"users"} />
                }))}
                actions={true}
            />

                
                <Update {...
                    
                    {handleClose: ()=> {                        
                        setUpdateItemId("");
                        updateModel.handleClose();
                    }, 
                    initialState, oldName: "", open: updateModel.open, isFull:true, title:"Update User", items, isApiActionLoading}}/>
        
        </>
    );
};

export default componentLayout(Index, selectUserstate, userRepositary,"users", true, Create, true, "Create New User");