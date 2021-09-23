import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { 
    NotificationsRounded,
    WorkRounded, 
    HomeRounded, 
    ContactPhoneRounded,
    HowToRegRounded,
    SchoolRounded,
    LayersRounded,
    ForumRounded,
} from '@material-ui/icons';
import Logo1 from '../assets/img/Logo1.png'
import { FaUserGraduate } from "react-icons/fa";

const Landing = () => {
    return (
        <>
            <Navbar expand="lg" variant="light" bg="light" >
                <Container style={{ padding:"0px", margin:"0px", display:"contents" }} >
                    <Image src={Logo1} style={{
                        height:"20px",
                    }} />
                    <Navbar.Brand href="#home">Personal Explore</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">
                            <HomeRounded />
                        </Nav.Link>
                        <Nav.Link href="#about">
                            <HowToRegRounded />
                        </Nav.Link>
                        <Nav.Link href="#service">
                            <WorkRounded />
                        </Nav.Link>
                        <Nav.Link href="#experience">
                            <SchoolRounded />
                        </Nav.Link>
                        <Nav.Link href="#works">
                            <LayersRounded />
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            <ForumRounded />
                        </Nav.Link>
                    </Nav>
                    <NotificationsRounded />
                    <Badge pill bg="danger" style={{
                        fontSize: "9px",
                        transform: "translate(-60%, -50%)"
                    }}>
                        12
                    </Badge>
                </Container>
            </Navbar>
            <Image src={Logo1} roundedCircle style={{
                height:"100px",
                transform: "translate(665%, 50%)",
            }} />
        </>
    )
}

export default Landing
