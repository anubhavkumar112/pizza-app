import { createSlice } from "@reduxjs/toolkit";
const CreateSlice= createSlice({
    name:"search",
    initialState:{
        search:""
    },
    reducers:{
        setSearch:(state,action)=>{
            state.search=action.payload

        }
    }
})
export const {setSearch}= CreateSlice.actions;
export default CreateSlice.reducer;