import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <h1>Viperidae</h1>
                <h2>Open Source Search Engine</h2>
                <p>This is the restricted, public version. If you are a developer please go <a href="https://developer.viperidae.app">here.</a></p>

                <InputField />
            </div>
        )
    }
}

class InputField extends React.Component {
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

    submit() {
        console.log(this.state.search);
        console.log(this.state.website);
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

    render() {
        const buttonValue = this.state.submitForm ? 'Submit' : 'Next';

        if (this.state.submitForm) {
            return (
                <div>
                    <SearchInput onChange={(evt) => this.updateSearch(evt)} />
                    <SubmitButton onClick={() => this.clickButton()} value={buttonValue} />
                </div>
            )
        } else {
            return (
                <div>
                    <WebsiteInput onChange={(evt) => this.updateWebsite(evt)} />
                    <SubmitButton onClick={() => this.clickButton()} value={buttonValue} />
                </div>
            )
        }
    }
}

class SubmitButton extends React.Component {
    render() {
        return (
            <button className="btn main-btn"
                onClick={() => this.props.onClick()}
                type="button">
                {this.props.value}
            </button>
        )
    }
}

class WebsiteInput extends React.Component {
    render() {
        return (
            <div className="field">
                <label>Enter a website url</label> <br/>
                <div className="control">
                    <input className="input is-primary"
                        onChange={evt => this.props.onChange(evt)}/>
                </div>
            </div>
        )
    }
}

class SearchInput extends React.Component {
    render() {
        return (
            <div className="field">
                <label>Enter a search term.</label> <br/>
                <div className="control">
                    <input className="input is-primary"
                        onChange={evt => this.props.onChange(evt)}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
