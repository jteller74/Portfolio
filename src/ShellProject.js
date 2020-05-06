import React, { Component } from 'react';
import {
    Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import { faGithubSquare, faYoutubeSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//hard coded shell project page, for simpler projects use the projectFull component
class ShellProj extends Component {
    render(){
        return(
            <Container fluid style={{backgroundColor: 'rgb(56,59,76)', color: 'white', height: '100vh'}}>
                <p>test</p>
            </Container>
        );
    }
}   

export default ShellProj;