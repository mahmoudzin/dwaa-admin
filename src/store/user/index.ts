import {createSlice } from '@reduxjs/toolkit'
import { RootState } from '..';
import repositary from '../ApiMethodsGeneric';
import { returnError } from '../../helpers/validation';
import { UserState } from '../../helpers/types';

const baseUrl: string = 'https://localhost:5001/api/Users/'
const reducer: string = 'user'


export const userRepositary = {
  fetchAll: repositary.fetchAll(`${baseUrl}admins`, reducer),
  addNew: repositary.addNew(baseUrl, reducer),
  updateOld:repositary.updateOld(baseUrl, reducer),
  delteById: repositary.delteById(baseUrl, reducer),
  getItemById: repositary.getItemById(baseUrl, reducer)
}

const initialState:UserState = {
  items: null,
  isLoading: "loading",
  isApiActionLoading: null,
  error: null,
  item: null
}
export const userState = createSlice({
  name: reducer,
  initialState,
  reducers: {},
  extraReducers:
  (builder) => {      
    builder
    .addCase(userRepositary.fetchAll.pending, (state, action)=>{
        state.isLoading = "loading"
    })
    .addCase(userRepositary.fetchAll.fulfilled, (state, action)=>{
        state.isLoading = "success"
        state.items = action.payload;
    })
    .addCase(userRepositary.fetchAll.rejected, (state, action)=>{
        state.isLoading = "error"
    })
    .addCase(userRepositary.addNew.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(userRepositary.addNew.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items?.push(action.payload)
    })
    .addCase(userRepositary.addNew.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(userRepositary.updateOld.pending, (state, action)=>{
      state.isApiActionLoading = "loading"
    })
    .addCase(userRepositary.updateOld.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.map((user)=> {
        if(user.id === action.payload.id)
            return {...action.payload}

        return user

      }) || null 
    })
    .addCase(userRepositary.updateOld.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(userRepositary.delteById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(userRepositary.delteById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.items = state.items?.filter(user => user.id !== action.payload) || null
    })
    .addCase(userRepositary.delteById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
    })
    .addCase(userRepositary.getItemById.pending, (state, action)=>{
      state.isApiActionLoading = "loading"        
    })
    .addCase(userRepositary.getItemById.fulfilled, (state, action)=>{
      state.isApiActionLoading = "success"
      state.item = action.payload
    })
    .addCase(userRepositary.getItemById.rejected, (state, action)=>{
      state.isApiActionLoading = "error"
      state.error = returnError(action.payload);
    })
}  
})



export const selectUserstate = (state: RootState) => state.user;
export default userState.reducer;