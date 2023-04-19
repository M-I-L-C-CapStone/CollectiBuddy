import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import CollectionEdit from "./CollectionEdit"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import collections from "../mockCollections"

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
  it("has fillable forms for updating an apartment", () => {
    const formAddress = screen.getByText(/name/i)
    expect(formAddress.getAttribute("for")).toEqual("name")

    const formPlanet = screen.getByText(/category/i)
    expect(formPlanet.getAttribute("for")).toEqual("category")

    const formBedrooms = screen.getByText(/description/i)
    expect(formBedrooms.getAttribute("for")).toEqual("description")

    const formBathrooms = screen.getByText(/condition/i)
    expect(formBathrooms.getAttribute("for")).toEqual("condition")

    const formSquareFootage = screen.getByText(/image/i)
    expect(formSquareFootage.getAttribute("for")).toEqual("image")

    const updateButton = screen.getByRole("button", /update/i)
    expect(updateButton).toBeInTheDocument()
  })
})
