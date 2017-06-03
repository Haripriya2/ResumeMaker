import React, { Component } from 'react';
import {Tab, Col, Row, Nav, NavItem, Panel} from 'react-bootstrap';

import About from './About';
import Template1 from '../samples/Template1';
import Template2 from '../samples/Template2';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selected: 1
    }

    //this.renderView = this.renderView.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(key){
      this.setState({selected: key});
  }

 /* renderView(){
      switch(this.state.selected) {
          case 1: return <Template1 />
          case 2: return <Template2 />
          default: return <About aboutData="This is sample page" />
      }
  }
*/
  render() {
      //const sample = this.renderView();
    return (
        <Panel>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
       <Row className="clearfix">
      <Col sm={4}>
        <Nav bsStyle="pills" onSelect={this.handleSelect} stacked>
          <NavItem eventKey={1}>
            Sample 1
          </NavItem>
          <NavItem eventKey={2}>
            Sample 2
          </NavItem>
        </Nav>
      </Col>
      <Col sm={8}>
        <Tab.Content animation>
          <Tab.Pane eventKey={1}>
            
          </Tab.Pane>
          <Tab.Pane eventKey={2}>
            
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
    </Panel>
    );
  }
}

export default Sample;
