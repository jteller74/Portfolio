import React, { Component } from 'react';
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink
} from 'reactstrap';


class Preview extends Component { //needs title, subtitle, text, and a link to github if available
    render() {
        return (
            <Card body inverse style={{backgroundColor: '#333', borderColor: '#333', margin: '5px'}}>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                    <CardText>{this.props.text}</CardText>
                    <CardLink href={this.props.link}>View on Github</CardLink>
                </CardBody>
            </Card>
        );
    }
}

export default Preview;