import React, { Component } from 'react';
import userList from '../containers/userList';

class Users extends Component {
  render() {
    return (
      <div>
        <h2>Users list</h2>
        <userList />
        <hr/>
        <h2>User Details</h2>
      </div>
    );
  }
}

export default Users;
