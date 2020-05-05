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
                    <Col md="10">
                        <h5>About Me</h5>
                        <hr></hr>
                        <p>I am a PC enthusiast, an athlete, and a lifelong student. I try to always stay up to date with emerging programming languages and software suites. In my free time I enjoy tinkering with my Raspberry Pi and various Linux operating systems, along with creating simple programming tutorials on YouTube.</p>
                        <Button style={{marginBottom: '10px'}} href={process.env.PUBLIC_URL + '/Resume_5_2020Web.pdf'}>Resume</Button>
                    </Col>

                    <Col md="2">
                        <Image src={profilePic} fluid></Image>
                    </Col>    
                </Row>
                <br></br>
                <Row>
                    
                    <Col md="10">
                        
                        <h5>Education</h5>
                        <hr></hr>
                        <p>I received my Bachelor of Science in Computer Science from Western Michigan University in the class of 2020. I graduated Magna Cum Laude with a final GPA of 3.81. During my time at WMU I studied Java, MySQL, HTML, JavaScript, Data Structures and Algorithms, and C programming.</p>
                    </Col>
                    
                    <Col md="2">
                        <Image src={wmuLogo} fluid ></Image>
                    </Col>
                    
                </Row>

                <hr></hr>
            </Container>
        );
    }
}

export default About;