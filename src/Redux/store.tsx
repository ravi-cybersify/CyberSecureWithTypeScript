import { configureStore } from "@reduxjs/toolkit";
import userSlices from './userSlice.tsx'


const store = configureStore({
    reducer: userSlices
})


export default store