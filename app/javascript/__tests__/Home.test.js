import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "../components/pages/Home"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import fireEvent from "@testing-library/user-event"
import userEvent from "@testing-library/user-event"

describe("<Home />", () => {
  const homeRender = () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  }

  it("renders a welcome message", () => {
    homeRender()

    const welcome = screen.getByRole("heading", {
      name: /Welcome to CollectiBuddy!/i,
    })
    expect(welcome).toBeInTheDocument()
  })

  it("renders a app description", () => {
    homeRender()
    const description = screen.getByText(/Looking/i)
    expect(description).toBeInTheDocument()
  })

  it("renders images in the carousel", () => {
    homeRender()
    const collectible1 = screen.getByRole("img", {
      name: /slide 1/i,
    })
    expect(collectible1).toBeInTheDocument()

    const collectible2 = screen.getByRole("img", {
      name: /slide 2/i,
    })
    expect(collectible2).toBeInTheDocument()

    const collectible3 = screen.getByRole("img", {
      name: /slide 3/i,
    })
    expect(collectible3).toBeInTheDocument()

    const collectible4 = screen.getByRole("img", {
      name: /slide 4/i,
    })
    expect(collectible4).toBeInTheDocument()

    const collectible5 = screen.getByRole("img", {
      name: /slide 5/i,
    })
    expect(collectible5).toBeInTheDocument()
  })

  it("has the next image render when a user clicks on next button", async () => {
    homeRender()

    const next = screen.getByRole("button", { name: /next/i })
    await fireEvent.click(next)
    expect(next).toBeInTheDocument()
  })

  it("has the the previous image render when a user clicks on previous button", async () => {
    homeRender()

    const previous = screen.getByRole("button", { name: /previous/i })
    await fireEvent.click(previous)
    expect(previous).toBeInTheDocument()
  })

  it("renders the slide 1 button", async () => {
    homeRender()

    const slide1 = screen.getByRole("button", { name: /slide 1/i })
    await fireEvent.click(slide1)
    expect(slide1).toBeInTheDocument()
  })
})
