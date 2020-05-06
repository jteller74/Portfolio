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
import nl2br from 'react-newline-to-break';
import './App.css';

class App extends Component {

	render() {

		return (
			<Router basename="/">
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

						{/* 
						<ProjectFull 
							companyName="" 
							location=""" 
							posTitle="" dateRange="" 
							
							projectDate1=""
							projectName1="" 
							description1=""

							projectDate2=""
							projectName2="" 
							description2=""

							projectDate3=""
							projectName3="" 
							description3=""

							projectDate4=""
							projectName4="" 
							description4=""
							*/}


					</Switch>


				</div>
		</Router>
		);
	}

}

export default App;
