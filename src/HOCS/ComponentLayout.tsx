
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../Hooks';

import Loading from './../components/Loading';
import useModelState from './../hooks/useMdelState';




const componentLayout = (Component:any, func:(state: any) => any, repositary:any, name:string, display = true, Create:any = null, isFull?:boolean, title?:string) => {
    return (props:any) => {
        const createModel = useModelState();
        const updateModel = useModelState();
        const mapStateToProps = useAppSelector(func);
    
        const dispatch = useDispatch()

        const switchActive = (id:number) => {
            dispatch(repositary.toggleStauts(id))  
        }
        
        return <div className="bg-white dark:text-gray-200 dark:bg-secondry-dark-bg p-8 pt-9 m-3">
            {mapStateToProps.isLoading === "loading" ? <Loading /> 
            :<>{mapStateToProps?.items && mapStateToProps.items.length <= 0 
                ? <div className='bg-yellow-300 text-yellow-700 py-5 px-3 mb-5 rounded-lg'> there no {name} yet!</div>
                :<Component {...mapStateToProps} {...{switchActive, createModel, updateModel}} {...props} />
            }
           {display &&
             <>
                <Toaster />
                <br/>
                <button 
                    className="mr-4 py-2 px-4 border-0 text-sm font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 rounded-md" 
                    onClick={createModel.handleClickOpen}>
                        {title}
                </button>
                <Create {...{handleClose: createModel.handleClose, open: createModel.open, isFull, title, items:mapStateToProps.items, isApiActionLoading:mapStateToProps.isApiActionLoading}}/>
            </>}
            </>
            }
        </div>
    }
}

export default componentLayout