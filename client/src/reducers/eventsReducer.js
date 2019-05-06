import constants from '../constants/actionTypes'

var initialState = {
  events: [],
  eventsItem: {}
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constants.EVENTS_RECEIVED:
      updated['events'] = action.events
      return updated

    case constants.EVENTSITEM_RECEIVED:
      updated['eventsItem'] = action.eventsItem
      return updated

    default:
      return state
    }
}