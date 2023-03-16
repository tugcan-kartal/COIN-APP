import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading: false,
    coins: [],
    error: "",
};

export const fetchCoins=createAsyncThunk("fetchCoins",async()=>{
    const response=await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false");
    return response.data;
});

const heroSlice=createSlice({
    name: "coins",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchCoins.pending,(state,action)=>{
            state.loading=true
            state.coins=[]
            state.error=""
        })
        builder.addCase(fetchCoins.fulfilled,(state,action)=>{
            state.loading=false
            state.coins=action.payload
            state.error=""
        })
        builder.addCase(fetchCoins.rejected,(state,action)=>{
            state.loading=false
            state.coins=[]
            state.error="Bad Fetching"
        })
        
    }
})

export default heroSlice.reducer;