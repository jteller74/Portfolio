import React, { Component } from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import profilePic from './images/pic01.jpg';
import Image from 'react-bootstrap/Image'

class About extends Component {
    render () {
        return(
            <Container fluid style={{backgroundColor: 'rgb(76,92,150)', color: 'white'}}>
                <br></br>
                <Row>
                    <Col md="9">
                        <h5>About Me</h5>
                        <hr></hr>
                        <p>I received my Bachelor of Science in Computer Science from Western Michigan University in the class of 2020. I graduated Magna Cum Laude with a final GPA of 3.81. I specialize in Full Stack development and have utilized various tech stacks. I also have a strong background in Information Technology.</p>
                    </Col>

                    <Col md="3">
                        <Image src={profilePic} fluid roundedCircle></Image>
                    </Col>    
                </Row>

                <Row>
                    <Col md="12">
                        <hr></hr>
                        <h5>Education</h5>
                    </Col>
                    
                </Row>

                <hr></hr>
            </Container>
        );
    }
}

export default About;