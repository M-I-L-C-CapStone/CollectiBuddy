import React, { useState } from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"
import { NavLink } from 'react-router-dom'

const CollectionNew = ({ current_user, createCollection }) => {
  const [myCollection, setMyCollection] = useState({
    name: "",
    category: "",
    description: "",
    condition: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png",
    user_id: current_user?.id,
  })

  const handleChange = (e) => {
    setMyCollection({ ...myCollection, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCollection(myCollection)
  }

  return (
    <>
      <div className="new-page">
        <h1>Add an Item</h1>
        <div className="create-form">
          <Form>
            <FormGroup floating>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
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
                value={myCollection.category}
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
                id="description"
                name="description"
                type="textarea"
                placeholder="Description"
                onChange={handleChange}
                value={myCollection.description}
              />
              <Label for="description">Description</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="condition"
                name="condition"
                type="select"
                onChange={handleChange}
                value={myCollection.condition}
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
                id="image"
                name="image"
                type="text"
                onChange={handleChange}
                value={myCollection.image}
              />
              <Label for="image">Image</Label>
            </FormGroup>
              <NavLink to={`/collectionindex`} onClick={handleSubmit} className="btn">Add Item</NavLink>
          </Form>
        </div>
      </div>
    </>
  )
}

export default CollectionNew
