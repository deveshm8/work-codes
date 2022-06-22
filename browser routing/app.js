import React from "react";
import {Route, Switch} from "react-router-dom";
import "./styles.css";
import About from './About';
import Contact from './Contact';
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={About}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
    </div>
  );
}
