import React from 'react';
import AppTable from '../../components/table/AppTable';
import componentLayout from '../../HOCS/ComponentLayout';
import { selectOrderState } from '../../store/order';
import { orderRepository } from './../../store/order/index';



interface PropsType {
    items:any, 
    switchActive:(id:number) => void,
    createModel: any,
    updateModel: any,
    isApiActionLoading: null | string,
}

const Index  = ({
        items, 
    }:PropsType) => {
    return (
        <>
            <AppTable 
                header={["Username", "City", "Number of Items", "Quantity", "Status", "Total"]} 
                body={items?.map((item:any) => ({
                    username: item.shippingAddress.firstName + " " + item.shippingAddress.lastName,
                    City: item.shippingAddress.city,
                    number: item.orederItems.length,
                    quantity: item.orederItems.reduce((a:any, b:any)=>
                        a.quantity + b.quantity
                    ),
                    status: <span className='border-1 border-yellow-400 text-yellow-400 py-2 px-5 font-bold rounded-3xl'>Pending</span>,
                    total: item.subTotal,
                }))}
                actions={false}
            />    
        </>
    );
};

export default componentLayout(Index, selectOrderState, orderRepository,"orders", false);