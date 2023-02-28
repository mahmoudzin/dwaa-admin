import { toast } from "react-hot-toast";
import { useAppDispatch } from './../Hooks';


const useDeleteAlret = (repositary:any, isLoading:null|string, name:string) => {
    const dispatch = useAppDispatch();
    return (id: any) => {
        toast(
            <div>
                <div className="font-bold w-full">
                    Are You sure you want to delete this {name}?
                </div>
                <div className='text-right'>
                    <button onClick={() => { 
                        console.log(id);
                        
                            dispatch(repositary.delteById(id))
                            toast.dismiss()
                        }} 
                        className="mr-2 rounded py-1 px-2 mt-5 focus:ring bg-indigo-500 hover:bg-indigo-600 text-white">
                        {isLoading === "loading" ?
                        <>
                        Processing...  
                        </>
                        : "Delete"}
                    </button>
                    <button type="button" onClick={() => toast.dismiss()} className="rounded py-1 px-2 mt-5 focus:ring bg-gray-500 hover:bg-gray-600 text-white">Cancel</button>
                </div>
            </div>
          );
    }
    
}

export default useDeleteAlret