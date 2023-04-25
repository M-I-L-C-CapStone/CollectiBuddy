import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import CollectionEdit from "../components/pages/CollectionEdit"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import collections from "../components/mockCollections"

describe("<CollectionEdit />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/collectionedit/1"]}>
        <Routes>
          <Route
            path="/collectionedit/:id"
            element={<CollectionEdit collections={collections} />}
          />
        </Routes>
      </MemoryRouter>
    )
  })
  it("renders an edit page without crashing", () => {
    const pageTitle = screen.getByText("Edit Cpt. Rex")
    expect(pageTitle).toBeInTheDocument()
  })
  it("has fillable forms for updating a collection", () => {
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
})
