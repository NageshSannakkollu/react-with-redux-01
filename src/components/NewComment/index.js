import React from 'react'
import "./index.css"
import { useSelector } from 'react-redux'

const NewComment = () => {

    const commentList  = useSelector((state) => state.comment.commentList)

  return (
    <div className='new-subscriber-container'>
        <h3>NewComment:</h3>
        {commentList.map((eachItem,index) => {
            return(
                <ul key={index}>
                    <li>{eachItem}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default NewComment