import React from 'react';
import axios from 'axios';

import LoadingScreen from './LoadingScreen';

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
            const data = JSON.parse(response.data);

            self.setState({
                loading: false,
                results: data,
                error: data.error
            });
        });
    }

    render() {
        const {loading, results, error} = this.state;

        if (loading) return <LoadingScreen />
        if (error)   return <ErrorScreen error={error} />

        return <ResultsField results={results} website={this.props.website} item={this.props.search} />
    }
}

function ResultsField(props) {
    return (
        <div className="results-field">
            <h1>Search results for <i>{props.website}</i></h1>
            <p><small>Search item: <b><i>{props.item}</i></b></small></p>
            {props.results.map((result, i) => <ResultBox result={result} key={i} />)}
        </div>
    )
}

function ResultBox(props) {
    return (
        <div className="result-box">
            <a href={props.result.uri}>
                <p className="result-title">{props.result.content.title}</p>
                <p className="result-link"><small>{props.result.uri}</small></p>
            </a>
            <p>{props.result.content.blurb}</p>
        </div>
    )
}

function ErrorScreen(props) {
    return (
        <div className="main">
            <h1>Error {props.error.status}</h1>
            <h3>"{props.error.message}"</h3>
            <p>Click <a href="/">here</a> to go back</p>
        </div>
    )
}
