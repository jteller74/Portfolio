import React, { Component } from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import profilePic from './images/pic01.jpg';
import Image from 'react-bootstrap/Image';
import wmuLogo from './images/wmulogo.jpg';

class About extends Component {
    render () {
        return(
            <Container fluid style={{backgroundColor: 'rgb(56,59,76)', color: 'white'}}>
                <br></br>
                <Row>
                    <Col md="9">
                        <h5>About Me</h5>
                        <hr></hr>
                        <p>I am a PC builder, an athlete, and a lifelong student. I am up to date on various current programming languages and software suites. </p>
                        <Button href={process.env.PUBLIC_URL + '/Resume_5_2020Web.pdf'}>Resume</Button>
                    </Col>

                    <Col md="3">
                        <Image src={profilePic} fluid roundedCircle></Image>
                    </Col>    
                </Row>
                <br></br>
                <Row>
                    
                    <Col md="9">
                        
                        <h5>Education</h5>
                        <hr></hr>
                        <p>I received my Bachelor of Science in Computer Science from Western Michigan University in the class of 2020. I graduated Magna Cum Laude with a final GPA of 3.81.</p>
                    </Col>
                    
                    <Col md="3">
                        <Image src={wmuLogo} fluid ></Image>
                    </Col>
                    
                </Row>

                <hr></hr>
            </Container>
        );
    }
}

export default About;