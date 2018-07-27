import React from 'react';
import axios from 'axios';

import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';

export default class ResultsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            results: [],
            error: null,
        };
    }

    componentDidMount() {
        const self = this;

        axios.get('/api/search', {
            params: {
                u: this.props.website,
                q: this.props.search
            }
        }).then(function(response) {
            self.setState({
                loading: false,
                results: response.data,
                error: response.data.error,
            });
        });
    }

    render() {
        const {loading, results, error} = this.state;

        if (loading) return <LoadingScreen />
        if (error)   return <ErrorScreen error={error} />

        return <ResultsField results={results} />
    }
}

function ResultsField(props) {
    return (
        <div>Hello</div>
    )
}

function ResultBox(props) {
    return (
        <div>
        </div>
    )
}
