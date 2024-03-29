import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast, { useToasterStore } from "react-hot-toast"
import axiosInstance from "../../helper/axiosInstance.js"

const initialState = {
    courseData:[]
}

export const getAllCourses = createAsyncThunk("/course/get",async()=>{
    try {
        // Fetch data from the api 
        const response = axiosInstance("/courses");
        toast.promise(response, {
            loading:"loading course data...",
            success:"Courses loaded Successfully",
            error:"Failed to get the courses"
        })
        return (await response).data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})
const courseSlice = createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCourses.fulfilled, (state,action)=>{
            if(action.payload){
                state.courseData = [...action.payload]
            }
        })

    }
})

export default courseSlice.reducer;