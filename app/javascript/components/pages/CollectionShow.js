import React from "react"
import { NavLink, useParams, useNavigate } from "react-router-dom"
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardFooter,
  CardImg,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap"

const CollectionShow = ({ collections, deleteCollection }) => {
  let { id } = useParams()
  const navigate = useNavigate()
  const currentCollection = collections?.find(
    (collection) => collection.id === +id
  )

  const handleSubmit = () => {
    deleteCollection(currentCollection.id)
    navigate("/collectionindex")
  }

  return (
    <>
      {currentCollection && (
        <>
          <h1 className="show-header">{currentCollection.name}</h1>
          <div className="show-page">
            <Card
              style={{
                width: "30vw",
              }}
            >
              <CardImg
                alt={currentCollection.name}
                src={currentCollection.image}
              />
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
              <CardFooter>
                <Button>
                  <NavLink to={`/collectionedit/${currentCollection.id}`}>
                    Edit
                  </NavLink>
                </Button>
                <Button onClick={handleSubmit}>Delete</Button>
              </CardFooter>
            </Card>
          </div>
        </>
      )}
    </>
  )
}

export default CollectionShow
