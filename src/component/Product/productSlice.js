import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchApi = createAsyncThunk(
  'api/fetchApiData',
  async () => {
    const response = await axios.get('https://65f2ca99105614e6549ed60b.mockapi.io/productdata');
    return response.data;
  }
);

export const postApi = createAsyncThunk(
  'api/fetchApiData',
  async (productData) => {
    const response = await axios.post('https://65f2ca99105614e6549ed60b.mockapi.io/productdata',productData);
    return response.data;
  }
);

const initialState = {
    product:[],
    loading:'idle',
    error:null
};
// console.log(initialState.product);
export const productSlice = createSlice({
     name: "api",
     initialState:initialState,
     reducers:{
        deleteProduct:(state, action) => {
            state.product = state.product.filter((item) => item.id !== action.payload)
        },
     },
     extraReducers:(builder) => {
        builder
        .addCase(fetchApi.pending,(state) => {
            state.loading = 'loading'
        })
        .addCase(fetchApi.fulfilled,(state, action) => {
          state.loading = 'idle'
          state.product.push(action.payload)
        })
        .addCase(fetchApi.rejected,(state, action) => {
          state.loading = 'idle'
          state.error = action.error.message
        });

     },


});

export const { deleteProduct } = productSlice.actions;
export const selectApiData = (state) => state.api.data;
export default productSlice.reducer;

