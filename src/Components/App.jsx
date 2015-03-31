var DataStore = require('../Stores/DataStore');

// Include Component Specific css
require('./styles/app.css');

var App = React.createClass({
    getInitialState: function() {
        return DataStore.getAll();
    },
    _onChange: function() {
        this.setState(DataStore.getAll());
    },
    componentDidMount: function() {
        DataStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        DataStore.removeChangeListener(this._onChange);
    },
    render: function() {
        if (this.state) {
            return (

                <main>
                    <Header title={this.state.title} tagline={this.state.tagline}/>

                    <p>{this.state.welcomeMessage}</p>

                    <Footer text="Copyright (c) 2015" />
                </main>
            );
        }
    }
});


var Header = React.createClass({
    render: function () {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <p>{this.props.tagline}</p>
            </header>
        );
    }
});

var Footer = React.createClass({
    render: function () {
        return (
            <footer>
                <span>{this.props.text}</span>
            </footer>
        );
    }
});


module.exports = App;
