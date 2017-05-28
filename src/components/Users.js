import React, { Component } from 'react';
import ListOfUsers from '../containers/userList';
import Details from '../containers/userDetail';
import {Panel} from 'react-bootstrap';

class Users extends Component {
  render() {
    return (
      <Panel>
      <div className="row">
      <div className="col-md-4">
        <h2>Users list</h2><ListOfUsers />
       </div> 
       <div className="col-md-4">
        <h2>User Details</h2>
        <Details />
        </div>
        </div>
      </Panel>
    );
  }
}

export default Users;
