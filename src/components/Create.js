import React, { Component } from 'react';
import {Grid, Col, Nav, NavItem, Panel} from 'react-bootstrap';
import RichTextEditor from 'react-rte';

import Basic from './FormElements/Basic';

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
        localAddrPin: '',
        qualification : RichTextEditor.createEmptyValue()
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderFormElement = this.renderFormElement.bind(this)
  }

  handleSelect(key){
      this.setState({selected: key});
  }

  handleChange(value, field){
    this.setState({[field]: value})
  }

  renderFormElement(){
    switch(this.state.selected){
      case 1: return <Basic data={this.state} change={this.handleChange}/>
      default: return null
    }
  }


  render() {
    const form = this.renderFormElement()
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
     {form}
     </Panel>
     </Col>
     </Grid>   
    );
  }
}


export default Create;
