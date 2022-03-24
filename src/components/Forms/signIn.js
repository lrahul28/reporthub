import React from "react";
import { Form, Button } from "react-bootstrap";

function SignIn()
{
        return (
  <div style = {{paddingLeft:"40px", paddingTop:"40px",height:"400px", width:"400px", marginLeft:"25px", marginTop:"15px", backgroundColor:"#A8D7EE", textAlign:"center"}}>
     <h3 style = {{height:"40px", width:"75px", color:"#1A1F21", marginLeft:"115px", textAlign:"left", paddingBottom:"30px"}}>Login</h3>
<Form style = {{height:"300px", width:"300px"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style = {{marginRight:"190px"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style = {{marginRight:"220px"}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group style = {{marginRight:"165px"}}className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>

        );
    

        
    
}
export default SignIn;