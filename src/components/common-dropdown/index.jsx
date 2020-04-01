import React, {Component} from 'react';
import './style/index.scss';
import { withRouter } from 'react-router-dom';

class CommonDropdown extends Component {
    constructor(props) {
        super(props);
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    redirectHandler = to => {
        this.props.history.push(to);
    };

    onMouseLeave() {
        this.props.toggle();
    }

    render() {
        let {isOpen} = this.props;
        return (
            <div className={`common-dropdown ${isOpen ? '_open': ''}`}
                 onMouseLeave={this.onMouseLeave}>
                <menu className="common-dropdown__menu">
                    <ul className="list">
                        <li onClick={() => this.redirectHandler('/profile')}>
                            <a>Profile</a>
                        </li>
                        <li onClick={() => this.redirectHandler('/')}>
                            <a>Actions</a>
                        </li>
                        <li onClick={() => this.redirectHandler('/settings')}>
                            <a>Settings</a>
                        </li>
                        <li onClick={() => this.redirectHandler('/logout')}>
                            <a>Exit</a>
                        </li>
                    </ul>
                </menu>
            </div>
        )
    }

}

export default withRouter(CommonDropdown);
