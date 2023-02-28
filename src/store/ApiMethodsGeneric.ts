
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios  from 'axios';
import { IBase } from './../interfaces/IEntity';
import { handleError } from './report';
import { toast } from 'react-hot-toast';



const fetchAll = (baseUrl:string, reducer:string)=> 
  createAsyncThunk(`${reducer}/fetchAll`, 
    async (_, {rejectWithValue, dispatch})=> {
      try 
      {
        const {data} = await axios.get(baseUrl);
        return data
      } 
      catch (error) {
        dispatch(handleError(error));
        return rejectWithValue(error);
      } 
    }
  );
  
const addNew = (baseUrl:string, reducer:string)=> 
  createAsyncThunk(`${reducer}/addNew`, 
    async (item:object, {rejectWithValue, dispatch})=> {
      const alert =  toast.loading('Loading...')
      try 
      {
        const {data} = await axios.post(baseUrl, 
          JSON.stringify(item), 
         { 
          headers: {
            "Content-Type": "application/json",
            Accept: 'application/json',
          }
        });
        toast.success(`${reducer} Added Successfully`, {id:alert, duration: 500})
        
        console.log(data);
        
        return data
      } 
      catch (error) {
        toast.error("Error Happaned", {id:alert, duration: 500})
        return rejectWithValue(error);
      } 
    }
  );
  
const updateOld = (baseUrl:string, reducer:string)=> 
  createAsyncThunk(`${reducer}/updateOld`, 
    async (item:IBase, {rejectWithValue, dispatch})=> {
      const alert =  toast.loading('Loading...')
      try 
      {
        if(item.id){
            const {data} = await axios.put(`${baseUrl}${item.id}`, 
            JSON.stringify(item), 
            { 
              headers: {
                "Content-Type": "application/json",
                Accept: 'application/json',
              }
            }
           )
           toast.success(`${reducer} Updated Successfully`, {id:alert, duration: 500})
           return data
        }
      else{
        console.log("this object is invalid");
      }
      
      } 
      catch (error) {
          toast.error("Error Happaned", {id:alert, duration: 500})
          return rejectWithValue(error)
      } 
    }
  );

const toggleStauts = (baseUrl:string, reducer:string)=>  
  createAsyncThunk(`${reducer}/deleteSoft`, 
    async (id:number | string, {rejectWithValue, dispatch})=> {
      const alert =  toast.loading('Loading...')
      try 
      {
          await axios.patch(`${baseUrl}${id}`);
          toast.success(`${reducer} Status Changed Successfully`, {id:alert, duration: 500})     
          return id
      } 
      catch (error) {
          toast.error("Error Happaned", {id:alert, duration: 500})
          return rejectWithValue(error)
      } 
    }
  );
  
const delteById = (baseUrl:string, reducer:string)=> 
  createAsyncThunk(`${reducer}/hardDelete`, 
    async (id:number | string, {rejectWithValue, dispatch})=> {
        const alert =  toast.loading('Loading...')
        console.log("its work,../..");
        
        try 
        {
            await axios.delete(`${baseUrl}${id}`);
            toast.success(`${reducer} Deleted Successfully`, {id:alert, duration: 500})
            return id
        } 
        catch (error) {
            toast.error("Error Happaned", {id:alert, duration: 500})
            return rejectWithValue(error)
        } 
    }
  )
  
const getItemById = (baseUrl:string, reducer:string) => 
  createAsyncThunk(`${reducer}/getItemById`, 
    async (id:number, {rejectWithValue, dispatch})=> {
      try 
      {
        const {data} = await axios.get(`${baseUrl}${id}`);
        return data
      } 
      catch (error) {
        dispatch(handleError(error));
        return rejectWithValue(error);
      } 
    }
  )



const repositary = {
  fetchAll,
  addNew,
  updateOld,
  toggleStauts,
  delteById,
  getItemById
}
export default repositary