import React, { Component } from 'react';
import {Grid, Col, Nav, NavItem, Panel} from 'react-bootstrap';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selected: 1,
        first: '',
        last: '',
        email: '',
        contactNo: '',
        localAddr1: '',
        localAddr2: '',
        localAddrPin: ''
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(key){
      this.setState({selected: key});
  }


  render() {
    return (
     <Grid>
     <Col md={4}>
     <Nav bsStyle="pills" stacked activeKey={this.state.selected} onSelect={this.handleSelect}>
     <NavItem eventKey={1} >Basic data</NavItem>
     <NavItem eventKey={2} >Education</NavItem>
     <NavItem eventKey={3} >Work Experience</NavItem>
     <NavItem eventKey={4} >Qualification</NavItem>
     <NavItem eventKey={5} >Reference</NavItem>
     </Nav>
     </Col>
     
     <Col md={8}>
     <Panel>
     
     </Panel>
     </Col>
     </Grid>   
    );
  }
}


export default Create;
