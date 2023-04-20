import React, { useState, useEffect } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"

const CollectionEdit = ({ collections, current_user, updateCollection }) => {
  const [editCollection, setEditCollection] = useState()
  const [collectionName, setCollectionName] = useState()
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    if (collections.length > 0) {
      let currentCollection = collections.find(
        (collection) => collection.id === +id
      )
      setCollectionName(currentCollection.name)
      setEditCollection({
        name: currentCollection.name,
        category: currentCollection.category,
        description: currentCollection.description,
        condition: currentCollection.condition,
        image: currentCollection.image,
        user_id: current_user?.id,
      })
    }
  }, [collections])

  const handleChange = (e) => {
    setEditCollection({ ...editCollection, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateCollection(editCollection, id)
    navigate(`/collectionshow/${id}`)
  }
  if (editCollection) {
    return (
      <div className="create-form">
        <h1>Edit {collectionName}</h1>
        <Form>
          <FormGroup floating>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              value={editCollection.name}
            />
            <Label for="name">Name</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="category"
              name="category"
              type="select"
              onChange={handleChange}
              value={editCollection.category}
            >
              <option>Action Figure</option>
              <option>Trading Card</option>
              <option>Lego</option>
              <option>Model Kit</option>
              <option>Coin</option>
              <option>Sports Memorabilia</option>
              <option>Toy</option>
              <option>Other</option>
            </Input>
            <Label for="category">Category</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="description"
              type="textarea"
              onChange={handleChange}
              value={editCollection.description}
            />
            <Label for="description">Description</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="condition"
              type="select"
              onChange={handleChange}
              value={editCollection.condition}
            >
              <option>In Box</option>
              <option>Like New</option>
              <option>Used</option>
              <option>Damage</option>
            </Input>
            <Label for="condition">Condition</Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="image"
              type="text"
              onChange={handleChange}
              value={editCollection.image}
            />
            <Label for="image">Image</Label>
          </FormGroup>

          <Button onClick={handleSubmit}>Update {collectionName}</Button>
        </Form>
      </div>
    )
  } else {
    return <p>Loading... Please Wait</p>
  }
}
export default CollectionEdit
