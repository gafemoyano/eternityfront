import React from 'react'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
} from 'react-bootstrap'
import logo from '../img/logo.png'

const NavBar = () => (

  <Navbar fluid style={ {
    fontSize: '16px',
    fontWeight: 'bold',
}} >
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">
          <img alt="Brand" src={logo} style={{width: 105}} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={1} title="Television" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>Action</MenuItem>
          <MenuItem eventKey={1.2}>Another action</MenuItem>
          <MenuItem eventKey={1.1}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.3}>Separated link</MenuItem>
        </NavDropdown>
        <NavItem eventKey={2} href="#">Radio</NavItem>
        <NavItem eventKey={3} href="#">Music Videos</NavItem>
      </Nav>
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar
