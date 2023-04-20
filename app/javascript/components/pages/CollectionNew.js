import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Button, Input } from 'reactstrap'

const CollectionNew = ({ current_user, createCollection }) => {
  const navigate = useNavigate()
  const [myCollection, setMyCollection] = useState({
      name:"",
      category:"",
      description:"",
      condition:"",
      image:"https://upload.wikimedia.org/wikipedia/commons/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png",
      user_id: current_user?.id
  })

  const handleChange = (e) => {
      setMyCollection({...myCollection, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
      createCollection(myCollection)
      navigate("/collectionindex")
  }

  return (
      <>
          <div className="create-form">
          <h1>Add an Item</h1>
          <Form>
            <FormGroup floating>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
              />
              <Label for="name">Name</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="category"
                name="category"
                type="select"
                onChange={handleChange}
                value={createCollection.category}
              >
                <option></option>
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
                value={createCollection.description}
              />
              <Label for="description">Description</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="condition"
                name="condition"
                type="select"
                onChange={handleChange}
                value={createCollection.condition}
              >
                <option></option>
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
                value={createCollection.image}
              />
              <Label for="image">Image</Label>
            </FormGroup>

            <Button onClick={handleSubmit}>Add Item</Button>
          </Form>
        </div>
      </>
  )
}

export default CollectionNew