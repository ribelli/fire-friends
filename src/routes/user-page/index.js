import React, {Component, Suspense} from 'react';
import { withRouter } from 'react-router-dom';
import LoadingSpinner from '../../components/loading-spinner';
import Avatar from '../../components/avatar';
import { fetchFavoriteAction } from '../../store/actions/favorite-actions.js';


const mockProfile = {
    avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
};

class UserPage extends Component {
    state = {};

    componentDidMount() {
        const user_id = this.props.match.params.id;
        this.props.dispatch(fetchFavoriteAction(user_id));
        this.setState({
            user_id
        });
    };

    componentDidUpdate() {
        if (this.props.match.params.id !== this.state.user_id) {
            const user_id = this.props.match.params.id;
            this.props.dispatch(fetchFavoriteAction(user_id));
            this.setState({
                user_id
            });
        }
    };


    render() {
        console.log(this.props);
        return (
            <Suspense fallback={<LoadingSpinner/>}>
            <div className="user-page">
                <div className="group-info-block">
                    User page
                    {this.props.id}
                    <div className="group-layout">
                        <div className="profile">
                            <div className="profile__avatar">
                                <Avatar title="user-avatar"
                                        content={mockProfile.avatarUrl}
                                        isDefaultSize={true} />
                            </div>
                            <div className="profile__info">
                                <div>info</div>
                                <div>next info</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Suspense>
        );
    };
}

export default withRouter(UserPage);
