import { createSlice } from '@reduxjs/toolkit'

export const likeSlice = createSlice({
    name:"likeCount",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state) => {
            state.value += 1
        }
    }
})

export const {increment} = likeSlice.actions
export default likeSlice.reducer 