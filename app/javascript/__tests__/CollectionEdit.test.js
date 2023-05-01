import React from "react"
import "@testing-library/jest-dom"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import CollectionEdit from "../components/pages/CollectionEdit"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import collections from "../components/mockCollections"

const updateCollection = jest.fn()

describe("<CollectionEdit />", () => {

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
          element={<CollectionEdit collections={collections} updateCollection={updateCollection} logged_in={true} user={user}/>}/>
      </Routes>
    </MemoryRouter>
    )
  }

  it("renders an edit page without crashing", () => {
    renderPage()
    const pageTitle = screen.getByText("Edit Cpt. Rex")
    expect(pageTitle).toBeInTheDocument()
  })
  
  it("has fillable forms for updating a collection", () => {
    renderPage()

    const formName = screen.getByText(/name/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formCategory = screen.getByText(/category/i)
    expect(formCategory.getAttribute("for")).toEqual("category")

    const formDescription = screen.getByText(/description/i)
    expect(formDescription.getAttribute("for")).toEqual("description")

    const formCondition = screen.getByText(/condition/i)
    expect(formCondition.getAttribute("for")).toEqual("condition")

    const formImage = screen.getByText(/image/i)
    expect(formImage.getAttribute("for")).toEqual("image")

    const updateButton = screen.getByRole("button", /update/i)
    expect(updateButton).toBeInTheDocument()
  })

  it("tests for data typed into the input field", () => {
    renderPage()
    let nameInput = screen.getByRole('textbox', {name: /name/i})
    fireEvent.change(nameInput, {
      target: {
        value: 'test'
      }
    })
    waitFor(() => {expect(nameInput).toHaveValue('test')})
  })

  it("tests the handleSubmit works upon clicking the add item button", () => {
    renderPage()
    fireEvent(
    screen.getByRole('button', 'Update'), 
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
  })
})
