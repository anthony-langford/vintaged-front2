import React, {Component} from 'react';
import {connect} from 'react-redux'
import {change, changeBack} from './actions'
import logo from './logo.svg';
import ContactPage from './components/FormContainer'
import './App.css';

class App extends Component {

    componentWillReceiveProps(nextProps){
        let temp = nextProps;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.props.changed}</h1>
                    <button onClick={this.props.change}>button</button>
                    <button onClick={this.props.changeBack}>button</button>

                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ContactPage/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {changed: state.base.change};
};

const mapDispatchToProps = dispatch => {
    return {
        change: () => {
            dispatch(change());

        },
        changeBack: () => {
            dispatch(changeBack());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
