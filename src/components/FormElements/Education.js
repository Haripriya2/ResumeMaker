import React, { Component, PropTypes } from 'react';
import {Form, FormGroup,FormControl, ControlLabel, Col, Button} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

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
               <Col componentClass={ControlLabel} sm={3}>Institution</Col>
               <Col sm={3}><FormControl type="text" placeholder="Enter institution name" inputRef={ref => { this.inputCollege = ref; }}
               onChange={(value, field) => this.props.change(this.inputCollege.value,'institution')} value={education.institution}/></Col>
            </FormGroup>

           <FormGroup controlId="Degree">
              <Col componentClass={ControlLabel} sm={3}>Degree</Col>
              <Col sm={3}><FormControl type="text" placeholder="Enter degree" inputRef={ref => { this.inputDegree = ref; }}
               onChange={(value, field) => this.props.change(this.inputDegree.value,'degree')} value={education.degree}/></Col>
           </FormGroup>
           </Form>
           <br/>
           <Form horizontal>
            <FormGroup controlId="startDate">
               <Col componentClass={ControlLabel} sm={3}>Start date</Col>
               <Col sm={9}><DatePicker value={education.start} 
               onChange={(value, field) => this.props.change(value,'start')} /></Col>
            </FormGroup>
           <FormGroup controlId="endDate">
              <Col componentClass={ControlLabel} sm={3}>End date</Col>
              <Col sm={9}><DatePicker value={education.end} 
               onChange={(value, field) => this.props.change(value,'end')} /></Col>
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