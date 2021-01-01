import React from 'react';
import logo from '../logo.svg';
import {
	Switch,
	Route
} from 'react-router-dom';
import About from '../Components/About';
import Home from '../Components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
			<Route path='/about'>
				<About />
			</Route>
			<Route path='/'>
				<Home />
			</Route>
	  </Switch>
    </div>
  );
}

export default App;
