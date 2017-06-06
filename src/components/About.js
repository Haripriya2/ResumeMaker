import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Tabs, Tab, Grid, Row, Col, Image, Glyphicon, Label} from 'react-bootstrap';

class About extends Component {
  constructor(props){
    super(props)

    this.sampleFirst = this.sampleFirst.bind(this)
    this.sampleSecond = this.sampleSecond.bind(this)
    this.sampleThird = this.sampleThird.bind(this)
  }

  sampleFirst(sample){
    return (
      <Grid>
      <div id="template1">
      <Row>
      <h1>Sample1</h1>
      </Row>
      <header>
      <Row>
      
         <Col md={8}>
              <h1 >{sample.first} {sample.last}</h1>
              <h2 >{sample.WorkExperience.work2.jobTitle}</h2>
         </Col>
         <Col md={4}><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4_g0bjKtkhbry8-W81WGWTxZhBjNfeLVcqc028pTRdSAr-ndKw" circle /></Col>
      
      </Row>
      </header>
      <Row>
      <Col md={4}><h2>About</h2>
      <p> Age : {sample.age} </p>
      <p> DOB : {sample.dob} </p>
      <p> Address : {sample.localAddress.a1}, {sample.localAddress.a2}, PIN: {sample.localAddress.pin} </p>      
      </Col>
      <Col md={4}><h2>Qualification</h2>
      <ul>
      <li>{sample.qualifications.q1}</li>
      <li>{sample.qualifications.q2}</li>
      <li>{sample.qualifications.q3}</li>
      </ul>
      </Col>
      <Col md={4}><h2>Contact Info</h2>
      <p>Phone : {sample.phone}</p>
      <p>Email : {sample.email}</p>
      </Col>
      </Row>

      <Row>
      <h2>Career Progression & Accomplishments</h2>
      <Col md={6}>
      <strong><h3>{sample.WorkExperience.work1.company}, {sample.WorkExperience.work1.city}</h3></strong>
      <h4>{sample.WorkExperience.work1.start} - {sample.WorkExperience.work1.end}</h4>
      <p>{sample.WorkExperience.work1.description}</p>
      </Col>
      <Col md={6}>
      <strong><h3>{sample.WorkExperience.work2.company}, {sample.WorkExperience.work2.city}</h3></strong>
      <h4>{sample.WorkExperience.work2.start} - {sample.WorkExperience.work2.end}</h4>
      <p>{sample.WorkExperience.work2.description}</p>
      </Col>
      </Row>
      <Row>
      <strong><h3>References</h3></strong>
      <ul>
      <li>{sample.References.reference1}</li>
      <li>{sample.References.reference2}</li>
      <li>{sample.References.reference3}</li>
      </ul>
      </Row>
      </div>
      </Grid>
    );
  }

  sampleSecond(sample){
    return (
      <Grid>
      <div id="template2">
      
      <Row><h3>Sample2</h3></Row>
      
      <header><Row>
      <h1 >{sample.first} {sample.last}</h1>
      <h2 >{sample.WorkExperience.work2.jobTitle}</h2>
      </Row></header>

      <Row>
      <Col md={5}>
      <Row><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4_g0bjKtkhbry8-W81WGWTxZhBjNfeLVcqc028pTRdSAr-ndKw" circle /></Row>
      
      <Row><h3>Profile</h3><p>A small description about yourself in terms of your line or business/ occupation</p></Row>
      
      <Row><h3>Contact info</h3>
      <p>{sample.localAddress.a1}, {sample.localAddress.a2}, PIN: {sample.localAddress.pin}</p>
      <p><Label bsStyle="warning"><Glyphicon glyph="phone-alt"/></Label> Phone : {sample.phone}</p>
      <p><Label bsStyle="warning"><Glyphicon glyph="envelope"/></Label> Email : {sample.email}</p>
      </Row>
      
      <Row><h3>Reference</h3>
      <p>{sample.References.reference1}</p>
      <p>{sample.References.reference2}</p>
      <p>{sample.References.reference3}</p>
      
      </Row>
      </Col>

      <Col md={7}>
      
      <Row><h3>Areas of Expertise & Skills</h3>
      <Col md={6}><ul>
      <li>Branding</li><li>Print designing</li>
      <li>Web designs</li><li>Digital marketing</li>
      </ul></Col>
      <Col md={6}><ul>
      <li>Film directing</li><li>Film editing</li>
      <li>Photography</li><li>Copywriting</li>
      </ul></Col>
      
      </Row>
      <Row><h3>Experience</h3>
      <Row>
      <Col md={4}><strong><h3>{sample.WorkExperience.work1.start} - {sample.WorkExperience.work1.end}</h3></strong></Col>
      <Col md={8}>
      <strong><h3>{sample.WorkExperience.work1.company}, {sample.WorkExperience.work1.city}</h3></strong>
      <p>{sample.WorkExperience.work1.description}</p>
      </Col>
      </Row>
      <Row>
      <Col md={4}><strong><h3>{sample.WorkExperience.work2.start} - {sample.WorkExperience.work2.end}</h3></strong></Col>
      <Col md={8}>
      <strong><h3>{sample.WorkExperience.work2.company}, {sample.WorkExperience.work2.city}</h3></strong>
      <p>{sample.WorkExperience.work2.description}</p>
      </Col>
      </Row>
      </Row>
      
      <Row><h3>Education</h3>
      <Row>
      <Col md={4}><strong><h4>{sample.Education.instt1.start} - {sample.Education.instt1.end}</h4></strong></Col>
      <Col md={8}>
      <strong><h4>{sample.Education.instt1.name}</h4></strong>
      <p>Secured {sample.Education.instt1.degree} from {sample.Education.instt1.name}</p>
      </Col>
      </Row>
      <Row>
      <Col md={4}><strong><h4>{sample.Education.instt2.start} - {sample.Education.instt2.end}</h4></strong></Col>
      <Col md={8}>
      <strong><h4>{sample.Education.instt2.name}</h4></strong>
      <p>Secured {sample.Education.instt2.degree} from {sample.Education.instt2.name}</p>
      </Col>
      </Row>
      </Row>
      </Col>
      </Row>
      
      </div>
      </Grid>
    );
  }

