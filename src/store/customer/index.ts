import {createSlice } from '@reduxjs/toolkit'
import { RootState } from '..';

import repositary from '../ApiMethodsGeneric';

const baseUrl: string = 'https://localhost:5001/api/Users/customers'
const reducer: string = 'customers'


export const customerRepository = {
  fetchAll: repositary.fetchAll(baseUrl, reducer),
}

const initialState = {
  items: null,
  isLoading: "loading",
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers:
  (builder) => {      
    builder
    .addCase(customerRepository.fetchAll.pending, (state, action)=>{
        state.isLoading = "loading"
    })
    .addCase(customerRepository.fetchAll.fulfilled, (state, action)=>{
        state.isLoading = "success"
        state.items = action.payload;
    })
    .addCase(customerRepository.fetchAll.rejected, (state, action)=>{
        state.isLoading = "error"
    })
}  
})

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

export const selectCustomerState = (state: RootState) => state.customer;
export default customerSlice.reducer;