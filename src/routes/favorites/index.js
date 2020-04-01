import React, {Component, Suspense} from 'react';
import './style/index.scss';
import FavoriteUser from '../../components/favorite-user';
import LoadingSpinner from '../../components/loading-spinner';

const index = {
    user1: {
        id: 0,
        name: 'Carlo',
        userName: 'Carlo228',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 27,
        country: 'SP',
        city: 'Madrid'
    },
    user2: {
        id: 1,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user3: {
        id: 2,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'RU',
        city: 'Saint Petersburg'
    },
    user4: {
        id: 3,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user5: {
        id: 4,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'RU',
        city: 'Saint Petersburg'
    },
    user6: {
        id: 5,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user7: {
        id: 6,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'RU',
        city: 'Saint Petersburg'
    },
    user8: {
        id: 7,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user9: {
        id: 8,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'RU',
        city: 'Saint Petersburg'
    },
    user10: {
        id: 9,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user11: {
        id: 11,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'RU',
        city: 'Saint Petersburg'
    },
};

class FavoritesPage extends Component {
    state = {
        initialData: false
    };

    componentDidMount() {
        if (this.props.notes) {
            this.setState({
                initialData: true
            });
        }
    };

    componentDidUpdate() {
        if (!this.state.initialData) {
            this.setState({
                initialData: true
            });
        }
    };

    static renderFavorites(favorite, index) {
        const {id, avatarUrl, name, userName, age, country, city} = favorite;
        let props = {
            id,
            avatarUrl,
            name,
            userName,
            age,
            country,
            city
        };
        return <FavoriteUser {...props} key={index}/>
    }

    render() {
        return (
            <Suspense fallback={<LoadingSpinner/>}>
                <div className="favorites-page-container">
                    <div>
                        Favorites
                    </div>
                        <div className="favorite-layout">
                            {Object.values(index).map((favorite, i) =>
                                FavoritesPage.renderFavorites(favorite, i))}
                        </div>
                </div>
            </Suspense>
        );
    };
}

export default FavoritesPage;
