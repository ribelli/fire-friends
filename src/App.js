import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
// import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header />
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*    <a href="http://google.com">hjkhjh</a>*/}
      {/*</header>*/}
        <Footer />
    </div>
  );
}

export default App;
