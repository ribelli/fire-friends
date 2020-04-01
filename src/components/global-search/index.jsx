import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './style/index.scss';
import axios from 'axios';
import { Search } from 'react-feather';
import Suggestions from '../suggestions';
import { Redirect } from 'react-router-dom';

class GlobalSearch extends Component {
    state = {
        query: '',
        results: []
    };

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    };

    getInfo = () => {
        debugger
        let url = 'http://api.example.com/results?q=' + encodeURI(this.state.query) + '&json=1';
        axios.get(url) //(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
            .then(({ response }) => {
                this.setState({
                    results: response.data
                   // as does axios. So... data.data
                })
            }).catch(error => console.log(error));
    };

    render(){
        const { t } = this.props;
        return(
            <div>
            <form>
                <div className='input-container'>
                        <input className='global-search' type='search'
                               spellCheck={false}
                               ref={input => this.search = input}
                               onChange={this.handleInputChange}
                               placeholder={t('main.searchQuery')}
                               autoComplete='off'/>
                        <span className='icon-search'>
                            <Search size={15}/>
                        </span>
                </div>
                <div className='results-container'>
                    <Suggestions results={this.state.results} />
                </div>
            </form>
                {this.state.results.length > 0 &&
                <Redirect to={{
                    pathname: '/results',
                    state: { results: this.state.results }
                }}/>
                }
            </div>
        )
    }
}

export default withTranslation()(GlobalSearch);
