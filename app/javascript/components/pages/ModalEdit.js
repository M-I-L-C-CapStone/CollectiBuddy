import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from "reactstrap"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useParams } from "react-router-dom"

const ModalEdit = ({ currentCollection, current_user, updateCollection, toggle, modal }) => {
    const [editCollection, setEditCollection] = useState({
        name: currentCollection.name,
        category: currentCollection.category,
        description: currentCollection.description,
        condition: currentCollection.condition,
        image: currentCollection.image,
        user_id: current_user?.id,
      })
    const { id } = useParams()

    const handleChange = (e) => {
        setEditCollection({ ...editCollection, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = () => {
        updateCollection(editCollection, id)
        toggle()
    }

    return (
        <>
            <div>
                <Button color="danger" onClick={toggle}>
                Edit
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className="modal-header">Edit {currentCollection.name} </ModalHeader>
                <ModalBody className="edit-modal">
                <div className="create-form">
                <Form className="modal-form">
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
                <Button onClick={handleSubmit}>Update {currentCollection.name}</Button>
                </Form>
            </div>
                </ModalBody>
                </Modal>
            </div>
        </>
    )
}

export default ModalEdit