import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/index.scss';

let mapOfInterests = {
    'Sports': '#00C9A7',
    'Dogs': '#4FFBDF',
    'Cats': '#F9F871',
    'Music': '#F3C5FF',
    'Books': '#845EC2',
    'Mems': '#008BC6'
};
let arrWidths = ['45','30','15','5','3','2'];
let arrColors = Object.values(mapOfInterests);
let interests = Object.keys(mapOfInterests);

class InterestsPersonalGraph extends Component {

    static renderColors(interest, i) {
        return(
            <span className="interest-graph__item"
                  key={i}
                  title={interest}
                  style={{backgroundColor: arrColors[i], width: arrWidths[i]+'%'}}
                  aria-label={interest} />
        )
    }
    static renderPercent(interest, i) {
        return(
            <li className="list-info" key={i}>
                <Link to={interest}>
                    <span className="pick" style={{backgroundColor: arrColors[i]}} />
                    <span className="item">{interest}</span>
                    <span className="percent">{arrWidths[i] + '%'}</span>
                </Link>
            </li>
        )
    }

    render() {
        return (
            <details>
                <summary>
                    <div className='interest-graph'>
                        {interests.map((interest, i) => InterestsPersonalGraph.renderColors(interest, i))}
                    </div>
                </summary>
                    <ul className="interest-graph__description">
                        {interests.map((interest, i) => InterestsPersonalGraph.renderPercent(interest, i))}
                    </ul>
            </details>
        );
    }
}
export default InterestsPersonalGraph;
