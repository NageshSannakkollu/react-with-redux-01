import React from 'react'
import "./index.css"
import { useSelector } from 'react-redux'

const NewSubscriber = () => {
    const usersList = useSelector((state) =>state.user.users)

  return (
    <div className='new-subscriber-container'>
        <h3>NewSubscriber:</h3>
        {usersList.map((eachUser,index) => {
            return(
                <ul key={index}>
                    <li>{eachUser}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default NewSubscriber