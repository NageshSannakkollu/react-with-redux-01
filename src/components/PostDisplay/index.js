import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/likeSlice'
import { addUser } from '../redux/userSlice'
import NewSubscriber from "../NewSubscriber"
import NewComment from "../NewComment"
import { addComment } from '../redux/commentSlice'

import "./index.css"

    
    const PostDisplay = () => {

        const [subscribe,setSubscribe] = useState(false)
        const [comment,setComment] = useState(false)
        const [newComment,setNewComment] = useState("")
        const [username,setUsername] = useState('')


        const dispatch = useDispatch()

        const changeInputName = e => {
            setUsername(e.target.value)
        }

        const subscribeClick = e => {
            setSubscribe(true)
            setComment(false)
        }
        const commentClick = e => {
            setComment(true)
            setSubscribe(false)
        }

        const likeClick = e => {
            dispatch(increment())
        }

        const userInputHandler = e => {
            e.preventDefault()
            dispatch(addUser(username))
            setUsername("")
        }

        const commentInputHandler = e => {
            e.preventDefault()
            dispatch(addComment(newComment))
            setNewComment('')
        }

        const changeCommentInput = e => {
            setNewComment(e.target.value)
        }

      return (
        <div className='main-subscriber-comment-container'>
        <div className='image-buttons-container'>
            <div className='image-container'>
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1730776303/960x0_cmbszp.jpg" alt='resort' className='resort-image ' />
            </div>
            <div className='button-container'>
                <button type='button' className='buttons' onClick={subscribeClick}>Subscribe</button>
                <button type='button' className='buttons' onClick={commentClick}>Comment</button>
                <button type='button' className='buttons' onClick={likeClick}>Like</button>
            </div>
            <div>
                {subscribe && 
                <form className='input-form-container' onSubmit={userInputHandler}>
                    <input type='text' className='input-form' value={username} placeholder='Enter name..' onChange={changeInputName}/>
                    <button type='submit' className='buttons' >submit</button>
                </form>}
                {comment && 
                <form className='input-form-container' onSubmit={commentInputHandler}>
                    <textarea type='text' value={newComment} className='input-form' rows="2" cols="20" onChange={changeCommentInput}/>
                    <button type='submit' className='buttons' >send</button>
                </form>}
            </div>
            
            </div>
            <div className='subscriber-comment-container'>
                <NewSubscriber/>
                <hr className='hr-line'/>
                <NewComment/>
            </div>
            
        </div>
      )
    }
    
    export default PostDisplay