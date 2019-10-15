import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Mail, Star } from 'react-feather';
import './style/index.scss';

// as ng-repeat for menu

class CommonMenu extends Component {
    render() {
        const { t } = this.props;

        return (
            <nav>
                <ul className="common-menu">
                    <li className="favorite">
                        <Link to="/favorites">
                            <Star size='16'/>
                            <span className='common-menu__description'>{t('main.favorites')}</span>
                        </Link>
                    </li>
                    <li className="messages">
                        <Link to="/messages">
                            <Mail size='16' />
                            <span className='common-menu__description'>{t('main.messages')}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withTranslation()(CommonMenu);
