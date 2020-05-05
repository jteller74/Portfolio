import React, { Component } from 'react';
import Preview from './components/ProjectPreview';
import {
  Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import hashPicture from './images/hashmap.png';
import shellPic from './images/shellthumbnail.jpg'
import snackPic from './images/snackproj.png';
import hisser from './images/hisserproj.png';
import youtubeImage from './images/youtube.png'

class Project extends Component {
    render() {
        return ( //the container is a bootstrap container for responsive layouts
            <Container fluid style={{backgroundColor: "rgb(46,49,65)"}}>
            <h5 style={{color: 'white'}}>Projects</h5>
			<hr></hr>
            <Row>
                <Col md="4" sm="6">    
                    <Preview title='Custom Shell' text="A custom shell written in C that features Finite State Machine design, Make, lexical analysis (tokenization), file redirection, and Pipes. Built within Windows Subsystem for Linux and Visual Studio Code." imagePath={shellPic}  link="https://github.com/jaredt17/CustomShell_C" />
                    <Preview title='Hisser Sharing' text="A twitter clone created using PHP, MySQLi, HTML, Bootstrap, and CSS. Features custom profiles, user feeds, posts, and searching." imagePath={ hisser } link="https://github.com/jaredt17/HisserSharing" />
                </Col>

                <Col md="4" sm="6">
                    <Preview title='Snack Finder' text="A Python (Django) web application for finding local snacks. Features authentication, PostgreSQL, MVC design, and Bootstrap." link="https://github.com/jaredt17/CacheSimulator" imagePath={ snackPic } link="https://github.com/jaredt17/foodFinder"/>
                    <Preview title='Hashing Based Search Engine' text="A custom hashing based search engine built in Java utilizing separate chaining and stacks. Allows user to enter input expressions in Postfix notation to search the document for a corresponding URL." link="https://github.com/jaredt17/HashingBasedSearchEngine" imagePath={hashPicture} />
                </Col>

                <Col md="4" sm="6">
                    
                    <Preview title='YouTube Channel' text="My YouTube channel has about 650 Subscribers and over 125,000 views! I generally share my custom scripts for video games written in AutoHotkey scripting language." imagePath={ youtubeImage } />
                </Col>
            </Row>

            </Container>
            
        );
    }
}

export default Project;