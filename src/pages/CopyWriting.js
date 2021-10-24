import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const CopyWriting = () => {
    return (
        <div id="copywriting">
            <Container>
            <Row>
                <Col style={{paddingTop: "100px"}} md={{ span: 6, offset: 6 }}>
                <h1>Copy Writing</h1>
                </Col>
            </Row>
            <Row style={{paddingTop: "80px"}}>
                <Col md={{span: 3, offset: 3 }}>
                <Image src="/images/CopyWritingExample.png"></Image>
                </Col>
                <Col md={{span:3, offset: 1}}>
                <h4>Blend: Coffee + CoWork</h4>
                </Col>

            </Row>
            </Container>
        </div>
    )
}

export default CopyWriting
