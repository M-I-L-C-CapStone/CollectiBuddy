import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {Card, CardBody, Button, CardTitle, CardSubtitle} from "reactstrap"

const CollectionShow = ({collections}) => {
  let {id} = useParams()
  const currentCollection = collections?.find((collection) => collection.id === +id)

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
          <Button>
            <NavLink to={"/collectiondelete"}>
              Delete
            </NavLink>
          </Button>
        </Card>
      }
    </>
  )
}

export default CollectionShow