import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FootBar from "_c/foot-bar";
import BrowserRouter from "@/router";
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="content">
            <BrowserRouter />
          </div>
          <FootBar />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
