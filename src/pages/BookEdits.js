import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "../App.css";


const BookEdits = () => {
    return (
        <div id="bookedits" style={{display: "flex"}} >
            <Container >
            <Row>
                <Col style={{paddingTop: "100px"}} md={{ span: 6, offset: 6 }}>
                <h1>Book Edits</h1>
                </Col>
            </Row>
            <Row style={{paddingTop: "80px"}}>
                <Col md={{ span: 3, offset: 3 }} > 
                <Image src="/images/DividedGospel211x320.png"></Image>
                <p>2017</p>
                </Col>
                <Col> 
                <Image src="/images/JesusPrinciple.png"></Image>
                <p>2018</p>
                </Col>
                <Col> 
                <Image src="/images/PoisonousPower.png"></Image>
                <p>2020</p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default BookEdits
