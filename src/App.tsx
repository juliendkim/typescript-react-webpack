import React from 'react';
import {Component} from "react";
import {Provider} from "mobx-react";
import {todoStore} from "./store/TodoStore";


import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <Provider store={todoStore}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                </div>
            </Provider>
        );

    }
}

export default App;
