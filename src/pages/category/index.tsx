import React from 'react';
import IsActiveCell from '../../components/table/IsActiveCell';
import AppTable from '../../components/table/AppTable';
import componentLayout from '../../HOCS/ComponentLayout';
import Create from './Create'
import FixedCell from '../../components/table/FixedCell';
import Update from './Update';
import useDeleteAlret from '../../hooks/useDeleteAlret';
import { selectCategoryState, categoryRepositary } from '../../store/category';
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

    const initialState = useUpdateTypeAndBrand(updateItemId, selectCategoryState);
    
    const deleteItem = useDeleteAlret(categoryRepositary, isApiActionLoading, "Brand")
    return (
        <>
            <AppTable 
                header={["Name", "N of Groups", "N of Products", "IsActive"]} 
                body={items?.map((item:any) => ({
                    name: item.name,
                    groupsNumber: item.productGroupsCount,
                    productNumbers: item.productsCount,
                    isActive: <IsActiveCell active={item.isDeleted} handleSwitch={switchActive} id={item.id}/>,
                    actions: <FixedCell id={item.id} 
                        update={()=>{
                            setUpdateItemId(item.id);
                            updateModel.handleClickOpen();
                        }} 
                        deleteItem={deleteItem} baseUrl={"categories"} />
                }))}
                actions={true}
            />
            <Update {...
                
                {handleClose: ()=> {                        
                    setUpdateItemId(0);
                    updateModel.handleClose();
                }, 
                initialState, oldName: initialState ? initialState.name: "", open: updateModel.open, isFull:false, title:"Update Category", items, isApiActionLoading}}/>
    
        </>
    );
};

export default componentLayout(Index, selectCategoryState, categoryRepositary,"categories", true, Create,false, "Create New Category");