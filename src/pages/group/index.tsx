import React from 'react';
import IsActiveCell from '../../components/table/IsActiveCell';
import AppTable from '../../components/table/AppTable';
import componentLayout from '../../HOCS/ComponentLayout';
import Create from './Create'
import FixedCell from '../../components/table/FixedCell';
import Update from './Update';
import useDeleteAlret from '../../hooks/useDeleteAlret';
import { selectGroupState, groupRepositary } from '../../store/group';
import useUpdateGroup from '../../hooks/useUpdateGroup';



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

    const initialState = useUpdateGroup(updateItemId, selectGroupState);
    
    const deleteItem = useDeleteAlret(groupRepositary, isApiActionLoading, "Group")
    return (
        <>
            <AppTable 
                header={["Name", "Category", "N of Sub-Categories", "N of Products", "IsActive"]} 
                body={items?.map((item:any) => ({
                    name: item.name,
                    category: item.productType,
                    subCategoriesNumber: item.productSubCategoriesCount,
                    productNumbers: item.productsCount,
                    isActive: <IsActiveCell active={item.isDeleted} handleSwitch={switchActive} id={item.id}/>,
                    actions: <FixedCell id={item.id} 
                        update={()=>{
                            setUpdateItemId(item.id);
                            updateModel.handleClickOpen();
                        }} 
                        deleteItem={deleteItem} baseUrl={"groups"} />
                }))}
                actions={true}
            />
        
            <Update {...
                
                {handleClose: ()=> {                        
                    setUpdateItemId(0);
                    updateModel.handleClose();
                }, 
                initialState, oldName: initialState ? initialState.name: "", open: updateModel.open, isFull:false, title:"Update Group", items, isApiActionLoading}}/>
    
        </>
    );
};

export default componentLayout(Index, selectGroupState, groupRepositary,"groups", true, Create,false, "Create New Group");