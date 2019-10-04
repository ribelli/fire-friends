import React, { Component } from 'react';
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

class InterestsGraphUser extends Component {

    static renderColors(interest, i) {

        let percentValue = arrWidths[i]+'%';
        return(
            <span className="interest-graph__item"
                  title={interest + ' ' + percentValue}
                  style={{backgroundColor: arrColors[i], width: percentValue}}
                  aria-label={interest} />
        )
    }

    render() {
        return (
            <div className='interest-graph _mini'>
                {interests.map((interest, i) => InterestsGraphUser.renderColors(interest, i))}
            </div>
        );
    }
}
export default InterestsGraphUser;
