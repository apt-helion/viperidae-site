import React from 'react';
import ReactDOM from 'react-dom';

import InputField from './InputField';
import ResultsScreen from './ResultsScreen';

import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            website: '',
            search: '',
            viewResults: false,
        };
    }

    submitCallBack = (childData) => {
        this.setState({
            website: childData.website,
            search: childData.search,
            viewResults: true,
        });
    }

    render() {
        if (this.state.viewResults)
            return <ResultsScreen website={this.state.website} search={this.state.search} />

        return <InputField callBackFromParent={this.submitCallBack} />
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
