import React, { Component} from 'react';
import EventsItemDetail from '../presentation/EventsItemDetail';
import { connect } from 'react-redux'
import { fetchEventsItem } from '../../actions/actions'

class EventDetails extends Component {


    componentDidMount(){

        this.props.dispatch(fetchEventsItem(this.props.match.params.id));
    }

    render(){
        let { eventsItem } = this.props; 

        return (
            <div>
                <h2>Events Story</h2>
                <ul>
                    { eventsItem ? <EventsItemDetail data={eventsItem} /> : null}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        eventsItem: state.events.eventsItem
    }
}

export default connect(mapStateToProps)(EventDetails)