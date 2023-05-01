import React from "react"
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import CollectionNew from "../components/pages/CollectionNew"
import ProtectedIndex from "../components/pages/ProtectedIndex"
import { BrowserRouter, Routes, Route, MemoryRouter} from "react-router-dom"
import  userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

const createCollection = jest.fn()
const handleSubmit = jest.fn()

describe("<CollectionNew />", () => {

  const user = {
      email: "test@testing.com",
      password: "testing123",
      id: 1,
  }
  const renderPage = () => {
    render(
      <BrowserRouter>
          <CollectionNew handleSubmit={handleSubmit} createCollection={createCollection} logged_in={true} user={user}/>
      </BrowserRouter>
    )
  }

  const navigateRender = () => {
    render(
      <MemoryRouter initialEntries={["/collectionnew"]}>
        <Routes>
          <Route path="/collectionnew" element={<CollectionNew handleSubmit={handleSubmit} addCollection={createCollection} logged_in={true} user={user}/>}/>
          <Route path="/protectedindex" element={<ProtectedIndex logged_in={true} />}/>
        </Routes>
      </MemoryRouter>
    )
  }
  
  it("renders without crashing", () => {
    renderPage()
  })

  it("has a textbox for name", () => {
    renderPage()
    const nameBox = screen.getByText(/name/i)
    expect(nameBox).toBeInTheDocument()
  })

  it("has a textbox for category", () => {
    renderPage()
    const categoryBox = screen.getByRole("combobox", {
      name: /category/i,
    })
    expect(categoryBox).toBeInTheDocument()
  })

  it("has a textbox for description", () => {
    renderPage()
    const descriptionBox = screen.getByRole("textbox", {
      name: /description/i,
    })
    expect(descriptionBox).toBeInTheDocument()
  })

  it("has a textbox for image", () => {
    renderPage()
    const imageBox = screen.getByRole("textbox", {
      name: /image/i,
    })
    expect(imageBox).toBeInTheDocument()
  })

  it("has a submit button", () => {
    renderPage()
    const submit = screen.getByRole("link", {
      name: /Add Item/i,
    })
    expect(submit).toBeInTheDocument()
  })

  it("tests for data typed into the input field", () => {
    navigateRender()
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
    screen.getByRole('link', 'Add Item'), 
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
  })
})