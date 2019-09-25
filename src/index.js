import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import HomePage from './routes/home/home.js';
// import LoginPage from './routes/login/login.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// module.exports = require('./components');

/*
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <App>
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/registration/token' component={RegistrationTokenPage} />
                    <Route exact path='/registration/validation' component={RegistrationValidationPage} />
                    <Route exact path='/reset/password' component={ResetPasswordPage} />
                    <Route exact path='/reset/token' component={ResetPasswordTokenPage} />
                    <Route exact path='/' component={AuthenticationRequired(HomePage)}/>
                    <Route exact path='/note/:id' component={AuthenticationRequired(NotePage)}/>
                </App>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
