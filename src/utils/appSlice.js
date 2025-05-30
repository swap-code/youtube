import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        // searchTerm:"",
        // mode:"light",
        // mobileMenuOpen:false,
        isMenuOpen:true,
        // isLoggedIn:false,
        // user:null,
    },
    reducers:{
        // setSearchTerm:(state,action)=>{
        //     state.searchTerm=action.payload;
        // },
        // setMode:(state,action)=>{
        //     state.mode=action.payload;
        // },
        // setMobileMenuOpen:(state,action)=>{
        //     state.mobileMenuOpen=action.payload;
        // },
        setIsMenuOpen:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
        // setIsLoggedIn:(state,action)=>{
        //     state.isLoggedIn=action.payload;
        // },
        // setUser:(state,action)=>{
        //     state.user=action.payload;
        // }
    }
    
})
export default appSlice.reducer;
export const {setIsMenuOpen,closeMenu}=appSlice.actions;
