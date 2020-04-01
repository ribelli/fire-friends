import SettingsForm from "../settings-form";
import React, {Component} from "react";
import './style/index.scss';
import Avatar from "../avatar";
import {withTranslation} from "react-i18next";

const mockProfile = {
    id: 0,
    name: 'Carlo',
    userName: 'Carlo228',
    avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
    age: 27,
    country: 'SP',
    city: 'Madrid'
};

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploading: false,
            selectedFile: {},
            imgURl: null
        };
    }

    onChange = (e) => {
        const img = e.target.files[0];
        const formData = new FormData();
        // axios.post('/file-upload', formData, {
        //     onUploadProgress: progressEvent => {
        //       console.log(progressEvent.loaded / progressEvent.total)
        //     }
        //   })
        // .then(images => {
        //     this.setState({
        //         uploading: false,
        //         images
        //     })
        // })
        this.setState({
            uploading: true,
            imgURl: URL.createObjectURL(img),
            selectedFile: e.target.files
        });
        formData.append(
            'myFile',
            this.state.selectedFile
        )
    };

    render() {
        let isDefaultSize = true;
        const {t} = this.props;

        // content={this.state.imgURl}

        return (
            <div className='profile'>
                <div className="profile__avatar">
                    <Avatar title="Go to Settings"
                            content={mockProfile.avatarUrl}
                            isDefaultSize={isDefaultSize} />
                    <label htmlFor='input' className='upload-area'>
                        {t('main.profile.selectImage')}
                        <input type='file' id='input'
                               className='upload-area__input' onChange={this.onChange}/>
                    </label>
                </div>
                <SettingsForm />
            </div>
        )
    }
}

export default withTranslation()(Profile);
