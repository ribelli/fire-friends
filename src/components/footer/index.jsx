import React, { Component } from 'react';
import './style/index.scss';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {

        let isShow = this.props.isShowFooter ? 'none' : 'flex';
        const currentDate = 2019;

        return (
            <footer className='footer-layer _dark' style={{display: isShow}}>
                <div>{currentDate}</div>
                <div className='footer-layer__info-block'>
                    <Link to='/about'> About </Link>
                    <Link to='/privacy'> Privacy & Terms </Link>
                </div>
                <div>
                </div>
            </footer>
        );
    }
}
export default Footer;
