import React from 'react';

export default class LoadingScreen extends React.Component {
    render() {
        return (
            <div className="main fade-in">
                <h1>Loading</h1>
                <div class="sk-folding-cube">
                    <div class="sk-cube1 sk-cube"></div>
                    <div class="sk-cube2 sk-cube"></div>
                    <div class="sk-cube4 sk-cube"></div>
                    <div class="sk-cube3 sk-cube"></div>
                </div>
                <p>Please wait while the website is being crawled.</p>
            </div>
        )
    }
}
