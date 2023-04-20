import React from 'react'
import { render, screen } from '@testing-library/react'
import CollectionNew from './CollectionNew'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"

// const newRender = () => {
//     render(
//         <BrowserRouter>
//             <CollectionNew />
//         </BrowserRouter>
//     )
// }

describe("<CollectionNew />", () => {

    beforeEach(() => {
        const current_user = {
          email: "test@testing.com",
          password: "testing123",
          id: 1,
        }
    
        render(
          <BrowserRouter>
            <CollectionNew current_user={current_user} />
          </BrowserRouter>
        )
      })
    
      it("renders without crashing", () => {})
   
      it("has a textbox for address", () => {
        const nameBox = screen.getByRole("textbox", {
          name: /name/i,
        });
        expect(nameBox).toBeInTheDocument();
      });
})