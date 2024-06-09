import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ApiInstance from "../../api/ApiInstance"


export const fetchCustomer = createAsyncThunk('customer/fetchCustomer',async () => {
  const response = await ApiInstance.get('/customers')
  
  return response.data.data
})

const initialState = {
  customers : [],
  selectedCustomer : ''
}

export const customersSlice = createSlice({
  name : "customers",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
      .addCase(fetchCustomer.fulfilled,(state,action)=>{
        state.customers = action.payload
      })
  }
})

export default customersSlice.reducer