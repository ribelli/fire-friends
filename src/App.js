import React, { Component } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
// import logo from './logo.svg';
import './App.scss';
// import Main from "./components/main";

class App extends Component {
    render() {

        const isShowFooter = this.props.location.pathname === '/messages';

        return (
            <div className="app">
                <Header/>
                <main className="main-layer">
                    {this.props.children}
                </main>
                <Footer isShowFooter={isShowFooter}/>
            </div>
        );
    }
}

export default App;
