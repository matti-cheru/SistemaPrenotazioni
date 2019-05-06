import React, {Component}
from 'react';
import Events from '../containers/Events';

class Home extends Component {
    render() {
        return ( 
        <div>
            <div>Welcome to SP.com</div> 
            <div> 
                <Events />
            </div> 
        </div>
        )
    }
}

export default Home;