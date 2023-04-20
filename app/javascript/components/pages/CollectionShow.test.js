import React from "react"
import "@testing-library/jest-dom"
import {render, screen} from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import CollectionShow from "./CollectionShow"
import collections from "../mockCollections"

describe("<CollectionShow />", () => {
  beforeEach(() => {
    const current_user ={
      email: "test@testing.com",
      password: "testing123",
      id: 1
    }

   
    render(
      <MemoryRouter initialEntries={["/collectionshow/1"]}>
        <Routes>
            <Route path="/collectionshow/:id" element={<CollectionShow collections={collections} current_user={current_user}/>}/>
        </Routes>  
      </MemoryRouter>
    )
  })
  it("renders without crashing", () => {
    const pageTitle = screen.getByText("Your Collectible")
    expect(pageTitle).toBeInTheDocument()
  })
    

  it("displays a collection item's name, category, describe, condition, and image", () => {collections.forEach(collection => {
    const collectionAttribute = screen.getByText(collection.name, collection.category, collection.description, collection.condition, collection.image)
    expect(collectionAttribute).toBeInTheDocument()
         })
    })
  it("displays a button for edit",() => {
       const editButton = screen.getByText( /edit/i)
       expect(editButton).toBeInTheDocument()
   })

   it("displays a button for delete",() => {
    const deleteButton = screen.getByText( /delete/i)
    expect(deleteButton).toBeInTheDocument()
})

})