import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

export function Boot(props) {
    

    return (
        <>
            <Container className='bg-danger'>
               <Row>
                <Col md={8} lg={8} className='bg-primary'>
                <h1>boot</h1>
                </Col>
                <Col md={4} lg={4} className='bg-danger'>
                <h1>boo2</h1>
                </Col>
               </Row>
            </Container>
        </>
    )
}
