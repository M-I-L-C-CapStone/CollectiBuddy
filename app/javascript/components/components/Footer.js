import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Nav, Navbar, NavbarBrand, NavbarText, NavItem } from "reactstrap"

const Footer = () => {
  return (
    <footer>
      <Navbar fixed="bottom" expand dark>
        <NavbarBrand href="/">Collecti🤖Buddy</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavLink to="/aboutus">About Us</NavLink>
        </Nav>
        <NavbarText>&copy; Got MILC? Alpha 2023</NavbarText>
      </Navbar>
    </footer>
  )
}

export default Footer
