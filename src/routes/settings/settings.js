import React, { Component } from 'react';

class SettingsPage extends Component {
    render() {
        return(
            <>
                <div>Settings</div>
                <div>Change theme color
                    <input type='checkbox'/>
                </div>
                <div>Subscribe
                    <input type='checkbox'/>
                </div>
                <div>Delete my account
                    <input type='checkbox'/>
                </div>
            </>
        )
    }
}

export default SettingsPage;
