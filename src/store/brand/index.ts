import { createSlice } from '@reduxjs/toolkit'
import { BrandState } from '../../helpers/types'
import { RootState } from '..';
import repositary from './../ApiMethodsGeneric';
import { returnError } from './../../helpers/validation';

const baseUrl: string ='https://localhost:5001/api/ProductBrand/' 
const reducer: string ='brand'

export const brandRepositary = {
  fetchAll: repositary.fetchAll(baseUrl, reducer),
  addNew: repositary.addNew(baseUrl, reducer),
  updateOld:repositary.updateOld(baseUrl, reducer),
  toggleStauts: repositary.toggleStauts(baseUrl, reducer),
  delteById: repositary.delteById(baseUrl, reducer),
  getItemById: repositary.getItemById(baseUrl, reducer)
}

const initialState: BrandState = {
  items: null,
  isLoading: "loading",
  isApiActionLoading: null,
  error: null,
  item: null
}

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers:
    (builder) => {      
      builder
      .addCase(brandRepositary.fetchAll.pending, (state, action)=>{
          state.isLoading = "loading"
      })
      .addCase(brandRepositary.fetchAll.fulfilled, (state, action)=>{
          state.isLoading = "success" 
          state.items = action.payload;
      })
      .addCase(brandRepositary.fetchAll.rejected, (state, action)=>{
          state.isLoading = "error"
          state.error = returnError(action.payload);
      })
      .addCase(brandRepositary.addNew.pending, (state, action)=>{
        state.isApiActionLoading = "loading"
      })
      .addCase(brandRepositary.addNew.fulfilled, (state, action)=>{
        state.isApiActionLoading = "success"
        state.items?.push(action.payload)
      })
      .addCase(brandRepositary.addNew.rejected, (state, action)=>{
        state.isApiActionLoading = "error"
        state.error = returnError(action.payload);
      })
      .addCase(brandRepositary.updateOld.pending, (state, action)=>{
        state.isApiActionLoading = "loading"
      })
      .addCase(brandRepositary.updateOld.fulfilled, (state, action)=>{
        state.isApiActionLoading = "success"
        state.items = state.items?.map((brand)=> {
          if(brand.id === action.payload.id)
              return {...action.payload}
          return brand

        }) || null 
      })
      .addCase(brandRepositary.updateOld.rejected, (state, action)=>{
        state.isApiActionLoading = "error"
        state.error = returnError(action.payload);
      })
      .addCase(brandRepositary.toggleStauts.pending, (state, action)=>{
        state.isApiActionLoading = "loading"        
      })
      .addCase(brandRepositary.toggleStauts.fulfilled, (state, action)=>{
        state.isApiActionLoading = "success"
        state.items = state.items?.map((brand)=> {
          if(brand.id === action.payload)
              brand.isDeleted = !brand.isDeleted
          return brand
        }) || null 
      })
      .addCase(brandRepositary.toggleStauts.rejected, (state, action)=>{
        state.isApiActionLoading = "error"
        state.error = returnError(action.payload);
      })
      .addCase(brandRepositary.delteById.pending, (state, action)=>{
        state.isApiActionLoading = "loading"        
      })
      .addCase(brandRepositary.delteById.fulfilled, (state, action)=>{
        state.isApiActionLoading = "success"
        state.items = state.items?.filter(brand => brand.id !== action.payload) || null
      })
      .addCase(brandRepositary.delteById.rejected, (state, action)=>{
        state.isApiActionLoading = "error"
        state.error = returnError(action.payload);
      })
      .addCase(brandRepositary.getItemById.pending, (state, action)=>{
        state.isApiActionLoading = "loading"        
      })
      .addCase(brandRepositary.getItemById.fulfilled, (state, action)=>{
        state.isApiActionLoading = "success"
        state.item = action.payload
      })
      .addCase(brandRepositary.getItemById.rejected, (state, action)=>{
        state.isApiActionLoading = "error"
        state.error = returnError(action.payload);
      })
  }  
})


export const selectBrandState = (state: RootState) => state.brand;
export default brandSlice.reducer;