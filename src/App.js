import React, { Component } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
// import logo from './logo.svg';
import './App.scss';
// import Main from "./components/main";

class App extends Component {
    render() {
        console.log(this.props.children);
        return (
            <div className="app">
                <Header/>
                <main className="main-layer">
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
