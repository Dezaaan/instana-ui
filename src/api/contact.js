import axios from 'axios';
import * as ACTIONS from '../actions/actions';
import store from '../store';

export const api = axios.create({
    baseURL: "http://localhost:8000/"
})

export const getAllContacts = () => {
    api  
        .get('/contact')
        .then(response => {
            store.dispatch({type: ACTIONS.FETCH_SUCCESS, payload: response.data})
        })
        .catch(error => {
            console.log(error) 
        })
}

export const saveContact = (contact, file, history) => {
    const formData = new FormData();  
    formData.append("file", file)
    formData.append("contact", JSON.stringify(contact))
    api  
        .post('/contact', formData)
        .then(response => {
            store.dispatch({type: ACTIONS.ADD_CONTACT, payload: response.data.contact})
            history.push('/');
        })
        .catch(error => {
            console.log(error)    
        })
}

export const updateContact = (contact, file, history) => {
    const formData = new FormData(); 
    formData.append("file", file)
    formData.append("contact", JSON.stringify(contact))
    api  
        .put("/contact/update", formData)
        .then(response => {
            store.dispatch({type: ACTIONS.UPDATE_CONTACT, payload: response.data})
            history.push('/')
        })
        .catch(error => {
            console.log(error)    
        })
}

export const deleteContact = (id) => {
    api  
        .delete('/contact/delete/' + id)
        .then(() => {
            store.dispatch({type: ACTIONS.DELETE_CONTACT, payload: id})
        })
        .catch(error => {
            console.log(error)    
        })
}



