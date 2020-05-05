import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

	render() {

		return (
			<Router>
				<div style={{backgroundColor: "rgb(46,49,65)"}}>
					<Navbar />

					<Switch>

						<Route exact path="/">
							<About />
							<Projects />
							<Contact />
							<Footer />
						</Route>

						<Route path="/about">
							<About />
							<Footer />
						</Route>

						<Route path="/projects">
							<Projects />
							<Footer />
						</Route>

						<Route path="/contact">
							<Contact />
							<Footer />
						</Route>
					</Switch>


				</div>
		</Router>
		);
	}

}

export default App;
