import {createSlice } from '@reduxjs/toolkit'
import { RootState } from '..';
import { toast } from 'react-hot-toast';
import { returnError } from '../../helpers/validation';
import { IError } from './../../helpers/types';

interface ReportState {
    error: null | IError
}

const initialState: ReportState = {
  error: null
}

// let alert:string|undefined; 


export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    handleError: function(state, action) {
        state.error = returnError(action.payload);
    }
  },    
})


export const selectReportState = (state: RootState) => state.report;
export const {handleError} = reportSlice.actions
export default reportSlice.reducer;