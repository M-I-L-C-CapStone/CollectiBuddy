import React from "react"
import { NavLink, useParams } from "react-router-dom"
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap"

const CollectionShow = ({ collections }) => {
  let { id } = useParams()
  const currentCollection = collections?.find(
    (collection) => collection.id === +id
  )

  return (
    <>
      {currentCollection && (
        <>
          <h1 className="show-header">{currentCollection.name}</h1>
          <div className="show-page">
            <Card
              style={{
                width: "50vw",
              }}
            >
              <img alt={currentCollection.name} src={currentCollection.image} />
              <CardBody>
                <CardTitle tag="h5">{currentCollection.name}</CardTitle>
                <CardText>{currentCollection.description}</CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>{currentCollection.category}</ListGroupItem>
                <ListGroupItem>
                  Condition: {currentCollection.condition}
                </ListGroupItem>
              </ListGroup>
              <CardBody>
                <Button>
                  <NavLink to={`/collectionedit/${currentCollection.id}`}>
                    Edit
                  </NavLink>
                </Button>
                <Button>
                  <NavLink to={"/collectiondelete"}>Delete</NavLink>
                </Button>
              </CardBody>
            </Card>
          </div>
        </>
      )}
    </>
  )
}

export default CollectionShow
