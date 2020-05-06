import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './components/Footer';
import ProjectFull from './components/ProjectFull';
import ShellProj from './ShellProject';
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

						<Route exact path="/projects">
							<Projects />
							<Footer />
						</Route>

						<Route path="/contact">
							<Contact />
							<Footer />
						</Route>

						<Route path="/projects/customShell">
							<ShellProj />
							{/*<ProjectFull title="Custom Shell in C" subtitle="A custom shell written in C for linux" gitLink="https://github.com/jaredt17/CustomShell_C" description="This project is an attempt to create a custom Shell program from scratch that can utilize all of the Linux built in commands. The Shell is to function by running through a Finite State Machine for all of the tokenized user input passed through a lexical analyzer. Git was used for Version Control."/>*/}
						</Route>
					</Switch>


				</div>
		</Router>
		);
	}

}

export default App;
