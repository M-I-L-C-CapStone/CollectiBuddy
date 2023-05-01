import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import NotFound from "../components/pages/NotFound"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))

describe("<NotFound />", () => {

  const notFoundRender = () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  }

  it("renders an error message", () => {
    notFoundRender()

    const error = screen.getByRole("heading", {
      name: /Oops, looks like you got turned around/i,
    })
    expect(error).toBeInTheDocument()
  })

  it("renders an image", () => {
    notFoundRender()
    const image = screen.getByRole("img", {
      name: /Broken robot/i,
    })
    expect(image).toBeInTheDocument()
  })

  it("renders a button", () => {
    notFoundRender()
    const back = screen.getByText(/back to your collection/i)
    expect(back).toBeInTheDocument()
  })

  it("navigates to the next page", () => {
    notFoundRender()
    fireEvent(
      screen.getByRole('button', 'Back to your Collection'), 
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }))
      expect(mockUseNavigate).toHaveBeenCalled
  })
})
