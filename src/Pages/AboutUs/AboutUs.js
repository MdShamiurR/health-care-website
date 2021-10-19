import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import c from '../../images/services/c.jpg'
import c2 from '../../images/services/c2.jpg'

const AboutUs = () => {
    return (
        <div id="aboutUs">
            <Container>
                <Row>

                    <h2><Badge bg="success">Something That You Should Know About Us</Badge></h2>
                    <Col>
                        <img src={c} alt="" />
                    </Col>
                    <Col>

                        <img src={c2} alt="" />

                        <h3><Badge bg="warning" text="dark">
                            Contact Us:
                        </Badge>{' '}<Badge bg="secondary">01521433507</Badge></h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;