import React from 'react';

export default class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            website: '',
            search: '',
            submitForm: false,
        };
    }

    updateWebsite(evt) {
        this.setState({
            website: evt.target.value
        });
    }

    updateSearch(evt) {
        this.setState({
            search: evt.target.value
        });
    }

    clickButton() {
        if (this.state.submitForm) {
            this.submit();
        } else {
            this.setState({
                submitForm: true
            });
        }
    }

    submit() {
        this.props.callBackFromParent(this.state);
    }

    render() {
        const buttonValue = this.state.submitForm ? 'Submit' : 'Next';

        return (
            <div className="main">
                <h1>Viperidae</h1>
                <h2>Open Source Search Engine</h2>
                <p>This is the restricted, public version. If you are a developer, please go <a href="https://developer.viperidae.app">here</a> for the fully featured API.</p>

                <div>
                    {this.state.submitForm ?
                        <SearchInput
                            website={this.state.website}
                            onChange={evt => this.updateSearch(evt)}
                        />
                        :
                        <WebsiteInput onChange={evt => this.updateWebsite(evt)} />
                    }
                    <SubmitButton onClick={() => this.clickButton()} value={buttonValue} />
                </div>
            </div>

        )
    }
}

function SubmitButton(props) {
    return (
        <button
            className="btn main-btn"
            onClick={props.onClick}
            type="button"
        >
            {props.value}
        </button>
    )
}

function WebsiteInput(props) {
    return (
        <div className="field">
            <label>Enter a website url</label> <br/>
            <div className="control">
                <input
                    className="input is-primary"
                    onChange={evt => props.onChange(evt)}
                />
            </div>
        </div>
    )
}

function SearchInput(props) {
    return (
        <div className="field">
            <label>Enter a search term for</label> <br />

            <p className="confirm-text">
                <small>{props.website}</small>
            </p>

            <div className="control">
                <input
                    className="input is-primary"
                    onChange={evt => props.onChange(evt)}
                />
            </div>
        </div>
    )
}
