import React from 'react';
import { selectUserstate } from '../../store/user';
import itemDetailsHoc from '../../HOCS/itemDetailsHoc';

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

export default itemDetailsHoc(Details, selectUserstate);