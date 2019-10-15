import React, { Component } from 'react';
import './style/index.scss';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { Smile } from 'react-feather';

class ProfileStatus extends Component {
    state = {
        showEmojiPicker: false,
        newMessage: ''
    };

    toggleEmojiPicker = () => {
        this.setState({
            showEmojiPicker: !this.state.showEmojiPicker,
        });
    };

    addEmoji = (emoji) =>{
        const text = `${emoji.native}`;

        this.setState({
            newMessage: text,
            showEmojiPicker: false
        });
    };

    render() {
        const {showEmojiPicker} = this.state;

        return (
            <div className="profile-status">
                {showEmojiPicker ? (
                    <Picker title=''
                            onSelect={this.addEmoji}
                            showSkinTones={false}
                            showPreview={false}
                            set='twitter'
                            emoji='blush'
                            color='#494a4d'
                            perLine={7}
                            style={{ position: 'absolute', top: '20px', right: '0', left: '0' }}/>
                ) : null}
                <button type="button"
                        onClick={this.toggleEmojiPicker}
                        className="toggle-emoji"
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
