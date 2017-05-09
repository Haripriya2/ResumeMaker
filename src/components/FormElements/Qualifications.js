import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';

class Qualifications extends Component {
    render() {
        const qualifications = this.props.data
        return(
            <div>
            <h4> Qualifications </h4>
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