import React, { Component } from 'react';
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink, ButtonGroup, CardFooter
} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutubeSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


class Preview extends Component { //needs title, subtitle, text, and a link to github if available
    render() {
        return (
            <Card inverse style={{backgroundColor: 'rgb(53,56,73)', borderColor: '#333', marginBottom: '10px'}}>
                <CardImg top width="100%" src={this.props.imagePath} alt="No Image" href={this.props.pageLink}/>
                <CardBody>
                    <CardTitle style={{fontWeight: "bold"}} className="text-center">{this.props.title}</CardTitle>
                    <CardSubtitle tag="h6" className="text-center">{this.props.subtitle}</CardSubtitle>
                    <hr></hr>
                    <CardText>{this.props.text}</CardText>

                </CardBody>
                <CardFooter style={{backgroundColor: 'rgb(52,58,64)'}}>
                    { this.props.date }
                </CardFooter>
            </Card>
        );
    }
}

export default Preview;