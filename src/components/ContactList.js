import React from "react";
import { useHistory } from "react-router-dom";
import { deleteContact } from "../api/contact";
import { Button, Table } from 'react-bootstrap';
import moment from 'moment';

const ContactList = (props) => {
    let history = useHistory();
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>FirstName</th>
                    <th>Address</th>
                    <th>HomePage</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map((item, i) => {
                    return [
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.firstName}</td>
                            <td>{item.address}</td>
                            <td>{item.homePage}</td>
                            <td>{moment(new Date(item.birthday)).format("YYYY-MM-DD")}</td>
                            <td>
                                <Button variant="warning" onClick={() => history.push(`/contactDetails/${item.id}`)} >Edit</Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => deleteContact(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ];
                })}
            </tbody>
        </Table>
    );
}

export default ContactList;