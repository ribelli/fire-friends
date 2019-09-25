import * as React from 'react';
import './style/index.scss';

function EventCounter(props) {
    console.log(props.eventCounter.eventValue !== null);
    return (
        props.eventCounter.eventValue === 0 ? null :
            <div className="event-counter _green">{props.eventCounter.eventValue}</div>
    );
}

export default EventCounter;
