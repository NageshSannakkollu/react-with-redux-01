import React from 'react'
import { useSelector } from 'react-redux'
import "./index.css"
const Navbar = () => {

    const likesCount = useSelector((state) => state.likeCount.value)
    const usersList = useSelector((state) =>state.user.users)
    const commentList  = useSelector((state) => state.comment.commentList)
  return (
    <div>
    <div className='navbar-container'>
        <h2>Redux</h2>
        <h2>Subscribers:{usersList.length}</h2>
        <h2>Comments:{commentList.length}</h2>
        <h2>Likes:{likesCount}</h2>
        </div>
    <hr/>
    </div>
  )
}

export default Navbar