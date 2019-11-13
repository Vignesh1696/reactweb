import React , { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'




class Header extends Component{

render(){
return(
	<div>
	<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">New-Website</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <NavDropdown title="Providing" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Dress</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Gadjets action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Shoes</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Bikes</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">About-us</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Enquiery
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
	</div>
	)

}


}

export default Header