import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "./components/header";
import Footer from "./components/footer";
import './App.scss';
import {fetchUserInfo} from "./store/actions/user-actions";

class App extends Component {
    state = {
        username: '',
        email: '',
        first_name: '',
        last_name: ''
    };

    componentDidMount() {
        if (this.props.auth) {
            this.props.dispatch(fetchUserInfo())
                .then(data => this.setState({
                    username: data.username,
                    email: data.email,
                    first_name: data.first_name,
                    last_name: data.last_name
                }));
        }
    }

    render() {

        console.log('app', this.state);
        const isShowFooter = this.props.location.pathname === '/messages';
        return (
            <div className="app">
                <Header isFriend={this.props.auth} userInfo={this.state}/>
                <main className="main-layer">
                    {this.props.children}
                </main>
                <Footer isShowFooter={isShowFooter}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //showSidebar: state.sidebarReducer.show,
        auth: state.authenticationReducer.authenticated
    };
};

export default connect(mapStateToProps)(App);
