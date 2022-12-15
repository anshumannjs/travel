import { createSlice } from "@reduxjs/toolkit";

export const cityInfos=createSlice({
    name:'cityInfo',
    initialState:{},
    reducers:{
        newCity:(state,obj)=>{
            state.city1=obj.payload
        }
    }
});

export const {newCity}=cityInfos.actions;
export default cityInfos.reducer;