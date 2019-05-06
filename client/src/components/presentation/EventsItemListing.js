import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class EventsItemListing extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
                <div><Link to={`/events/${this.props.data.id}`}><b>{this.props.data.title}</b></Link></div>
                <div>{this.props.data.teaser}</div>
            </div>
        )
    }
}

EventsItemListing.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired
    })
};

export default EventsItemListing