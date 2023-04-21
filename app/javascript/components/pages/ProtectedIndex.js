import React from "react"
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap"
import { NavLink } from "react-router-dom"

const ProtectedIndex = ({ collections, current_user }) => {
  const myCollections = collections?.filter(
    (collection) => current_user?.id === collection.user_id
  )
  return (
    <>
      <h1 className="index-header">Your Collection</h1>
      <div className="collections">
        {myCollections?.map((collection, index) => {
          return (
            <Card
              key={index}
              style={{
                width: "18rem",
              }}
            >
              <img alt={collection.name} src={collection.image} />
              <CardBody>
                <CardTitle tag="h5">{collection.name}</CardTitle>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>{collection.category}</ListGroupItem>
              </ListGroup>
              <CardBody>
                <Button>
                  <NavLink to={`/collectionshow/${collection.id}`}>
                    See More Info
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default ProtectedIndex
