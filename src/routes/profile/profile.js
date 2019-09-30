import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import './style/index.scss';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // user: DUMMY_DATA.user,
            value: ''
        }
    }

    componentDidMount() {
        this.clearState();
    };

    clearState = () => {
        this.setState({
            value: ''
        });
    };

    render() {
        return (
            <div className='profile-page'>
                <div className='user-info-block'>
                    Profile
                </div>
            </div>
        );
    };
}

export default ProfilePage;
