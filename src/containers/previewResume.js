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
     console.log(this.props.resume)
     this.setState({showModal: true})
 }

 close(){
     this.setState({showModal: false})
 }

  render() {
      const preview =this.props.resume
       return(
           <div>

           <Button bsStyle="primary" bsSize="large" onClick={this.open}> Preview</Button>


           <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h3><Glyphicon glyph="user" />About</h3>
            <p> Name: <span> {this.props.resume? this.props.resume.first: ''} &nbsp; {this.props.resume? this.props.resume.last: ''} </span> </p>
            <p>Email: {preview? preview.email: ''}</p> 
            <p>Contact:<br/> Personal: {preview? preview.mobileNo: ''} Work: {preview? preview.workNo: ''}</p>
            <hr />
            <h3><Glyphicon glyph="education" />Education</h3>
            <p>{this.props.resume ? this.props.resume.institution : ''}</p>
            <h3><Glyphicon glyph="folder-close" />Experience</h3>
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