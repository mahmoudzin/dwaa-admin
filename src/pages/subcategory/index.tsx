import React from 'react';
import IsActiveCell from '../../components/table/IsActiveCell';
import AppTable from '../../components/table/AppTable';
import componentLayout from '../../HOCS/ComponentLayout';
import Create from './Create'
import FixedCell from '../../components/table/FixedCell';
import Update from './Update';
import useDeleteAlret from '../../hooks/useDeleteAlret';
import { selectSubCategoriesState, supCategoryRepositary } from '../../store/subcategory';
import useUpdateSubCategory from '../../hooks/useUpdateSubCategory';



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

    const initialState = useUpdateSubCategory(updateItemId, selectSubCategoriesState);
    
    const deleteItem = useDeleteAlret(supCategoryRepositary, isApiActionLoading, "Sub Category")
    return (
        <>
            <AppTable 
                header={["Name", "Group", "N of Products", "IsActive"]} 
                body={items?.map((item:any) => ({
                    name: item.name,
                    group: item.productGroup,
                    productNumbers: item.productsCount,
                    isActive: <IsActiveCell active={item.isDeleted} handleSwitch={switchActive} id={item.id}/>,
                    actions: <FixedCell id={item.id} 
                        update={()=>{
                            setUpdateItemId(item.id);
                            updateModel.handleClickOpen();
                        }} 
                        deleteItem={deleteItem} baseUrl={"subcategories"} />
                }))}
                actions={true}
            />

            <Update {...
                
                {handleClose: ()=> {                        
                    setUpdateItemId(0);
                    updateModel.handleClose();
                }, 
                initialState, oldName: initialState ? initialState.name: "", open: updateModel.open, isFull:false, title:"Update Subcategory", items, isApiActionLoading}}/>
        
        </>
    );
};

export default componentLayout(Index, selectSubCategoriesState, supCategoryRepositary,"Sub-Categories", true, Create,false, "Create New Brand");