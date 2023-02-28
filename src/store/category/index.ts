import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import {CategoryState, } from '../../helpers/types'
import { RootState } from '..';
import { toast } from 'react-hot-toast';
import repositary from './../ApiMethodsGeneric';
import { returnError } from '../../helpers/validation';

const baseUrl: string = 'https://localhost:5001/api/ProductType/';
const reducer: string ='category';


export const categoryRepositary = {
  fetchAll: repositary.fetchAll(baseUrl, reducer),
  addNew: repositary.addNew(baseUrl, reducer),
  updateOld:repositary.updateOld(baseUrl, reducer),
  toggleStauts: repositary.toggleStauts(baseUrl, reducer),
  delteById: repositary.delteById(baseUrl, reducer),
  getItemById: repositary.getItemById(baseUrl, reducer)
}


const initialState: CategoryState = {
  items: null,
  isLoading: "loading",
  isApiActionLoading: null,
  error: null,
  item:null
}
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers:
  (builder) => {      
    builder
    .addCase(categoryRepositary.fetchAll.pending, (state, action)=>{
        state.isLoading = "loading"
    })
    .addCase(categoryRepositary.fetchAll.fulfilled, (state, action)=>{
        state.isLoading = "success"
        state.items = action.payload;
    })
    .addCase(categoryRepositary.fetchAll.rejected, (state, action)=>{
        state.isLoading = "error"
    })
    .addCase(categoryRepositary.addNew.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(categoryRepositary.addNew.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items?.push(action.payload)
    })
    .addCase(categoryRepositary.addNew.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(categoryRepositary.updateOld.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(categoryRepositary.updateOld.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.map((category)=> {
        if(category.id === action.payload.id)
            return {...action.payload}

        return category
      }) || null 
    })
    .addCase(categoryRepositary.updateOld.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(categoryRepositary.toggleStauts.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(categoryRepositary.toggleStauts.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.map((category)=> {
        if(category.id === action.payload)
            category.isDeleted = !category.isDeleted
        return category
      }) || null 
    })
    .addCase(categoryRepositary.toggleStauts.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(categoryRepositary.delteById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(categoryRepositary.delteById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.filter(category => category.id !== action.payload) || null
    })
    .addCase(categoryRepositary.delteById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(categoryRepositary.getItemById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(categoryRepositary.getItemById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.item = action.payload
    })
    .addCase(categoryRepositary.getItemById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
      state.error = returnError(action.payload);
    })
}  
})


export const selectCategoryState = (state: RootState) => state.category;
export default categorySlice.reducer;