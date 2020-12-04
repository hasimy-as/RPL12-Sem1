import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/tentangsaya' component={About} />
			<Route exact path='/karya' component={Works} />
			<Route exact path='/kontak' component={Contact} />
		</Switch>
	);
};
export default Main;
