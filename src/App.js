import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
// import logo from './logo.svg';
import './App.scss';
import Main from "./components/main";

function App() {
  return (
    <div className="App">
        <Header />
        <Main/>
        <Footer />
    </div>
  );
}

export default App;
