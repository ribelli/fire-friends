import SettingsForm from "../settings-form";
import React, {Component} from "react";
import './style/index.scss';
import Avatar from "../avatar";
import {withTranslation} from "react-i18next";


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

        return (
            <div className='profile'>
                <div className="profile__avatar">
                    <Avatar title="Go to Settings"
                            content={this.state.imgURl}
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
