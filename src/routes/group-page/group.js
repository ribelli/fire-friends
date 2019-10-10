import React, { Component } from 'react';

import './style/index.scss';

class GroupPage extends Component {

    render() {
        console.warn(this.refs)
        return (
            <div className='groups-page'>
                <div className='group-info-block'>
                    Groups page
                    {this.props.id}
                    <div className='group-layout'>
                        group
                    </div>
                </div>
            </div>
        );
    };
}

export default GroupPage;
