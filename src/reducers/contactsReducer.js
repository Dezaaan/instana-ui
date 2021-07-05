import * as ACTIONS from '../actions/actions';
import uuid from 'uuid';

const initialState = {
    data: [],
    selectedContact: null,
    selectedFile: null
};

const contactsReducer = (state = initialState, action) => {
    let contactCopy = {...state.selectedContact};
    switch (action.type){
        case ACTIONS.FETCH_SUCCESS:
            return {...state, data: action.payload};
        case ACTIONS.ADD_CONTACT:
            const newContact = createContact();
            return {...state, selectedContact : newContact};
        case ACTIONS.DELETE_CONTACT:
            return {...state, data: state.data.filter(item => item.id !== action.payload)};
        case ACTIONS.FIND_CONTACT:
            const contact = state.data.find(item => item.id === action.payload); 
            return {...state, selectedContact : contact};
        case ACTIONS.CONTACT_CHANGE:
            const { field, value, phoneIdx} = action.payload;
            Array.isArray(contactCopy[field]) ? contactCopy[field][phoneIdx] = value : contactCopy[field] = value
            if(value instanceof File) state.selectedFile = value;
            return {...state, selectedContact: contactCopy};
        case ACTIONS.UPDATE_CONTACT:
            const index = state.data.findIndex((item => item.id === action.payload.id));                                                                      
            let copyArray = [...state.data];
            copyArray[index] = action.payload;
            return {...state, data : copyArray};
        case ACTIONS.ADD_PHONE:
            contactCopy["phone"].push('');
            return {...state, selectedContact : contactCopy};
        case ACTIONS.DELETE_PHONE:
            const { idx } = action.payload;
            contactCopy["phone"].splice(idx, 1)
            return {...state, selectedContact : contactCopy};
        default:
            return state;
    }
};

const createContact = () => {
    return {
        "id": uuid(),
        "name": "",
        "firstName": "",
        "address": "",
        "phone": [''],
        "homePage": "",
        "birthday": "",
        "note": ""
    }
}

export default contactsReducer;