import React, { Component } from 'react';
import Preview from './components/ProjectPreview';
import {
  Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

class Project extends Component {
    render() {
        return ( //the container is a bootstrap container for responsive layouts
            <Container fluid>
                

            <CardDeck>
                <Preview title='test' subtitle="Testing this out" text="asdfdsfdsddddddddddddddddddddddddddddddddddddddddddddddddddddddd teller"/>
                <Preview title='test' subtitle="Testing this out" text="asdfdsfdsddddddddddddddddddddddddddddddddddddddddddddddddddddddd teller"/>
                <Preview title='test' subtitle="Testing this out" text="asdfdsfdsddddddddddddddddddddddddddddddddddddddddddddddddddddddd teller"/>

                <Preview title='test' subtitle="Testing this out" text="asdfdsfdsddddddddddddddddddddddddddddddddddddddddddddddddddddddd teller"/>
            </CardDeck>

            <CardDeck>
            <Preview title='test' subtitle="Testing this out" text="asdfdsfdsddddddddddddddddddddddddddddddddddddddddddddddddddddddd teller"/>
                <Preview title='test' subtitle="Testing this out" text="asdfdsfdsddddddddddddddddddddddddddddddddddddddddddddddddddddddd teller"/>

                <Preview title='Testing Title' subtitle="Testing this out" text="asdfdsfdsddddddddddddddddddddddddddddddddddddddddddddddddddddddd teller" link="https://github.com/jaredt17/CacheSimulator"/>
            </CardDeck>


            </Container>
            
        );
    }
}

export default Project;