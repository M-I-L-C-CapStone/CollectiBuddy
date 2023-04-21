import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutUs from './AboutUs'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"
import iraImage from "../assets/IMG_7346.jpg"
import leoImage from "../assets/LeoCuero1.jpg"
import mikeImage from "../assets/image.png"
import cjImage from "../assets/pfp.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import userEvent from '@testing-library/user-event'

describe("<AboutUs />", () => {

    const aboutUsRender = () => {
        render(
            <BrowserRouter>
                <AboutUs iraImage={iraImage} leoImage={leoImage} cjImage={cjImage} mikeImage={mikeImage} linkedin={linkedin} github={github}/>
            </BrowserRouter>
        )
    }

    it("renders a name heading for Eagle-Eye-Mike", () => {
        aboutUsRender()
        const headingMike = screen.getByRole('heading', {
            name: /mike rogers/i
          })
        expect(headingMike).toBeInTheDocument()
        
    })

    it("renders a the bio picture for Eagle-Eye-Mike", () => {
        aboutUsRender()
        const imageMike = screen.getByRole('img', {
            name: /mike's bio pic/i
          })
        expect(imageMike).toBeInTheDocument()
        
    })

    it("renders a bio information for Eagle-Eye-Mike", () => {
        aboutUsRender()
        const bioInfoMike = screen.getByText(
            /hi, i'm mike, the tech lead for collectibuddy\. i have 12 years experience within the real estate industry and past education in information technology\. my passion for troubleshooting evolves each day as i continue to solve errors on the fly! i want to push the bounds of web development and help others grow into their true potential\./i
            )
        expect(bioInfoMike).toBeInTheDocument()
    })

    it("renders a name heading for Ira", () => {
        aboutUsRender()
        const headingIra = screen.getByRole('heading', {
            name: /ira holmes/i
            })
        expect(headingIra).toBeInTheDocument()
        
    })

    it("renders a the bio picture for Ira", () => {
        aboutUsRender()
        const imageIra = screen.getByRole('img', {
            name: /ira's bio pic/i
            })
        expect(imageIra).toBeInTheDocument()
    })

    it("renders a bio information for Ira", () => {
        aboutUsRender()
        const bioInfoIra = screen.getByText(
            /my name is ira holmes, i am the design lead for collectibuddy and i am a 7 year navy veteran with a passion for bringing ideas to life\. i may not be able to draw but css helps give me all of the creative tools i need\./i
            )
        expect(bioInfoIra).toBeInTheDocument()
     })
    
      it("renders a name heading for Leo", () => {
        aboutUsRender()
        const headingLeo = screen.getByRole('heading', {
            name: /leopoldo f\. cuero/i
          })
        expect(headingLeo).toBeInTheDocument()
        
    })

    it("renders a the bio picture for Leo", () => {
        aboutUsRender()
        const imageLeo = screen.getByRole('img', {
            name: /leo's bio pic/i
          })
        expect(imageLeo).toBeInTheDocument()
    })

    it("renders a bio information for Leo", () => {
        aboutUsRender()
        const bioInfoLeo = screen.getByText(
            /my name is leopoldo f\. cuero, the project manager for collectibuddy\. i am from cali, colombia therefore, i'm an awesome salsa dancer\. i served for 2 decades in the u\.s\. government in multiple roles, i consider myself an unwritten code with a code in mine : the more i learn the more i realize i need to learn more\./i
            )
        expect(bioInfoLeo).toBeInTheDocument()
     })

     it("renders a name heading for CJ", () => {
        aboutUsRender()
        const headingCj = screen.getByRole('heading', {
            name: /cj norris/i
          })
        expect(headingCj).toBeInTheDocument()
        
    })

    it("renders a the bio picture for CJ", () => {
        aboutUsRender()
        const imageCj = screen.getByRole('img', {
            name: /cj's bio pic/i
          })
        expect(imageCj).toBeInTheDocument()
    })

    it("renders a bio information for CJ", () => {
        aboutUsRender()
        const bioInfoCj = screen.getByText(
            /hey! i'm cj, the product manager for collectibuddy\. i am a 12 year veteran of the kentucky army national guard turned full stack web developer\. i have a passion for problem solving and creative thinking\. this project was an awesome opportunity to work with a fantastic group to develop a fun app\./i
            )
        expect(bioInfoCj).toBeInTheDocument()
     })
    
})