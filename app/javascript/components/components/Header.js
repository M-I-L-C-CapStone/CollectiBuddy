import React from "react"
import { NavLink } from "react-router-dom"
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap"
import SearchBar from "./SearchBar.js"

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  edit_user_registration,
  sign_in_route,
  sign_out_route,
  collections,
}) => {
  return (
    <header>
      <Navbar fixed="top" expand dark>
        <NavbarBrand href="/">Collecti🤖Buddy</NavbarBrand>
        <Nav className="container-fluid" navbar>
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
              <NavItem className="ms-auto">
                <div className="SearchBar">
                  <SearchBar
                    placeholder="Search"
                    collections={collections}
                    current_user={current_user}
                  />
                </div>
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
