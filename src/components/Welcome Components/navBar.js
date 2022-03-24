import React from "react"
import { Navbar,  Container } from "react-bootstrap";

function NavBar(){
    const styles = {color : "#35B0F3", fontSize:25}
    return(
  <div>
  <Navbar sticky="top" >
  <Container>
    <Navbar.Brand href="#home" style={styles}>ReportHub</Navbar.Brand>
    <Navbar.Text>
        The Ultimate Software for Lab Reporting
    </Navbar.Text>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">(UserName)</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
export default NavBar;