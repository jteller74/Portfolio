import React, { Component } from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, ButtonGroup
  } from 'reactstrap';
import profilePic from './images/profile.jpg';
import Image from 'react-bootstrap/Image';
import wguLogo from './images/wgu.png';

class About extends Component {
    render () {
        return(
            <Container fluid style={{backgroundColor: 'rgb(56,59,76)', color: 'white'}}>
                <br></br>
                <Row>
                    <Col md="8">
                        <h5>About Me</h5>
                        <hr></hr>
                        <p>I have served major companies in various industries as an <strong>I.T. Project Manager</strong> for over 15 years. I also have prior experience in Network Engineering and Operations, and this summer I will complete a B.S. in Business & I.T. Management. I take great pride in my work, and in the trusted relationships I have built with my peers. I have been involved in the community as a youth baseball coach and mentor for over 20 years, and I enjoy playing guitar in my spare time. I reside in Macomb, Michigan with my wife Wendy, and my three boys... Jared, Justin, and Jordan. </p>
                        <ButtonGroup>
                            <Button style={{marginBottom: '10px', marginRight: '5px'}} href={process.env.PUBLIC_URL + '/Resume_5_2020Web.pdf'}>Resume</Button>
                            <Button style={{marginBottom: '10px', marginRight: '5px'}} href={process.env.PUBLIC_URL + '/CV5_20.pdf'}>Detailed CV</Button>
                            <Button style={{marginBottom: '10px', marginRight: '5px'}} href={process.env.PUBLIC_URL + '/jtellerCL_5_20.pdf'}>Cover Letter</Button>
                        </ButtonGroup>
                       
                    </Col>

                    <Col md="1">
                    </Col>

                    <Col md="2">
                        <Image src={profilePic} fluid></Image>
                    </Col>    
                </Row>
                <br></br>
                <Row>
                    
                    <Col md="8">
                        
                        <h5>Education</h5>
                        <hr></hr>
                        <p><strong>Western Governors University</strong> has provided me a seamless transition into an online curriculum where I am pursuing a B.S. in Business, Information Technology Management. Here my focuses are on IT management, global business, business strategy and ethics, data management, networking, security, operations and supply chain management, and finance. I am set to graduate in July 2020.</p>
                        <strong>Prior Network Engineering Experience and Certifications:</strong>
                        <li>Cisco CCNA 2000-2009</li>
                        <li>Cisco Advanced Wireless Field Specialist Certification 2006-2009</li>
                        <li>Training in Cisco LAN switching, PIX firewalls, and Sniffer Pro</li>
                    </Col>
                    
                    <Col md="1">
                    </Col>

                    <Col md="2">
                        <Image src={wguLogo} fluid ></Image>
                    </Col>
                    
                </Row>

                <hr></hr>
            </Container>
        );
    }
}

export default About;