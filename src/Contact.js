import React, { Component } from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import { faGithubSquare, faYoutubeSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
    render() {

		const customLinkStyle = {
			color: "white"
			
		};


        return(
            <Container fluid style={{backgroundColor: 'rgb(56,59,76)', color: 'white', height: '100vh'}}>
                <br></br>
				<Row>
					<Col md="12">
						<h5>Get In Touch</h5>
						<hr></hr>
						<p>Feel free to send me an email or check out my profiles below!</p>
					</Col>
				</Row>
				<Row>
					<Col md="3">
						<FontAwesomeIcon icon={faEnvelope} size="2x" /><a style={customLinkStyle} href="mailto:17jaredt17@gmail.com"> 17jaredt17@gmail.com</a>
					</Col>
					
					<Col md="3">
						<FontAwesomeIcon icon={faLinkedin} size="2x" /><a style={customLinkStyle} href="https://www.linkedin.com/in/jared-teller/"> https://www.linkedin.com/in/jared-teller/</a>
					</Col>	
					
					<Col md="3">
						<FontAwesomeIcon icon={faGithubSquare} size="2x" /><a style={customLinkStyle} href="https://github.com/jaredt17"> https://github.com/jaredt17</a>
					</Col>	
						
					<Col md="3">
					<FontAwesomeIcon icon={faYoutubeSquare} size="2x" /><a style={customLinkStyle} href="https://www.youtube.com/channel/UCckTB2YocVwWV0jmc929wCw"> https://www.youtube.com/jaredt17</a>
					</Col>
					
				</Row>		
            </Container>
        );
    }
}

export default Contact;