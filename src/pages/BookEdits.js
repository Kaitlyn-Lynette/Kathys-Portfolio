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
                <Col style={{paddingTop: "80px"}} md={{ span: 6, offset: 6 }}>
                <h1>Book Edits</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <Image></Image>
                <Image></Image>
                <Image></Image>
                <Image></Image>
                </Col>  
            </Row>
            </Container>
            
        </div>
    )
}

export default BookEdits
