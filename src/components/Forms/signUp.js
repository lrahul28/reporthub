import React from "react";
import { Form, InputGroup, FormControl, Dropdown, Button } from "react-bootstrap";

function SignUp()
{
    return (
        <div style = {{paddingLeft:"40px", paddingTop:"40px", paddingRight:"60px",height:"630px", width:"500px", marginLeft:"295px", marginTop:"15px", backgroundColor:"#A8D7EE"}}>
       <h4 style = {{height:"40px", width:"200px", color:"#1A1F21", marginLeft:"100px", textAlign:"center", paddingBottom:"30px"}}>Create Account</h4>
      <Form style = {{height:"500px", width:"400px"}}>
      <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Company Name</InputGroup.Text>
          <FormControl
            placeholder="Enter Name of the Company"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Email" type = "email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon3">@example.com</InputGroup.Text>
        </InputGroup>
        
        <Form.Label htmlFor="basic-url">Mobile Number</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon4">
            +91
          </InputGroup.Text>
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
      
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon5">Bank Details</InputGroup.Text>
          <FormControl
            placeholder="Enter Bank Details"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
    <Form.Label htmlFor="basic-url" style = {{marginRight:"360px"}}>GST</Form.Label>        
    <Dropdown style = {{float:"left", marginRight:"20px"}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    State
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Telangana</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Karnataka</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Tamil Nadu</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown style = {{marginRight:"600px"}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    City
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Hyderabad</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Bangalore</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Chennai</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<br/>
        <InputGroup>
          <InputGroup.Text>Address</InputGroup.Text>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br/>
        <Button variant="primary" type="submit">
    Submit
  </Button>
        </Form>
      </div>

);   
}
export default SignUp;