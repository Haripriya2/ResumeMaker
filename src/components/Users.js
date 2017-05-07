import React, { Component } from 'react';
import ListOfUsers from '../containers/userList';
import Details from '../containers/userDetail';
import {Panel} from 'react-bootstrap';

class Users extends Component {
  render() {
    return (
      <Panel>
        <h2>Users list</h2>
        <ListOfUsers />
        <hr/>
        <h2>User Details</h2>
        <Details />
      </Panel>
    );
  }
}

export default Users;
