import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "./components/header";
import Footer from "./components/footer";
// import logo from './logo.svg';
import './App.scss';
// import Main from "./components/main";

class App extends Component {
    render() {

        const isShowFooter = this.props.location.pathname === '/messages';
        console.log(this.props.auth)
        return (
            <div className="app">
                <Header isFriend={this.props.auth}/>
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
