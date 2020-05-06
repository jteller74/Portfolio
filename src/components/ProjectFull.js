import React, { Component } from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import { faGithub, faYoutubeSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ProjectFull extends Component { //needs title, subtitle, link to github (optional), description, specifications (optional), 
    render(){
        return(
            <Container fluid style={{backgroundColor: 'rgb(56,59,76)', color: 'white', height: '100vh'}}>
                <Row style={{backgroundColor: 'rgb(73,78,91)'}}>
                    
                    <Col md="12">
                        <br></br>
                        <h5>{this.props.title}</h5>
                        <hr></hr>
                        <h7>{this.props.subtitle}</h7>
                        <br></br><br></br>
                        { this.props.gitLink != null &&
                            <Button href={this.props.gitLink}><FontAwesomeIcon icon={faGithub}/> View Code on Github</Button>
                        }
                        <p></p>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <br></br>
                        <h6>Background</h6>
                        <hr></hr>
                        <p>{this.props.description}</p>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default ProjectFull;