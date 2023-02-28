

import React from 'react';
import { selectCustomerState } from '../../store/customer';
import componentLayout from './../../HOCS/ComponentLayout';
import { customerRepository } from './../../store/customer/index';
import AppTable from './../../components/table/AppTable';


interface PropsType {
    items:any,
}

const Index = ({items}:PropsType) => {
    return (
        <>
            <AppTable 
                actions={false}
                header={["Image", "Customer Name", "Email", "Phone Number"]} 
                body={items?.map((item:any) => ({
                    image: <img className='w-10 h-10 rounded-lg border-1 border-gray-300 object-cover' src={`${item.imgUrl}`} alt="avatar"/>,
                    name: item.displayName,
                    email: item.email,
                    phoneNumber: item.phoneNumber,       
                }))}
            />
        </>
    );
};

export default componentLayout(Index, selectCustomerState, customerRepository,"customers", false);