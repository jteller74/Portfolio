import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Projects from './Projects';
import './App.css';


class App extends Component {

	render() {

		return (
			<Router>
				<div>
					<Navbar />
					<Route path="/projects" component={Projects} />

				</div>
		</Router>
		);
	}

}

export default App;
