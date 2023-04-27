import React from "react"
import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react"
import ModalEdit from "../components/pages/CollectionEdit"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { fireEvent } from "@testing-library/react"
import  userEvent from "@testing-library/user-event"
import collections from "../components/mockCollections"

describe("<ModalEdit />", () => {
  const editCollection = jest.fn()
  const mockUseNavigate = jest.fn()
 
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
  }))

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
          element={<ModalEdit collections={collections} logged_in={true} user={user}/>}/>
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

  it("submits data on edit button click", () => {
    renderPage()
    let editButton = screen.getByText(/update/i)
    userEvent.click(editButton)
    waitFor(() => {expect(editCollection).toHaveBeenCalled()})
    waitFor(() => {expect(mockUseNavigate).toHaveBeenCalled()})
  })

  it("handles changes to form data", () => {
    renderPage()
    let nameInput = screen.getByRole('textbox', {name: /name/i})
    fireEvent.change(nameInput, {
      target: {
        value: 'test'
      }
    })
    waitFor(() => {expect(editCollection).toHaveBeenCalled()})
    waitFor(() => {expect(nameInput).toHaveValue('test')})
  })
})