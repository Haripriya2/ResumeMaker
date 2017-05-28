import React, { Component } from 'react';
import {Grid, Col, Nav, NavItem, Panel, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import RichTextEditor from 'react-rte';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Basic from '../components/FormElements/Basic';
import Education from '../components/FormElements/Education';
import Work from '../components/FormElements/WorkExperience';
import Qualifications from '../components/FormElements/Qualifications';
import Reference from '../components/FormElements/Reference';

import {formSubmission} from '../actions';

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
        qualification : RichTextEditor.createEmptyValue(),
        reference: RichTextEditor.createEmptyValue(),
        institution: '',
        degree: '',
        start: '',
        end: '',
        company: '',
        jobTitle: '',
        jobStart: '',
        jobEnd: ''
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
      case 2: return <Education data={this.state} change={this.handleChange}/>
      case 3: return <Work data={this.state} change={this.handleChange} />
      case 4: return <Qualifications data={this.state} change={this.handleChange}/>
      case 5: return <Reference data={this.state} change={this.handleChange}/>
      default: return null
    }
  }


  render() {
    const form = this.renderFormElement()
    return (
     <Grid>
     <Col md={4}>
     <div className="card1">
     <Nav bsStyle="pills" stacked activeKey={this.state.selected} onSelect={this.handleSelect}>
     <NavItem eventKey={1} >Basic data</NavItem>
     <NavItem eventKey={2} >Education</NavItem>
     <NavItem eventKey={3} >Work Experience</NavItem>
     <NavItem eventKey={4} >Qualification</NavItem>
     <NavItem eventKey={5} >Reference</NavItem>
     </Nav>
     </div>
     </Col>
     
     <Col md={8}>
     <Panel bsClass="formElement">
     {form}
     </Panel>
     <br/>
     <div className="card1">
     <Button onClick={() => this.props.formSubmission(this.state)}> Preview </Button>
     </div>
     </Col>
     </Grid>   
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({formSubmission: formSubmission}, dispatch);
}

export default connect(mapDispatchToProps)(Create);
