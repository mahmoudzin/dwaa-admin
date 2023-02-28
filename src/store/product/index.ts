import {createSlice } from '@reduxjs/toolkit'
import {ProductState } from '../../helpers/types'
import { RootState } from '..';
import repositary from './../ApiMethodsGeneric';
import { returnError } from './../../helpers/validation';

const baseUrl: string = 'https://localhost:5001/api/Product/'
const reducer: string = 'product'


export const productRepositary = {
  fetchAll: repositary.fetchAll(baseUrl, reducer),
  addNew: repositary.addNew(baseUrl, reducer),
  updateOld:repositary.updateOld(baseUrl, reducer),
  toggleStauts: repositary.toggleStauts(baseUrl, reducer),
  delteById: repositary.delteById(baseUrl, reducer),
  getItemById: repositary.getItemById(baseUrl, reducer)
}

const initialState: ProductState = {
  items: null,
  isLoading: "loading",
  isApiActionLoading: null,
  error: null,
  item: null
}
export const productSlice = createSlice({
  name: reducer,
  initialState,
  reducers: {},
  extraReducers:
  (builder) => {      
    builder
    .addCase(productRepositary.fetchAll.pending, (state, action)=>{
        state.isLoading = "loading"
    })
    .addCase(productRepositary.fetchAll.fulfilled, (state, action)=>{
        state.isLoading = "success"
        state.items = action.payload.data;
    })
    .addCase(productRepositary.fetchAll.rejected, (state, action)=>{
        state.isLoading = "error"
    })
    .addCase(productRepositary.addNew.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(productRepositary.addNew.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items?.push(action.payload)
    })
    .addCase(productRepositary.addNew.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(productRepositary.updateOld.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(productRepositary.updateOld.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.map((product)=> {
        if(product.id === action.payload.id)
            return {...action.payload}

        return product

      }) || null 
    })
    .addCase(productRepositary.updateOld.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(productRepositary.toggleStauts.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(productRepositary.toggleStauts.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.map((product)=> {
        if(product.id === action.payload)
            product.isDeleted = !product.isDeleted
        return product
      }) || null 
    })
    .addCase(productRepositary.toggleStauts.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(productRepositary.delteById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(productRepositary.delteById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.filter(product => product.id !== action.payload) || null
    })
    .addCase(productRepositary.delteById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(productRepositary.getItemById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(productRepositary.getItemById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.item = action.payload
    })
    .addCase(productRepositary.getItemById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
      state.error = returnError(action.payload);
    })
}  
})



export const selectProductstate = (state: RootState) => state.product;
export default productSlice.reducer;