import React, { Component } from 'react';
import './style/index.scss';

class EventCounter extends Component {
    render() {
        return (
            this.props.eventCounter.eventValue === 0 ? null :
                <div className="event-counter _green">{this.props.eventCounter.eventValue}</div>
        );
    }
}

export default EventCounter;
