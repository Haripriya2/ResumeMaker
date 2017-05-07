import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  render() {
    if (!this.props.user) {
      return (
        <h4>Select a user</h4>
      );
    }
    return (
        <div>
        <h3>{this.props.user.first} {this.props.user.last}</h3>
        <h4> Age: {this.props.user.age} </h4>
        <h5> Email: {this.props.user.email}</h5>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.activeUser
  }
}


export default connect(mapStateToProps)(Details);
