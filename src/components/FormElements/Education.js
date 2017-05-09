import React, { Component, PropTypes } from 'react';
import {Form, FormGroup,FormControl, ControlLabel, Col, Button} from 'react-bootstrap';

class Education extends Component {
    constructor(props){
        super(props);

        this.renderForm = this.renderForm.bind(this)
        this.renderAnotherForm = this.renderAnotherForm.bind(this)
    }

    renderForm(){
        const education = this.props.data
        return (
            <form>
            <Form inline>
            <FormGroup controlId="Institution">
               <Col componentClass={ControlLabel} sm={2}>Institution</Col>
               <Col sm={4}><FormControl type="text" placeholder="Enter institution name" inputRef={ref => { this.inputCollege = ref; }}
               onChange={(value, field) => this.props.change(this.inputCollege.value,'college')} value={education.college}/></Col>
            </FormGroup>

           <FormGroup controlId="Degree">
              <Col componentClass={ControlLabel} sm={3}>Degree</Col>
              <Col sm={3}><FormControl type="text" placeholder="Enter degree" inputRef={ref => { this.inputDegree = ref; }}
               onChange={(value, field) => this.props.change(this.inputDegree.value,'last')} value={education.degree}/></Col>
           </FormGroup>
           </Form>
           <br/>
           <Form horizontal>
            <FormGroup controlId="formAddressLine1">
               <Col componentClass={ControlLabel} sm={3}>Address line 1</Col>
               <Col sm={9}><FormControl type="text" placeholder="Enter address" inputRef={ref => { this.inputAddressLine1 = ref; }}
               onChange={(value, field) => this.props.change(this.inputAddressLine1.value,'localAddr1')} value={education.localAddr1}/></Col>
            </FormGroup>
           <FormGroup controlId="formAddressLine2">
              <Col componentClass={ControlLabel} sm={3}>Address line 2</Col>
              <Col sm={9}><FormControl type="text" placeholder="Enter address" inputRef={ref => { this.inputAddressLine2 = ref; }}
               onChange={(value, field) => this.props.change(this.inputAddressLine2.value,'localAddr2')} value={education.localAddr2}/></Col>
           </FormGroup>
           </Form>
           </form>
        );
    }

    renderAnotherForm(){
        const nextForm = this.renderForm()
        return (
            <div>{nextForm}</div>
        );
    }

    render() {
        const form = this.renderForm()
        return(
            <div>
            {form}
            <Button onClick={this.renderAnotherForm}>Add</Button>
           </div>
        );
    }
}
Education.PropTypes = {
    change: PropTypes.func,
    data: PropTypes.object
}
export default Education;