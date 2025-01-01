import { configureStore } from "@reduxjs/toolkit";
import userLikes from "./redux/likeSlice"
import userSubscribeList from "./redux/userSlice"
import userCommentList from "./redux/commentSlice"


export const store = configureStore({
    reducer:{
        likeCount:userLikes,
        user:userSubscribeList,
        comment:userCommentList
    }
})