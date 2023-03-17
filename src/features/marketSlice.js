import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading: false,
    coins: [],
    currentPage: 3,
    error: "",
};

export const fetchCoinList=createAsyncThunk("fetchCoinList",async()=>{
    let currentPage=initialState.currentPage;
    const response=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`);
    return response.data;
});

const marketSlice=createSlice({
    name: "coinList",
    initialState,
    reducers: {
        changePage: (state,action)=>{
            state.currentPage=action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCoinList.pending,(state,action)=>{
            state.loading=true
            state.coins=[]
            state.error=""
        })
        builder.addCase(fetchCoinList.fulfilled,(state,action)=>{
            state.loading=false
            state.coins=action.payload
            state.error=""
        })
        builder.addCase(fetchCoinList.rejected,(state,action)=>{
            state.loading=false
            state.coins=[]
            state.error="Bad Fetching"
        })
        
    }
})

export const {changePage}=marketSlice.actions;
export default marketSlice.reducer;