import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BrowserRouter from "@/router";
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <BrowserRouter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
