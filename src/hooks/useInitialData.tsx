import { useEffect, useState } from "react";
import { brandRepositary } from "../store/brand";
import { categoryRepositary } from "../store/category";
import { groupRepositary } from "../store/group";
import { productRepositary} from '../store/product';
import { selectReportState } from "../store/report";
import { supCategoryRepositary } from "../store/subcategory";
import { customerRepository } from "../store/customer";
import { useAppDispatch, useAppSelector } from './../Hooks';
import { userRepositary } from './../store/user/index';
import { orderRepository } from './../store/order/index';


const useInitialData = () => {
    const [loading, setLoading] = useState(false);
    
    const dispatch = useAppDispatch();
    const {error} = useAppSelector(selectReportState);

    useEffect(() => {
        const fetchAll = async ()=>{
            if(!loading) setLoading(true);
            await dispatch(brandRepositary.fetchAll());
            await dispatch(categoryRepositary.fetchAll());
            await dispatch(groupRepositary.fetchAll());
            await dispatch(supCategoryRepositary.fetchAll());
            await dispatch(productRepositary.fetchAll());
            await dispatch(customerRepository.fetchAll());
            await dispatch(userRepositary.fetchAll());
            await dispatch(orderRepository.fetchAll());
            setLoading(false);
        };
        fetchAll();
    }, [dispatch])

    return {loading, error}
}

export default useInitialData