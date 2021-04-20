import React, { Component } from 'react';
import './style/index.scss';
import { Smile } from 'react-feather';

class ProfileStatus extends Component {
    state = {
        //showEmojiPicker: false,
        newMessage: ''
    };

    // toggleEmojiPicker = () => {
    //     this.setState({
    //         showEmojiPicker: !this.state.showEmojiPicker,
    //     });
    // };
    //
    // addEmoji = (emoji) =>{
    //     const text = `${emoji.native}`;
    //
    //     this.setState({
    //         newMessage: text,
    //         showEmojiPicker: false
    //     });
    // };

    render() {

        return (
            <div className="profile-status">
                <button type="button"
                        //onClick={this.toggleEmojiPicker}
                        title='Set status'>
                    <Smile size='16' />
                </button>
                <div>
                    <span className="profile-status__text">
                        {this.state.newMessage? this.state.newMessage: 'Set status'}
                    </span>
                </div>
            </div>
        )
    }
}

export default ProfileStatus;