  sampleThird(sample){
    return (
      <div id="template3">
      <h3>Sample3</h3>

      <header><Row>
      <h1 >{sample.first} {sample.last}</h1>
      <h2 >{sample.WorkExperience.work2.jobTitle}</h2>
      </Row></header>

      <Row>
      <Col md={4}><div className="side1">
      <strong><h3>Skills</h3></strong>
      <p>Branding</p><p>Print designing</p>
      <p>Web designs</p>
      </div></Col>
      <Col md={8}>
      <div className="side2">
      <strong><h3><Glyphicon glyph="user" /> Profile</h3></strong>
      <p>A small description about yourself in terms of your line or business/ occupation</p>
      </div>
      </Col>
      </Row>

      <Row>
      <Col md={4}><div className="side1">
      <strong><h3>Education</h3></strong>
      <strong><p>{sample.Education.instt1.name}</p></strong>
      <p>{sample.Education.instt1.degree}</p>
      <p>{sample.Education.instt1.start} - {sample.Education.instt1.end}</p>

      <strong><p>{sample.Education.instt2.name}</p></strong>
      <p>{sample.Education.instt2.degree}</p>
      <p>{sample.Education.instt2.start} - {sample.Education.instt2.end}</p>
      </div></Col>
      <Col md={8}>
      <div className="side2">
      <strong><h3><Glyphicon glyph="briefcase" /> Work Experience</h3></strong>
      <strong><p>{sample.WorkExperience.work1.company}, {sample.WorkExperience.work1.city} | 
      {sample.WorkExperience.work1.start} - {sample.WorkExperience.work1.end}</p></strong>
      <p>{sample.WorkExperience.work1.description}</p>

      <strong><p>{sample.WorkExperience.work2.company}, {sample.WorkExperience.work2.city} | 
      {sample.WorkExperience.work2.start} - {sample.WorkExperience.work2.end}</p></strong>
      <p>{sample.WorkExperience.work2.description}</p>
      </div>
      </Col>
      </Row>

      <Row>
      <Col md={4}><div className="side1">
      <strong><h3>Contact info</h3></strong>
      <p>{sample.localAddress.a1}, {sample.localAddress.a2}, PIN: {sample.localAddress.pin}</p>
      <p> {sample.phone}</p>
      <p> {sample.email}</p>
      </div></Col>
      <Col md={8}>
      <div className="side2">
      <strong><h3><Glyphicon glyph="list-alt" /> References</h3></strong>
      <p>{sample.References.reference1}</p>
      <p>{sample.References.reference2}</p>
      <p>{sample.References.reference3}</p>
      </div>
      </Col>
      </Row>
      </div>
    );
  }

  render() {
    const sample = this.props.sample
    return (
      <div>
      <section className="about">
        <h1><Label bsStyle="success">Check out our samples!</Label></h1>
      </section>
      <div className="card1">
      <Tabs bsStyle="tabs" defaultActiveKey={1} animation={false} id="noanim-tab-example">
       <Tab eventKey={1} title="Sample 1">{this.sampleFirst(sample)}</Tab>
       <Tab eventKey={2} title="Sample 2">{this.sampleSecond(sample)}</Tab>
       <Tab eventKey={3} title="Sample 3">{this.sampleThird(sample)}</Tab>
     </Tabs>
     </div>
      </div>
    );
  }
}

About.propTypes = {
  sample: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(About);
