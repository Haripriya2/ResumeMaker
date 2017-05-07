import React, { Component } from 'react';
import {Modal, Button, Form, FormGroup, Col, FormControl, Checkbox, ControlLabel} from 'react-bootstrap';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPage: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.renderSignupPage = this.renderSignupPage.bind(this)
    }

    open(){
        this.setState({showPage: true});
    }

    close(){
        this.setState({showPage: false});
    }

renderSignupPage() {
    return(
   <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>Email</Col>
      <Col sm={10}><FormControl type="email" placeholder="Email" /></Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>Password</Col>
      <Col sm={10}><FormControl type="password" placeholder="Password" /></Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>Confirm Password</Col>
      <Col sm={10}><FormControl type="password" placeholder="Re-enter your password" /></Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={1} sm={10}><Checkbox>Remember me</Checkbox></Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={10} sm={10}><Button bsStyle="primary" type="submit">Signup</Button></Col>
    </FormGroup>
  </Form>
    );
}

renderLoginPage() {
    return(
   <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>Email</Col>
      <Col sm={10}><FormControl type="email" placeholder="Email" /></Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>Password</Col>
      <Col sm={10}><FormControl type="password" placeholder="Password" /></Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={10} sm={10}><Button bsStyle="primary" >Login</Button></Col>
    </FormGroup>
  </Form>
    );
}

  render() {
      const signup = this.renderSignupPage();
      const login = this.renderLoginPage();
    return (
    <div>
    <Button bsSize="small" onClick={this.open}> Login/ Signup </Button>
      <Modal show={this.state.showPage} onHide={this.close}>
      <Modal.Header closeButton>
      Sign up / Login Page
      </Modal.Header>
      <Modal.Body>
      {signup}
      {login}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.close}>Close</Button>
      </Modal.Footer>
      </Modal>
    </div>
    );
  }
}

export default Login;
