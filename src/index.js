import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
    render() {
        return (
            <div class="main">
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
            submitForm: false,
        };
    }

    submit() {
        alert('hello');
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
                    <SearchInput />
                    <button className="btn main-btn"
                        onClick={() => this.clickButton()}
                        type="button">{buttonValue}</button>
                </div>
            )
        } else {
            return (
                <div>
                    <WebsiteInput />
                    <button className="btn main-btn"
                        onClick={() => this.clickButton()}
                        type="button">{buttonValue}</button>
                </div>
            )
        }
    }
}

class WebsiteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    render() {
        return (
            <div className="field">
                <label>Enter a website url</label> <br/>
                <div className="control">
                    <input className="input is-primary"
                        value={this.state.inputValue}
                        onChange={evt => this.updateInputValue(evt)}/>
                </div>
            </div>
        )
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }
}

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    render() {
        return (
            <div class="field">
                <label>Enter a search term.</label> <br/>
                <div class="control">
                    <input class="input is-primary"
                        value={this.state.inputValue}
                        onChange={evt => this.updateInputValue(evt)}/>
                </div>
            </div>
        )
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
