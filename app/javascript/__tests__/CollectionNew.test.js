import React from "react"
import { render, screen } from "@testing-library/react"
import CollectionNew from "../components/pages/CollectionNew"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe("<CollectionNew />", () => {
  beforeEach(() => {
    const current_user = {
      email: "test@testing.com",
      password: "testing123",
      id: 1,
    }

    render(
      <BrowserRouter>
        <CollectionNew current_user={current_user} />
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {})

  it("has a textbox for name", () => {
    const nameBox = screen.getByRole("textbox", {
      name: /name/i,
    })
    expect(nameBox).toBeInTheDocument()
  })

  it("has a textbox for category", () => {
    const categoryBox = screen.getByRole("combobox", {
      name: /category/i,
    })
    expect(categoryBox).toBeInTheDocument()
  })

  it("has a textbox for description", () => {
    const descriptionBox = screen.getByRole("textbox", {
      name: /description/i,
    })
    expect(descriptionBox).toBeInTheDocument()
  })

  it("has a textbox for image", () => {
    const imageBox = screen.getByRole("textbox", {
      name: /image/i,
    })
    expect(imageBox).toBeInTheDocument()
  })

  it("has a submit button", () => {
    const submit = screen.getByRole("button", {
      name: /Add Item/i,
    })
    expect(submit).toBeInTheDocument()
  })
})
