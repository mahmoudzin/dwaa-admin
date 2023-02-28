import React from 'react';
import { selectProductstate } from '../../store/product';
import itemDetailsHoc from './../../HOCS/itemDetailsHoc';

interface PropsType {
    item:any
}
const Details = ({item}:PropsType) => {

    return (
        <div>
            ItemDetails {item.id}
        </div>
    );
};

export default itemDetailsHoc(Details, selectProductstate);