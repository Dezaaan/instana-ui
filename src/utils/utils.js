import React from "react";
import { addPhoneHandler, changeModelHandler, deletePhoneHandler } from "../handlers/handlers";
import { Button, Form, Container, Row, Col, Collapse } from 'react-bootstrap';

export const phones = (contact) => {
    return (
        <div>
            {
                contact?.phone.map((p, idx) => (
                    <>
                        <Form.Group controlId="phone" key = {idx}>
                            <Row>   
                                <Col>
                                    <Form.Label>Phone</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control type="text" placeholder="Phone" value={p} onChange={(e) => changeModelHandler(e, idx)} />
                                </Col>
                                <Col>
                                    <Button variant="success" onClick={addPhoneHandler}>+</Button> {'  '}
                                    <Button variant="danger" disabled={contact.phone.length === 1} onClick={() => deletePhoneHandler(idx)}>-</Button>
                                </Col>
                            </Row>
                        </Form.Group>                        
                    </>       
                ))
            }                        
        </div>
    );
}