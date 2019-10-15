import React, { Component } from 'react';
import InterestsPersonalGraph from "../../components/interests-personal-graph";
import Main from "../../components/main";
import './style/home.scss';

class HomePage extends Component {
    state = {
        initialData: false
    };

    componentDidMount() {
        if (this.props) {
            this.setState({
                initialData: true
            });
        }
    };

    componentDidUpdate() {
        // Following will fetch the users notes. In componentDidMount the token
        // is not set and therefore a local state is needed to check initialData
        if (!this.state.initialData) {
            this.setState({
                initialData: true
            });
        }
    };

    render() {
        return (
            <div className='home-page-container'>
                <div>
                    <InterestsPersonalGraph />
                    <Main/>
                </div>
            </div>
        );
    };
}

export default HomePage;
