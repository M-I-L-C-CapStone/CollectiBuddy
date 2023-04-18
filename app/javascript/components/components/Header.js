import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap"

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <header>
      <Navbar fixed="top" expand dark>
        <NavbarBrand href="/">Collecti🤖Buddy</NavbarBrand>
        <Nav className="me-auto" navbar>
          {logged_in && (
            <>
              <NavItem>
                <NavLink to="/collectionindex">View Collection</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/collectionnew">Add Item</NavLink>
              </NavItem>
              <NavItem>
                <a href={sign_out_route}>Sign Out</a>
              </NavItem>
            </>
          )}
          {!logged_in && (
            <>
              <NavItem>
                <a href={sign_in_route}>Sign In</a>
              </NavItem>
              <NavItem>
                <a href={new_user_route}>Sign Up</a>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header
