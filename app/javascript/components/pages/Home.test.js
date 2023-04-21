import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"

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

        const welcome = screen.getByRole('heading', {
            name: /Welcome to CollectiBuddy!/i
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
        const collectible1 = screen.getByRole('img', {
            name: /slide 1/i
        })
        expect(collectible1).toBeInTheDocument()

        const collectible2 = screen.getByRole('img', {
            name: /slide 2/i
        })
        expect(collectible2).toBeInTheDocument()

        const collectible3 = screen.getByRole('img', {
            name: /slide 3/i
        })
        expect(collectible3).toBeInTheDocument()

        const collectible4 = screen.getByRole('img', {
            name: /slide 4/i
        })
        expect(collectible4).toBeInTheDocument()

        const collectible5 = screen.getByRole('img', {
            name: /slide 5/i
        })
        expect(collectible5).toBeInTheDocument()
    })

    it("has clickable links to move from image to image", () => {
        homeRender()

        const previous = screen.getByRole('button', {
            name: /Previous/i
        })
        expect(previous).toBeInTheDocument()

        const next = screen.getByRole('button', {
            name: /Next/i
        })
        expect(next).toBeInTheDocument()
    })
})