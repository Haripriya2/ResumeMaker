import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class userList extends Component {
    render() {
        return (
            <div>
            <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            </ul>
            </div>
        );
    }
}

export default userList;
