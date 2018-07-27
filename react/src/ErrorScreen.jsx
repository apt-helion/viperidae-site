import React from 'react';

export default class ErrorScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>{this.props.error}</h1>
    }
}
