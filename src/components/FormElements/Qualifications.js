import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';
import {Label} from 'react-bootstrap';

class Qualifications extends Component {
    render() {
        const qualifications = this.props.data
        return(
            <div>
            <h3><Label bsStyle="warning"> Skills</Label></h3><br/>
            <RichTextEditor
        value={qualifications.qualification}
        onChange={(value,field) => this.props.change(value,'qualification')}
      />
        </div>
        );
    }
}
Qualifications.PropTypes = {
    change: PropTypes.func,
    data: PropTypes.object
}
export default Qualifications;