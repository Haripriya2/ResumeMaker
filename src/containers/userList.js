import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions';

import {Button} from 'react-bootstrap';

class ListOfUsers extends Component {
  renderList(){
    return this.props.user.map((user) => {
      return(
        <div>
        <Button bsStyle="success">
        <li key={user.id} onClick={() => this.props.selectUser(user)}>{user.first} {user.last}</li>
        </Button>
        <br/>
       </div>
    );
    });
  }
  render() {
    return (
     <ul>
     {this.renderList()}
     </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);
