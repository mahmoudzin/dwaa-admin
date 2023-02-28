
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import useGetItem from './../hooks/useGetItem';

const itemDetailsHoc = (DetailComponent:any, state:any) => 
    ()=>{
        const {id} = useParams();
        const item = useGetItem(id, state);

        return<div className="bg-white dark:text-gray-200 dark:bg-secondry-dark-bg  p-8 pt-9 m-3">
            {item 
                ?<DetailComponent item={item}/>
                :<Loading/> 
            }
        </div> 
        

}

export default itemDetailsHoc