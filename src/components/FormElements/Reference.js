import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';
import {Label} from 'react-bootstrap';

class Reference extends Component {
    render() {
        const reference = this.props.data
        return(
            <div><h3><Label bsStyle="warning"> References</Label></h3><br/>
            <RichTextEditor value={reference.reference} onChange={(value,field) => this.props.change(value,'reference')} />
            </div>
        );
    }
}
Reference.PropTypes = {
    change: PropTypes.func,
    data: PropTypes.object
}
export default Reference;