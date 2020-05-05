import React, { Component } from 'react';
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink, ButtonGroup
} from 'reactstrap';


class Preview extends Component { //needs title, subtitle, text, and a link to github if available
    render() {
        return (
            <Card inverse style={{backgroundColor: 'rgb(53,56,73)', borderColor: '#333', marginBottom: '10px'}}>
                <CardImg top width="100%" src={this.props.imagePath} alt="No Image" href={this.props.pageLink}/>
                <CardBody>
                    <CardTitle style={{fontWeight: "bold"}} className="text-center">{this.props.title}</CardTitle>
                    <hr></hr>
                    <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                    <CardText>{this.props.text}</CardText>
                    
                    <ButtonGroup>
                        <Button style={{marginRight: '5px'}} href={this.props.link}>Learn More</Button>
                        <Button href={this.props.link}>View on Github</Button>
                    </ButtonGroup>
                   
                  
                    
                </CardBody>
            </Card>
        );
    }
}

export default Preview;