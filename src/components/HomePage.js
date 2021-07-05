import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ContactList from "./ContactList";
import { getAllContacts } from "../api/contact";
import { useSelector } from "react-redux";
import { Button, Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
    const allContacts = useSelector((state) => state.contacts.data);
    let history = useHistory();

    useEffect(() => {
        getAllContacts()
    }, [])

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={10}>
                    <div className='text-center'><h2>Contact List</h2></div>
                    <ContactList contacts={allContacts}></ContactList>        
                    <Button variant="primary" onClick={() => history.push('/contactDetails')}>Add contact</Button>
                </Col>
            </Row>
        </Container>    
    )
}

export default HomePage;
