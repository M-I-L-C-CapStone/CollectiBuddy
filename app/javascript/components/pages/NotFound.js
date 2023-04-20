import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/collectionindex")
  }

  return (
    <>
      <h1>Oops, looks like you got turned around</h1>
      <img src="https://cdn.pixabay.com/photo/2017/09/15/13/47/robot-2752255_1280.png" alt="Broken robot" height="600px" width="600px"/>
      <button onClick={handleSubmit}>Back to your Collection</button>
    </>
  )
}

export default NotFound