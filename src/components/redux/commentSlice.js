import { createSlice } from "@reduxjs/toolkit";


export const commentSlice = createSlice({
    name:'comment',
    initialState:{
        commentList:[]
    },
    reducers:{
        addComment:(state,action) => {
            state.commentList.push(action.payload)
        }
    }
})

export const {addComment} = commentSlice.actions 
export default commentSlice.reducer