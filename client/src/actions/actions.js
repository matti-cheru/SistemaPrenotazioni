import actionTypes from '../constants/actionTypes';

function eventsItemReceived(eventsItem){
    return {
        type: actionTypes.EVENTSITEM_RECEIVED,
        eventsItem: eventsItem
    }
}

function eventsReceived(events){
    return {
        type: actionTypes.EVENTS_RECEIVED,
        events: events
    }
}

export function fetchEvents(fakeEvents){
    console.log('presend')
    return dispatch => {
        return fetch(`http://localhost:5000/events`, {method: 'GET', mode: 'cors'})
        .then( (response) => response.json() )
        .then( (data) => dispatch(eventsReceived(data.data)))
        .catch( (e) => console.log(e) );
    }
}

export function fetchEventsItem(id){
    console.log('get 1111');
    return dispatch => {
        return fetch(`http://localhost:5000/events/${id}`, {method: 'GET', mode: 'cors'})
        .then( (response) => response.json() )
        .then( (data) => dispatch(eventsItemReceived(data.data)))
        .catch( (e) => console.log(e) );
    }   
}