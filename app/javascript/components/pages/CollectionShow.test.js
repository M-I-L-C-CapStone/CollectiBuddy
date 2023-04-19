import React from 'react'
import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react'
import CollectionShow from './CollectionShow'
// import { BrowserRouter } from "react-router-dom"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import collections from '../mockCollections'


const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/collectionshow/1"]}>
      <Routes>
        <Route path="/collectionshow/:id" element={<CollectionShow collections={collections} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<CollectionShow />", () => {
  it("renders collection category, description, condition attributes", () => {
    renderShow()
    const collections = screen.getByText(collections.category)
    expect(category).toBeInTheDocument()
  })
})