import React, { Component } from 'react';

class GroupPage extends Component {

    render() {
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
