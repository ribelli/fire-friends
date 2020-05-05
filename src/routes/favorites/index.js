import React, {Component, Suspense} from 'react';
import './style/index.scss';
import FavoriteUser from '../../components/favorite-user';
import LoadingSpinner from '../../components/loading-spinner';
import Select from 'react-select';

const dataMap = [
    {
        id: 0,
        name: 'Carlo',
        userName: 'Carlo',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 27,
        country: 'Spain',
        city: 'Madrid'
    }, {
        id: 1,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'Finland',
        city: 'Helsinki'
    }, {
        id: 2,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'Russia',
        city: 'Saint Petersburg'
    }, {
        id: 3,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'Finland',
        city: 'Helsinki'
    }, {
        id: 4,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'Russia',
        city: 'Saint Petersburg'
    }, {
        id: 5,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'Finland',
        city: 'Helsinki'
    }, {
        id: 6,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'Russia',
        city: 'Moscow'
    }, {
        id: 7,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'Finland',
        city: 'Helsinki'
    }, {
        id: 8,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'Russia',
        city: 'Moscow'
    }, {
        id: 9,
        name: 'Ksenia',
        userName: 'WoofControl',
        avatarUrl: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1601.jpg',
        age: 28,
        country: 'Finland',
        city: 'Helsinki'
    }, {
        id: 11,
        name: 'Kotey',
        userName: 'BadCat',
        avatarUrl: 'https://placekitten.com/g/64/64',
        age: 2,
        country: 'Russia',
        city: 'Saint Petersburg'
    }
];

// const countryOptions = [
//     { value: 'RU', label: 'Russia' },
//     { value: 'UA', label: 'Ukraine' },
// ];


class FavoritesPage extends Component {
    state = {
        selectedCountry: null,
        filters: this.props.filters,
        dataMap: dataMap,
        countryOptions: [],
        allCountriesOption: {value: 'All countries', label: 'All countries'}
    };

    componentWillMount() {
        this.onLoad(dataMap);
        console.log(this.collectCountries())
        this.setState({
            countryOptions: this.collectCountries() // only unique values
        });
    };

    collectCountries() {
        let { dataMap } = this.state;
        let buffer = [];
        let result = [];

        dataMap.forEach(function(obj){
            if (!buffer.includes(obj.country)) {
                buffer.push(obj.country);
                result.push({value: obj.country, label: obj.country});
            }
        });

        return [this.state.allCountriesOption].concat(result);
    }

    handleSelectCountryChange = selectedCountry => {
        this.setState(
            {
                selectedCountry,
                dataMap:
                    (selectedCountry === this.state.allCountriesOption) ? dataMap
                        : dataMap.filter(opt => opt.country === selectedCountry.value)
            },
            () => console.log(`Option selected:`, this.state.selectedCountry.value),
        );
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

    parseData(data) {
        const { filters } = this.state;

        if (data && data.length) {
            if (Array.isArray(filters) && filters.length) {
                data.filter(options => options.country === filters[0].country);
            }
        }

        return data;
    }

    onLoad = data => {
        this.setState({
            dataMap: this.parseData(data)
        });
    };

    render() {
        let {dataMap, selectedCountry } = this.state;
        return dataMap ? this.renderData(dataMap, selectedCountry) : FavoritesPage.renderLoading();
    };

    renderData(data, selectedCountry) {
        if (data && data.length > 0) {
            return (
                <Suspense fallback={<LoadingSpinner/>}>
                    <div className="favorites-page-container">
                        <div>
                            Favorites
                        </div>
                        <div className="common-sort-block">
                            <div className="common-sort-block__item">
                                <Select
                                    classNamePrefix='select-list'
                                    placeholder="country"
                                    value={selectedCountry}
                                    onChange={this.handleSelectCountryChange}
                                    options={this.state.countryOptions}
                                    tabIndex="1"
                                    isSearchable={true}/>
                            </div>
                        </div>
                        <div className="favorite-layout">
                            {data.map((favorite, i) =>
                                FavoritesPage.renderFavorites(favorite, i))}
                        </div>
                    </div>
                </Suspense>
            );
        } else {
            return <div>No items found</div>;
        }
    }

    static renderLoading() {
        return <div>Loading...</div>;
    }
}

export default FavoritesPage;
