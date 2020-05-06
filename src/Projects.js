import React, { Component } from 'react';
import Preview from './components/ProjectPreview';
import {
  Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import meritor from './images/meritor.jpg';
import ally from './images/ally.jpg';
import gm from './images/gm.jpg';
import ibm from './images/ibm.png';
import dow from './images/dow.jpg';
import nl2br from 'react-newline-to-break';

class Project extends Component {
    render() {
        return ( //the container is a bootstrap container for responsive layouts
            <Container fluid style={{backgroundColor: "rgb(46,49,65)"}}>
                <br></br>
                <h5 style={{color: 'white'}}>Experience</h5>
                <hr></hr>
                <Row>
                    <Col md="3" sm="6">    
                        <Preview title={nl2br('Meritor\nSR. IT Project Manager')} subtitle="Vision IT" text={nl2br('Managed all aspects of network integrations for corporate acquisitions: Fabco / AA-Gear/ AxleTech / TransPower – in progress. \n\nCreated IS integration run book to facilitate future acquisitions.')} imagePath={meritor} date="October 2018 - Present" />
                        <Preview title={nl2br('DOW Chemical\nNetwork Performance Specialist')} subtitle="IBM/AT&T - ICS" text={nl2br("Deployed Cisco network infrastructure across Dow network for VoIP initiative. \n\n3rd level escalation of LAN, WAN, and VPN incidents related to Dow network. \n\nCoordination of numerous U.S. site installations and upgrades")} imagePath={ dow } date="October 2007 - March 2010" />
                    </Col>

                    <Col md="3" sm="6">
                        <Preview title={nl2br('Ally Financial\nSR. Network Project Manager')} subtitle="Tek Systems" text={nl2br('Project lead for Internet Colo relocation / AWS cloud initiative. \n\nDirected network hardware refresh across 11 Ally corporate offices. \n\nCoordinated creation of new network segment to support TradeKing acquisition.')} imagePath={ ally } date="June 2016 - May 2018" />
                        <Preview title={nl2br('General Motors\nNetwork Deployment Manager')} subtitle="Ajilon" text={nl2br("Directed fiber plant installations and LAN hardware upgrades for several GMNA assembly plants: \nOrion / Bowling Green / Pontiac Assembly / Grand Blanc / Flint & Pontiac Metal Centers / Warren Transmission. \n\nManaged Wifi upgrades and firewall deployments at various GMNA sites")} imagePath={gm} date="January 2005 - October 2007"/>
                    </Col>

                    <Col md="3" sm="6">
                        <Preview title={nl2br('General Motors\nNetwork Implementation Manager')} subtitle="Tek Systems" text={nl2br("One-year project to inventory Onstar network and assist with transitioning in-house for GM management. \n\nProject lead for Onstar (GCCX) Mexico City call center relocation. \n\nCoordinated hardware upgrade / refresh efforts at several GM sites")} imagePath={gm} date="July 2015 - June 2016"/>
                    </Col>

                    <Col md="3" sm="6">
                        <Preview title={nl2br('IBM\nGlobal Network Transition Manager')} subtitle="CDI IT Solutions" text={nl2br("Global network program lead for IBM’s Strategic Outsourcing division. \n\nManaged all facets of transitioning customer IT environments to IBM for steady state support. \n\nPlanning oversight, and execution of network delivery for several accounts: \nElement Fleet / Citigroup / Freddie Mac / Centurylink / Broadridge \nThe Hartford / John Deere / Mead Johnson / BG Group / Sandvik")} imagePath={ibm}  date="March 2010 - June 2015"/>
                    </Col>
                </Row>

            </Container>
            
        );
    }
}

export default Project;