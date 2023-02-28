import React from 'react';
import { selectSubCategoriesState } from '../../store/subcategory';
import itemDetailsHoc from '../../HOCS/itemDetailsHoc';

interface PropsType {
    item:any
}
const Details = ({item}:PropsType) => {

    return (
        <div>
            ItemDetails {item.id}
            <br/>
            Item Name : {item.name}
        </div>
    );
};

export default itemDetailsHoc(Details, selectSubCategoriesState);