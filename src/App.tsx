import React from 'react';
import {Component} from "react";
import {Provider} from "mobx-react";
import {todoStore} from "./store/TodoStore";

import './App.scss';

class App extends Component {

    render() {
        return (
            <Provider store={todoStore}>
                <div className="App">
                </div>
            </Provider>
        );
    }

}

export default App;
