import React, {Component} from 'react';
import EventsItemListing from '../presentation/EventsItemListing';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/actions'

class Events extends Component {

    componentDidMount(){

        this.props.dispatch(fetchEvents());
    }

    render() {
        const eventsItems = this.props.events.map( (events, i) => {
            return ( <li key={i}><EventsItemListing data = {events} /></li> );
        });

        return (
            <div>
                <h2>Events Items</h2>
                <ul>
                {(this.props.events.length > 0) ? <ul>{eventsItems}</ul> : <div>no events yet :(</div>}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        events: state.events.events
    }
}

export default connect(mapStateToProps)(Events)