import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ModalEdit from "../components/pages/CollectionEdit"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { fireEvent } from "@testing-library/react"
import collections from "../components/mockCollections"

describe("<ModalEdit />", () => {

  const updateCollection = jest.fn()
  const handleSubmit = jest.fn()
  const toggle = jest.fn()
  const handleChange = jest.fn()
  const editCollection = jest.fn()

  const user = {
      email: "test@testing.com",
      password: "testing123",
      id: 1,
  }
  const renderPage = () => {
    render(
      <MemoryRouter initialEntries={["/collectionedit/1"]}>
      <Routes>
        <Route
          path="/collectionedit/:id"
          element={<ModalEdit collections={collections} editCollection={editCollection} handleChange={handleChange} handleSubmit={handleSubmit} updateCollection={updateCollection} toggle={toggle} logged_in={true} user={user}/>}/>
      </Routes>
    </MemoryRouter>
    )
  }

  it("tests for data typed into the input field", () => {
    renderPage()
    let nameInput = screen.getByRole('textbox', {name: /name/i})
    fireEvent.change(nameInput, {
      target: {
        value: 'Cpt. Rex'
      }
    })
    expect(nameInput).toHaveValue('Cpt. Rex')
  })

  it("tests the handleSubmit works upon clicking the update item button", () => {
    renderPage()
    fireEvent(
    screen.getByRole('button', 'Update'), 
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    expect(handleSubmit).toHaveBeenCalled
  })
})