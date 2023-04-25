import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ProtectedIndex from "../components/pages/ProtectedIndex"
import collections from "../components/mockCollections"

describe("<ProtectedIndex />", () => {
  beforeEach(() => {
    const current_user = {
      email: "test@testing.com",
      password: "testing123",
      id: 1,
    }

    const userCollection = [
      {
        id: 1,
        name: "Cpt. Rex",
        category: "Action Figure",
        description: "Clone Trooper from Star Wars",
        condition: "Like New",
        image:
          "https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g",
        user_id: 1,
      },
    ]
    render(
      <BrowserRouter>
        <ProtectedIndex
          collections={userCollection}
          current_user={current_user}
        />
      </BrowserRouter>
    )
  })
  it("renders without crashing", () => {})

  it("displays a header", () => {
    const collections = screen.getByText("Your Collection")
    expect(collections).toBeInTheDocument()
  })
  it("displays each collection item's name", () => {
    collections.forEach((collection) => {
      const collectionName = screen.getByText(collection.name)
      expect(collectionName).toBeInTheDocument()
    })
  })
})
