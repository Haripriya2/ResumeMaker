import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';

class Reference extends Component {
    render() {
        const reference = this.props.data
        return(
            <div><h4> References </h4>
            <RichTextEditor
        value={reference.reference}
        onChange={(value,field) => this.props.change(value,'reference')}
      />
      </div>
        );
    }
}
Reference.PropTypes = {
    change: PropTypes.func,
    data: PropTypes.object
}
export default Reference;