import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { saveContact, updateContact } from "../api/contact";
import { changeModelHandler } from "../handlers/handlers";
import * as ACTIONS from "../actions/actions";
import { phones } from "../utils/utils";
import moment from 'moment';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const ContactDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const contact = useSelector((state) => state.contacts.selectedContact);
    const file = useSelector((state) => state.contacts.selectedFile);
    const contactId = useParams();
    const contactAction = contactId.contactId ? updateContact : saveContact;

    useEffect(() => {
        contactId.contactId ? dispatch({type: ACTIONS.FIND_CONTACT, payload: contactId.contactId}) : dispatch({type: ACTIONS.ADD_CONTACT})       
    }, [])

    return (
        <Container fluid > 
            <div className='text-center'><h2>Contact Details</h2></div>
            <Row className="justify-content-lg-center" > 
                <Col xs={4}>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={contact?.name } onChange={changeModelHandler} />
                        </Form.Group>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" value={contact?.firstName } onChange={changeModelHandler} />
                        </Form.Group>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" value={contact?.address } onChange={changeModelHandler} />
                        </Form.Group>
                        <Form.Group controlId="birthday">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control type="date" placeholder="Birthday" value={moment(new Date(contact?.birthday)).format("YYYY-MM-DD")} onChange={changeModelHandler} />
                        </Form.Group>
                        <Form.Group controlId="homePage">
                            <Form.Label>HomePage</Form.Label>
                            <Form.Control type="text" placeholder="HomePage" value={contact?.homePage } onChange={changeModelHandler} />
                        </Form.Group>
                        { phones(contact) }
                        <Form.Group controlId="note">
                            <Form.Label>Note</Form.Label>
                            <Form.Control as="textarea" rows={3} cols={30} placeholder="Note" value={contact?.note } onChange={changeModelHandler} />
                        </Form.Group>
                        <Form.Group controlId="image">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" placeholder="Image" onChange={changeModelHandler} /> 
                            {/* not implemented */}
                        </Form.Group>         
                        <Button variant="primary" onClick={() => contactAction(contact, file, history)}>
                            {contactId.contactId ? "Edit contact" : "Add contact"}</Button>
                    </Form>
                </Col>
            </Row>
        </Container>    
    )
} 

export default ContactDetails;