import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"

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

        const error = screen.getByRole('heading', {
            name: /Oops, looks like you got turned around/i
        })
        expect(error).toBeInTheDocument()
    })

    it("renders an image", () => {
        notFoundRender()
        const image = screen.getByRole('img', {
            name: /Broken robot/i
        })
        expect(image).toBeInTheDocument()
    })

    it("renders a button", () => {
        const back = screen.getByRole('button', {
          name: /back to your ollection/i,
        })
        expect(back).toBeInTheDocument()
      })
})