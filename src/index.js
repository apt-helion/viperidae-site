import React from 'react';
import ReactDOM from 'react-dom';

import InputField from './InputField';

import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            website: '',
            search: '',
            loading: false,
        };
    }

    submitCallBack = (childData) => {
        this.setState({
            website: childData.website,
            search: childData.search,
        });
    }

    render() {
        return (
            <InputField callBackFromParent={this.submitCallBack} />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
