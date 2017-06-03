import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Modal, Button, Glyphicon} from 'react-bootstrap';

class Preview extends Component {
 constructor(props){
     super(props)

     this.state = {
         showModal: false
     }

     this.open = this.open.bind(this)
     this.close = this.close.bind(this)
 }

 open(){
     this.setState({showModal: true})
 }

 close(){
     this.setState({showModal: false})
 }

  render() {
      const preview = this.props.resume
      console.log('Rendered:', preview)
       return(
           <div>

           <Button bsStyle="primary" bsSize="large" onClick={this.open}> Preview</Button>


           <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h3><Glyphicon glyph="user" />About</h3>
            <p> Name: <span> {preview? preview.first: ''} &nbsp; {preview? preview.last: ''} </span> </p>
            <p>Email: {preview? preview.email: ''}</p> 
            <p>Contact:<br/> Personal: {preview? preview.mobileNo: ''} Work: {preview? preview.workNo: ''}</p>
            <p> Address: {preview? preview.localAddr1 : ''} <br/> {preview? preview.localAddr2 : ''}</p>
            <hr />
            <h3><Glyphicon glyph="education" />Education</h3>
            <p>Name of institution: {preview ? preview.institution : ''}</p>
            <p>Name of degree: {preview ? preview.degree : ''}</p>
            <p> From {preview? preview.start : ''} to {preview? preview.end : ''}</p>
            <h3><Glyphicon glyph="folder-close" />Experience</h3>
            <p>Name of Company: {preview ? preview.company : ''}</p>
            <p>Job title: {preview ? preview : ''}</p>
            <p> From {preview? preview.jobStart : ''} to {preview? preview.jobEnd : ''}</p>
            <h3><Glyphicon glyph="wrench" />Skill set</h3>
            <h3><Glyphicon glyph="envelope" />Reference</h3>
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
           </div>
       );
  }
}

const mapStateToProps = (state) => {
  return {
    resume: state.resumeCreated
  }
}

export default connect(mapStateToProps)(Preview);
