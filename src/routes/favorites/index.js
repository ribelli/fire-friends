import React, { Component } from 'react';
import './style/index.scss';
import FavoriteUser from "../../components/favorite-user";

const index = {
    user1: {
        name: 'Carlo',
        userName: 'Carlo228',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 27,
        country: 'SP',
        city: 'Madrid'
    },
    user2: {
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user3: {
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'RU',
        city: 'Saint Petersburg'
    },
    user4: {
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user5: {
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'RU',
        city: 'Saint Petersburg'
    },
    user6: {
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user7: {
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'RU',
        city: 'Saint Petersburg'
    },
    user8: {
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user9: {
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'RU',
        city: 'Saint Petersburg'
    },
    user10: {
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'FI',
        city: 'Helsinki'
    },
    user11: {
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
        const {avatarUrl, name, userName, age, country, city} = favorite;
        let props = {
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
            <div className="favorites-page-container">
                <div>
                    Favorites
                </div>
                <div className="favorite-layout">
                    {Object.values(index).map((favorite, i) =>
                        FavoritesPage.renderFavorites(favorite, i))}
                </div>
            </div>
        );
    };
}

export default FavoritesPage;
