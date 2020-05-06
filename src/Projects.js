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
import youtubeImage from './images/youtube.png';
import portImage from './images/react.jpg';

class Project extends Component {
    render() {
        return ( //the container is a bootstrap container for responsive layouts
            <Container fluid style={{backgroundColor: "rgb(46,49,65)"}}>
                <br></br>
                <h5 style={{color: 'white'}}>Projects</h5>
                <hr></hr>
                <Row>
                    <Col md="4" sm="6">    
                        <Preview title='Custom Shell' text="A custom shell written in C that features Finite State Machine design, Make, lexical analysis (tokenization), file redirection, and Pipes. Built within Windows Subsystem for Linux and Visual Studio Code." imagePath={shellPic}  gitLink="https://github.com/jaredt17/CustomShell_C" link="/projects/customShell"/>
                        <Preview title='Hisser Sharing' text="A twitter clone created using PHP, MySQLi, HTML, Bootstrap, and CSS. Features custom profiles, user feeds, posts, and searching." imagePath={ hisser } gitLink="https://github.com/jaredt17/HisserSharing" />
                    </Col>

                    <Col md="4" sm="6">
                        <Preview title='Snack Finder' text="A Python (Django) web application for finding local snacks. Features authentication, PostgreSQL, MVC design, and Bootstrap." imagePath={ snackPic } gitLink="https://github.com/jaredt17/foodFinder"/>
                        <Preview title='Hashing Based Search Engine' text="A custom hashing based search engine built in Java utilizing separate chaining and stacks. Allows user to enter input expressions in Postfix notation to search the document for a corresponding URL." gitLink="https://github.com/jaredt17/HashingBasedSearchEngine" imagePath={hashPicture} />
                    </Col>

                    <Col md="4" sm="6">
                        <Preview title='This Portfolio Web App!' text="The portfolio you are looking at now was created using React, JavaScript, HTML, CSS, and React Bootstrap. Every project shown is based on a project preview component and the entire project page was added to the home page as a component itself." imagePath={portImage} gitLink="https://github.com/jaredt17/Portfolio" />
                        <Preview title='My YouTube Channel' text="My YouTube channel has about 650 Subscribers and over 125,000 views! I generally share my custom scripts for video games written in AutoHotkey scripting language." imagePath={ youtubeImage } link="https://www.youtube.com/channel/UCckTB2YocVwWV0jmc929wCw" />
                        
                    </Col>
                </Row>

            </Container>
            
        );
    }
}

export default Project;