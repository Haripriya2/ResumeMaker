import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

class Navigation extends Component {
  render() {
    return (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"><Glyphicon glyph="home" /> Home</a>
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
        <NavItem eventKey={1} href="#">Search</NavItem>
        <NavItem eventKey={2} href="#">Login/Sign up</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default Navigation;
