import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; //this is not in use on this app
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/actions';



//import '../../../../node_modules/react-tabs/style/react-tabs.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div>Age :  <span>{this.props.age}</span></div>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.age
    }
}

const mapDispachToProps = (dispach) => {
    return {
        onAgeUp: () => dispach(actionCreators.ageUp(1)),
        onAgeDown: () => dispach(actionCreators.ageDown(1))
    }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
