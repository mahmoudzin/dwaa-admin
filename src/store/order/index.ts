import {createSlice } from '@reduxjs/toolkit'
import { RootState } from '..';

import repositary from '../ApiMethodsGeneric';

const baseUrl: string = 'https://localhost:5001/api/Order/allOrders'
const reducer: string = 'order'


export const orderRepository = {
  fetchAll: repositary.fetchAll(baseUrl, reducer),
}

const initialState = {
  items: null,
  isLoading: "loading",
}

export const orderSlice = createSlice({
  name: reducer,
  initialState,
  reducers: {},
  extraReducers:
  (builder) => {      
    builder
    .addCase(orderRepository.fetchAll.pending, (state, action)=>{
        state.isLoading = "loading"
    })
    .addCase(orderRepository.fetchAll.fulfilled, (state, action)=>{
        state.isLoading = "success"
        state.items = action.payload;
    })
    .addCase(orderRepository.fetchAll.rejected, (state, action)=>{
        state.isLoading = "error"
    })
}  
})

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

export const selectOrderState = (state: RootState) => state.order;
export default orderSlice.reducer;