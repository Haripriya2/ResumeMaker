import React, { Component, PropTypes } from 'react';
import {Form, FormGroup,FormControl, ControlLabel, Col, Button} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

class Work extends Component {
    constructor(props){
        super(props);

        this.renderForm = this.renderForm.bind(this)
        this.renderAnotherForm = this.renderAnotherForm.bind(this)
    }

    renderForm(){
        const work = this.props.data
        return (
            <form>
            <Form horizontal>
            <FormGroup controlId="Company">
               <Col componentClass={ControlLabel} sm={3}>Company</Col>
               <Col sm={9}><FormControl type="text" placeholder="Enter company name" inputRef={ref => { this.inputCompany = ref; }}
               onChange={(value, field) => this.props.change(this.inputCompany.value,'company')} value={work.company}/></Col>
            </FormGroup>

           <FormGroup controlId="JobTitle">
              <Col componentClass={ControlLabel} sm={3}>Job title</Col>
              <Col sm={9}><FormControl type="text" placeholder="Enter your designation" inputRef={ref => { this.inputJobTitle = ref; }}
               onChange={(value, field) => this.props.change(this.inputJobTitle.value,'degree')} value={work.jobTitle}/></Col>
           </FormGroup>

            <FormGroup controlId="startDate">
               <Col componentClass={ControlLabel} sm={3}>Start date</Col>
               <Col sm={9}><DatePicker value={work.jobStart} 
               onChange={(value, field) => this.props.change(value,'jobStart')} /></Col>
            </FormGroup>
           <FormGroup controlId="endDate">
              <Col componentClass={ControlLabel} sm={3}>End date</Col>
              <Col sm={9}><DatePicker value={work.jobEnd} 
               onChange={(value, field) => this.props.change(value,'jobEnd')} /></Col>
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
Work.PropTypes = {
    change: PropTypes.func,
    data: PropTypes.object
}
export default Work;