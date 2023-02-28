import React from 'react';
import IsActiveCell from '../../components/table/IsActiveCell';
import AppTable from '../../components/table/AppTable';
import componentLayout from '../../HOCS/ComponentLayout';
import { productRepositary, selectProductstate } from '../../store/product/index';
import CreateProduct from './Create'
import FixedCell from './../../components/table/FixedCell';
import useUpdateProduct from '../../hooks/useUpdateProduct';
import Update from './Update';
import useDeleteAlret from '../../hooks/useDeleteAlret';



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

    const initialState = useUpdateProduct(updateItemId, selectProductstate);
    
    const deleteItem = useDeleteAlret(productRepositary, isApiActionLoading, "Product")
    return (
        <>
            <AppTable 
                header={["Image", "Name", "Description", "Price","Brand","Category", "Group", "Sub-Categories", "IsActive"]} 
                body={items?.map((item:any) => ({
                    image: <img className='w-10 h-10 rounded-lg border-1 border-gray-300 object-cover' src={`${item.imgUrl}`} alt="item"/>,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    brand: item.productBrand,
                    category: item.productType,
                    group: item.productGroup,
                    subCategories: item.subCategories.join(", "),
                    isActive: <IsActiveCell active={item.isDeleted} handleSwitch={switchActive} id={item.id}/>,
                    actions: <FixedCell id={item.id} 
                        update={()=>{
                            setUpdateItemId(item.id);
                            updateModel.handleClickOpen();
                        }} 
                        deleteItem={deleteItem} baseUrl={"products"} />
                }))}
                actions={true}
            />
            
            <Update {...
                
                {handleClose: ()=> {                        
                    setUpdateItemId(0);
                    updateModel.handleClose();
                }, 
                initialState, oldName: initialState ? initialState.prdocutRequerments.name: "", open: updateModel.open, isFull:true, title:"Update Product", items, isApiActionLoading}}/>
    
        </>
    );
};

export default componentLayout(Index, selectProductstate, productRepositary,"products", true, CreateProduct,true, "Create New Product");