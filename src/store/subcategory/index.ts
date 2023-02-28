import {createSlice } from '@reduxjs/toolkit'
import {SubCategoryState} from '../../helpers/types'
import { RootState } from '..';
import repositary from './../ApiMethodsGeneric';
import { returnError } from '../../helpers/validation';

const baseUrl: string = 'https://localhost:5001/api/ProductSubCategory/'
const reducer: string = 'subCategory'

export const supCategoryRepositary = {
  fetchAll: repositary.fetchAll(baseUrl, reducer),
  addNew: repositary.addNew(baseUrl, reducer),
  updateOld:repositary.updateOld(baseUrl, reducer),
  toggleStauts: repositary.toggleStauts(baseUrl, reducer),
  delteById: repositary.delteById(baseUrl, reducer),
  getItemById: repositary.getItemById(baseUrl, reducer)
}

const initialState: SubCategoryState = {
  items: null,
  isLoading: "loading",
  isApiActionLoading:null,
  error: null,
  item:null
}


export const supCategorySlice = createSlice({
  name: 'supCategories',
  initialState,
  reducers: {},
  extraReducers:
  (builder) => {      
    builder
    .addCase(supCategoryRepositary.fetchAll.pending, (state, action)=>{
        state.isLoading = "loading"
    })
    .addCase(supCategoryRepositary.fetchAll.fulfilled, (state, action)=>{
        state.isLoading = "success"
        state.items = action.payload;
    })
    .addCase(supCategoryRepositary.fetchAll.rejected, (state, action)=>{
        state.isLoading = "error"
    })
    .addCase(supCategoryRepositary.addNew.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(supCategoryRepositary.addNew.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items?.push(action.payload)

    })
    .addCase(supCategoryRepositary.addNew.rejected, (state, action)=>{
      state.isApiActionLoading = "error"

    })
    .addCase(supCategoryRepositary.updateOld.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(supCategoryRepositary.updateOld.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.map((subCategory)=> {
        if(subCategory.id === action.payload.id)
            return {...action.payload}

        return subCategory

      }) || null 

    })
    .addCase(supCategoryRepositary.updateOld.rejected, (state, action)=>{
      state.isApiActionLoading = "error"

    })
    .addCase(supCategoryRepositary.toggleStauts.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(supCategoryRepositary.toggleStauts.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.map((subCategory)=> {
        if(subCategory.id === action.payload)
            subCategory.isDeleted = !subCategory.isDeleted
        return subCategory
      }) || null 
    })
    .addCase(supCategoryRepositary.toggleStauts.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(supCategoryRepositary.delteById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(supCategoryRepositary.delteById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.filter(subCategory => subCategory.id !== action.payload) || null
    })
    .addCase(supCategoryRepositary.delteById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(supCategoryRepositary.getItemById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(supCategoryRepositary.getItemById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.item = action.payload
    })
    .addCase(supCategoryRepositary.getItemById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
      state.error = returnError(action.payload);
    })
}  
})

export const selectSubCategoriesState = (state: RootState) => state.subCategory;
export default supCategorySlice.reducer;