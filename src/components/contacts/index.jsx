import React, { Component } from 'react';
import './style/index.scss'

class Contacts extends Component {
    render() {
        return(
            <div className='contacts'>
                <div className='contacts__title'>Contacts</div>
                <div className='contacts__item'>
                    <div>userpick </div>
                    {/*<div>username </div>*/}
                    {/*<div>new message</div>*/}
                </div>
            </div>
        )
    }
}

export default Contacts;
