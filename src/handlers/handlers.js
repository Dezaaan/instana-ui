
import * as ACTIONS from "../actions/actions"
import store from '../store';

export const changeModelHandler = (event, phoneIdx) => {
    let payload;
    if(event.target.id === "picture"){
        payload = { field: event.target.id, value: event.target.files[0] }
    } else {
        payload = { field: event.target.id, value: event.target.value, phoneIdx: phoneIdx }
    } 
    store.dispatch({type: ACTIONS.CONTACT_CHANGE, payload: payload })
}

export const addPhoneHandler = () => {
    store.dispatch({type: ACTIONS.ADD_PHONE})
}

export const deletePhoneHandler = (idx) => {
    store.dispatch({type: ACTIONS.DELETE_PHONE, payload: { idx: idx } } )
}