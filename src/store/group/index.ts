import {createSlice } from '@reduxjs/toolkit'
import {GroupState } from '../../helpers/types'
import { RootState } from '..';

import repositary from './../ApiMethodsGeneric';
import { returnError } from './../../helpers/validation';

const baseUrl: string = 'https://localhost:5001/api/ProductGroup/'
const reducer: string = 'group'


export const groupRepositary = {
  fetchAll: repositary.fetchAll(baseUrl, reducer),
  addNew: repositary.addNew(baseUrl, reducer),
  updateOld:repositary.updateOld(baseUrl, reducer),
  toggleStauts: repositary.toggleStauts(baseUrl, reducer),
  delteById: repositary.delteById(baseUrl, reducer),
  getItemById: repositary.getItemById(baseUrl, reducer)
}

const initialState: GroupState = {
  items: null,
  isLoading: "loading",
  isApiActionLoading: null,
  error: null,
  item: null
}

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
  extraReducers:
  (builder) => {      
    builder
    .addCase(groupRepositary.fetchAll.pending, (state, action)=>{
        state.isLoading = "loading"
    })
    .addCase(groupRepositary.fetchAll.fulfilled, (state, action)=>{
        state.isLoading = "success"
        state.items = action.payload;
    })
    .addCase(groupRepositary.fetchAll.rejected, (state, action)=>{
        state.isLoading = "error"
    })
    .addCase(groupRepositary.addNew.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(groupRepositary.addNew.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items?.push(action.payload)
    })
    .addCase(groupRepositary.addNew.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(groupRepositary.updateOld.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(groupRepositary.updateOld.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.map((group)=> {
        if(group.id === action.payload.id)
            return {...action.payload}

        return group

      }) || null 
    })
    .addCase(groupRepositary.updateOld.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(groupRepositary.toggleStauts.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(groupRepositary.toggleStauts.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.map((group)=> {
        if(group.id === action.payload)
            group.isDeleted = !group.isDeleted
        return group
      }) || null 
    })
    .addCase(groupRepositary.toggleStauts.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(groupRepositary.delteById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(groupRepositary.delteById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.filter(group => group.id !== action.payload) || null
    })
    .addCase(groupRepositary.delteById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(groupRepositary.getItemById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(groupRepositary.getItemById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.item = action.payload
    })
    .addCase(groupRepositary.getItemById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
      state.error = returnError(action.payload);
    })
}  
})

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

export const selectGroupState = (state: RootState) => state.group;
export default groupSlice.reducer;