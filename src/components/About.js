import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Tabs, Tab} from 'react-bootstrap';

class About extends Component {
  constructor(props){
    super(props)

    this.sampleFirst = this.sampleFirst.bind(this)
    this.sampleSecond = this.sampleSecond.bind(this)
    this.sampleThird = this.sampleThird.bind(this)
  }

  sampleFirst(){
    return (
      <div>
      <h3>Sample1</h3>
      </div>
    );
  }

  sampleSecond(){
    return null;
  }

  sampleThird(){
    return null;
  }
  render() {
    console.log('Sample: ', this.props.sample)
    const sample = this.props.sample
    console.log('Name: ', sample.first)
    return (
      <div>
      <section className="about">
        <h2 className="card1">Check out our samples!</h2>
        <div>{this.props.aboutData}</div>
      </section>
      <div className="card1">
      <Tabs bsStyle="pills" defaultActiveKey={1} animation={false} id="noanim-tab-example">
       <Tab eventKey={1} title="Sample 1">{this.sampleFirst()}</Tab>
       <Tab eventKey={2} title="Sample 2">Sample 2</Tab>
       <Tab eventKey={3} title="Sample 3">Sample 3</Tab>
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
