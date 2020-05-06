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
            <Container fluid style={{backgroundColor: 'rgb(56,59,76)', color: 'white'}}>
                <Row style={{backgroundColor: 'rgb(73,78,91)'}}>
                    
                    <Col md="12">
                        <br></br>
                        <h5>{this.props.companyName}</h5>
                        <hr></hr>
                        <h7><strong>Location:</strong> {this.props.location}</h7>
                        <br></br>
                        <h7><strong>Title:</strong> {this.props.posTitle}</h7>
                        <br></br>
                        <h7><strong>Date:</strong> {this.props.dateRange}</h7>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <br></br>
                        <h6>Projects</h6>
                        <hr></hr>
                        <h7>{this.props.projectDate1}<br></br> <strong>{this.props.projectName1}</strong></h7>
                        <p>{this.props.description1}</p>

                        <h7>{this.props.projectDate2}<br></br> <strong>{this.props.projectName2}</strong></h7>
                        <p>{this.props.description2}</p>

                        <h7>{this.props.projectDate3}<br></br> <strong>{this.props.projectName3}</strong></h7>
                        <p>{this.props.description3}</p>

                        <h7>{this.props.projectDate4}<br></br> <strong>{this.props.projectName4}</strong></h7>
                        <p>{this.props.description4}</p>

                        <h7>{this.props.projectDate5}<br></br> <strong>{this.props.projectName5}</strong></h7>
                        <p>{this.props.description5}</p>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default ProjectFull;