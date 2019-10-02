import React, { Component } from 'react';
import './style/index.scss';
import { Search } from 'react-feather';
import Suggestions from "../suggestions";

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
                    // this.getInfo()
                }
            }
        })
    };

    // getInfo = () => {
    //     axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    //         .then(({ data }) => {
    //             this.setState({
    //                 results: data.data // MusicGraph returns an object named data,
    //                                    // as does axios. So... data.data
    //             })
    //         })
    // }

    render(){
        const inputPlaceholder = 'Search new friends by location';
        return(
            <form>
                <div className='input-container'>
                    <input className='global-search' type='search'
                           spellCheck={false}
                           ref={input => this.search = input}
                           onChange={this.handleInputChange}
                           placeholder={inputPlaceholder}
                           autoComplete='off'/>
                    <span className='icon-search'>
                        <Search size={15}/>
                    </span>
                </div>
                <div className='results-container'>
                    <Suggestions results={this.state.results} />
                </div>
            </form>
        )
    }
}

export default GlobalSearch;
