import React, { Component } from 'react';
import { connect } from 'react-redux';


export default ChildComponent => {
    class AuthenticationComponent extends Component {
        componentDidMount() {
            this.redirectUser();
        };

        componentDidUpdate() {
            this.redirectUser();
        };

        componentWillUpdate(nextProps) {
            if (!nextProps.auth) {
                this.redirectUser();
            }
        };

        redirectUser = () => {
            if (!this.props.auth) {
                this.props.history.push('/login')
            }
        };

        render() {
            return <ChildComponent {...this.props} />;
        };
    }

    const mapStateToProps = (state) => {
        return {
            state,
            auth: state.authenticationReducer.authenticated
        };
    };

    return connect(mapStateToProps)(AuthenticationComponent);
};
