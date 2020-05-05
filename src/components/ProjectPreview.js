import React, { Component } from 'react';
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink
} from 'reactstrap';


class Preview extends Component { //needs title, subtitle, text, and a link to github if available
    render() {
        return (
            <Card inverse style={{backgroundColor: '#333', borderColor: '#333', marginBottom: '10px'}}>
                <CardImg top width="100%" src={this.props.imageLink} alt="No Image" />
                <CardBody>
                    <CardTitle style={{fontWeight: "bold"}} className="text-center">{this.props.title}</CardTitle>
                    <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                    <CardText>{this.props.text}</CardText>
                    <Button href={this.props.link}>View on Github</Button>
                </CardBody>
            </Card>
        );
    }
}

export default Preview;