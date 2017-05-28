import React, { Component, PropTypes } from 'react';
import {Form, FormGroup,FormControl, ControlLabel, Col} from 'react-bootstrap';

class Basic extends Component {
    render() {
        const basic = this.props.data
        return(
            <form>
            <Form horizontal>
            <FormGroup controlId="formFirst">
               <Col componentClass={ControlLabel} sm={3}>Name</Col>
               <Col sm={4}><FormControl type="text" placeholder="Enter first name" inputRef={ref => { this.inputFirst = ref; }}
               onChange={(value, field) => this.props.change(this.inputFirst.value,'first')} value={basic.first}/></Col>
               <Col sm={4}><FormControl type="text" placeholder="Enter last name" inputRef={ref => { this.inputLast = ref; }}
               onChange={(value, field) => this.props.change(this.inputLast.value,'last')} value={basic.last}/></Col>
            </FormGroup>

           <FormGroup controlId="formEmail">
               <Col componentClass={ControlLabel} sm={3}>Email address</Col>
               <Col sm={9}><FormControl type="email" placeholder="Enter email id" inputRef={ref => { this.inputEmail = ref; }}
               onChange={(value, field) => this.props.change(this.inputEmail.value,'email')} value={basic.email}/></Col>
            </FormGroup>

            <FormGroup controlId="formContact">
               <Col componentClass={ControlLabel} sm={3}>Contact no</Col>
               <Col sm={4}><FormControl type="number" placeholder="Enter mobile no" inputRef={ref => { this.inputMobile = ref; }}
               onChange={(value, field) => this.props.change(this.inputMobile.value,'mobileNo')} value={basic.mobileNo}/></Col>
               <Col sm={4}><FormControl type="number" placeholder="Enter work no" inputRef={ref => { this.inputWorkNo = ref; }}
               onChange={(value, field) => this.props.change(this.inputWorkNo.value,'workNo')} value={basic.workNo}/></Col>
            </FormGroup>

            <FormGroup controlId="formAddressLine1">
               <Col componentClass={ControlLabel} sm={3}>Address line 1</Col>
               <Col sm={9}><FormControl type="text" placeholder="Enter address" inputRef={ref => { this.inputAddressLine1 = ref; }}
               onChange={(value, field) => this.props.change(this.inputAddressLine1.value,'localAddr1')} value={basic.localAddr1}/></Col>
            </FormGroup>
           <FormGroup controlId="formAddressLine2">
              <Col componentClass={ControlLabel} sm={3}>Address line 2</Col>
              <Col sm={9}><FormControl type="text" placeholder="Enter address" inputRef={ref => { this.inputAddressLine2 = ref; }}
               onChange={(value, field) => this.props.change(this.inputAddressLine2.value,'localAddr2')} value={basic.localAddr2}/></Col>
           </FormGroup>
           </Form>
           </form>
        );
    }
}
Basic.PropTypes = {
    change: PropTypes.func,
    data: PropTypes.object
}
export default Basic;