import React from 'react';
import IsActiveCell from '../../components/table/IsActiveCell';
import AppTable from '../../components/table/AppTable';
import componentLayout from '../../HOCS/ComponentLayout';
import Create from './Create'
import FixedCell from '../../components/table/FixedCell';
import Update from './Update';
import useDeleteAlret from '../../hooks/useDeleteAlret';
import { selectBrandState, brandRepositary } from '../../store/brand/index';
import useUpdateTypeAndBrand from '../../hooks/useUpdateTypeAndBrand';


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
        switchActive,
        createModel, 
        updateModel
    }:PropsType) => {
    
    const [updateItemId, setUpdateItemId] = React.useState(0);

    const initialState = useUpdateTypeAndBrand(updateItemId, selectBrandState);
    
    const deleteItem = useDeleteAlret(brandRepositary, isApiActionLoading, "Brand")
    return (
        <>        
            <AppTable 
                header={["Name", "N of Products", "IsActive"]} 
                body={items?.map((item:any) => ({
                    name: item.name,
                    productNumbers: item.productsCount,
                    isActive: <IsActiveCell active={item.isDeleted} handleSwitch={switchActive} id={item.id}/>,
                    actions: <FixedCell id={item.id} 
                        update={()=>{
                            setUpdateItemId(item.id);
                            updateModel.handleClickOpen();
                        }} 
                        deleteItem={deleteItem} baseUrl={"brands"} />
                }))}
                actions={true}
            />

                <Update {...
                    
                    {handleClose: ()=> {                        
                        setUpdateItemId(0);
                        updateModel.handleClose();
                    }, 
                    initialState, oldName: initialState ? initialState.name: "", open: updateModel.open, isFull:false, title:"Update Brand", items, isApiActionLoading}}/>
        
        </>
    );
};

export default componentLayout(Index, selectBrandState, brandRepositary,"brands", true, Create,false, "Create New Brand");