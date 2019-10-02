import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './store/store.js';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './routes/home/home.js';
import MessagesPage from "./routes/messages/messages";
// import LoginPage from './routes/login/login.js';
import * as serviceWorker from './serviceWorker';
import ProfilePage from "./routes/profile/profile";
import FavoritesPage from "./routes/favorites/favorites";

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <App>
                    <Route exact path='/profile' component={ProfilePage} />
                    <Route exact path='/favorites' component={FavoritesPage} />
                    {/*<Route exact path='/login' component={LoginPage} />*/}
                    {/*<Route exact path='/registration/token' component={RegistrationTokenPage} />*/}
                    {/*<Route exact path='/registration/validation' component={RegistrationValidationPage} />*/}
                    {/*<Route exact path='/reset/password' component={ResetPasswordPage} />*/}
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/messages' component={MessagesPage}/>
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

