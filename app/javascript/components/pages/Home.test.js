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
            name: /Welcome to CollectiBuddy! Please log in or Sign Up to begin your Collection/i
        })
        expect(welcome).toBeInTheDocument()
    })

    it("renders a app description", () => {
        homeRender()
        const description = screen.getByRole('heading', {
            name: /looking for a way to keep track of all your favorite collectibles in one place\? we are happy to say that you need to look no further and as a member of collectibuddy you can save an online log of all your prescious collectibles\. sort them, edit their conditions, and event stage them for auction\./i
        })
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
})