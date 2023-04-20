import React from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import {Card, CardBody, Button, CardTitle, CardSubtitle} from "reactstrap"

const CollectionShow = ({collections, deleteCollection}) => {
  let {id} = useParams()
  const navigate = useNavigate()
  const currentCollection = collections?.find((collection) => collection.id === +id)

  const handleSubmit = () => {
    deleteCollection(currentCollection.id)
    navigate("/collectionindex")
  }

  return (
    <>
      <h1>Your Collectible</h1>
      {currentCollection &&
        <Card
          style={{
            width: '18rem'
          }}
        >
          <img
            alt={currentCollection.name}
            src={currentCollection.image}
          />
          <CardBody>
            <CardTitle tag="h5">
              {currentCollection.name}
            </CardTitle>
            <CardSubtitle>
              Category: {currentCollection.category}, Description:
            {currentCollection.description}
            </CardSubtitle>
            <CardSubtitle>
              Condition: {currentCollection.condition}
            </CardSubtitle>
          </CardBody>
          <Button>
            <NavLink to={`/collectionedit/${currentCollection.id}`}>
              Edit
            </NavLink>
          </Button>
          <Button onClick={handleSubmit}>         
              Delete
          </Button>
        </Card>
      }
    </>
  )
}

export default CollectionShow