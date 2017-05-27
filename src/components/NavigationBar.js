import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

import Login from './Login';

class Navigation extends Component {
  render() {
    return (
  <Navbar inverse collapseOnSelect stacked>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/home"><Glyphicon glyph="home" /> Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}><Link to="/sample">Sample</Link></NavItem>
        <NavItem eventKey={2}><Link to="/create">Create</Link></NavItem>
        <NavItem eventKey={3}><Link to="/users">Users</Link></NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1}><Login/></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default Navigation;
