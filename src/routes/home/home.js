import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './style/home.scss';
import Main from "../../components/main";
// import logo from '../../assets/logo.png';

class HomePage extends Component {
    state = {
        initialData: false
    };

    componentDidMount() {
        console.log(this.props.notes);
        if (this.props.notes) {
            this.setState({
                initialData: true
            });
        }
    };

    componentDidUpdate() {
        // Following will fetch the users notes. In componentDidMount the token is not set and therefore a local state is needed to check initialData
        if (!this.state.initialData) {
            this.setState({
                initialData: true
            });
        }
    };

    render() {
        return (
            <main className='home-page-container'>
                <div>
                    <Main/>
                </div>
            </main>
        );
    };
}

export default HomePage;