import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BrowserRouter from "@/router";
import { Provider } from 'react-redux';
import store from './store';
import {SafeArea} from 'antd-mobile'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <SafeArea position="top" />
          <BrowserRouter />
          <SafeArea position="bottom" />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
