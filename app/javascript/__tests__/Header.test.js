import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Header from "../components/components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it("has clickable links for a registered user", () => {
    render(
      <BrowserRouter>
        <Header logged_in={true} />
      </BrowserRouter>
    )
    const brandName = screen.getByText("Collecti🤖Buddy")
    expect(brandName).toBeInTheDocument()
    const userCollection = screen.getByText(/view collection/i)
    expect(userCollection).toBeInTheDocument()
    const addItem = screen.getByText(/add item/i)
    expect(addItem).toBeInTheDocument()
    const signOut = screen.getByText(/sign out/i)
    expect(signOut).toBeInTheDocument()
  })

  it("has clickable links for an unregistered user", () => {
    render(
      <BrowserRouter>
        <Header logged_in={false} />
      </BrowserRouter>
    )
    const brandName = screen.getByText("Collecti🤖Buddy")
    expect(brandName).toBeInTheDocument()
    const signIn = screen.getByText(/sign in/i)
    expect(signIn).toBeInTheDocument()
    const signUp = screen.getByText(/sign up/i)
    expect(signUp).toBeInTheDocument()
  })
})
