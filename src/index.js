import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store/store.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';

import './i18n';

import App from './App';
import HomePage from './routes/home';
import MessagesPage from "./routes/messages";

import AuthenticationRequired from './high-order-component';

import * as serviceWorker from './serviceWorker';

import GroupPage from "./routes/group-page";
import GroupsPage from "./routes/groups";
import FavoritesPage from "./routes/favorites";
import LoginPage from "./routes/login";
import ProfilePage from "./routes/profile";
import RegistrationPage from "./routes/registration-validation";
import RegistrationTokenPage from "./routes/registration-token";
import SettingsPage from "./routes/settings/settings";
import { storeTokenAction } from "./store/actions/authentication-actions";
import AboutPage from "./routes/about";

// ReactDOM.render(<App />, document.getElementById('root'));

const token = localStorage.getItem('token');
if (token) {
    store.dispatch(storeTokenAction(token));
}


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <App>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/profile' component={AuthenticationRequired(ProfilePage)} />
                    <Route exact path='/favorites' component={AuthenticationRequired(FavoritesPage)} />
                    <Route exact path='/settings' component={AuthenticationRequired(SettingsPage)} />
                    <Route exact path='/groups' component={GroupsPage} />
                    <Route exact path='/groups/:id' component={GroupPage}/>
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/registration/token' component={RegistrationTokenPage} />
                    <Route exact path='/messages' component={AuthenticationRequired(MessagesPage)}/>
                    <Route exact path='/registration' component={RegistrationPage} />
                    <Route exact path='/about' component={AboutPage} />
                    {/*<Route exact path='/reset/password' component={ResetPasswordPage} />*/}
                    {/*<Route exact path='/note/:id' component={AuthenticationRequired(NotePage)}/>*/}
                </App>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

