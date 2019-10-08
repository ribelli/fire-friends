import React, { Component } from 'react';

class SettingsPage extends Component {
    render() {
        return(
            <div>
                <div>Title: Settings</div>
                <div>
                    Change theme color
                    <input type='checkbox'/>
                </div>
                <div>Subscribe</div>
                <div>Exit</div>
            </div>
        )
    }
}

export default SettingsPage;
