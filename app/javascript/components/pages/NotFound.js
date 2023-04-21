import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "reactstrap"

const NotFound = () => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/collectionindex")
  }

  return (
    <>
      <div className="not-found-page">
        <h1>Oops, looks like you got turned around</h1>
        <div className="not-found-content">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/15/13/47/robot-2752255_1280.png"
            alt="Broken robot"
            height="400px"
            width="400px"
          />
          <Button onClick={handleSubmit}>Back to your Collection</Button>
        </div>
      </div>
    </>
  )
}

export default NotFound
