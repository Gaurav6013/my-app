import React, { Component } from 'react';
import Countryfun from './Countryfun';

class Country extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            CountryName:'India'  
        }
    }
    ChangeCountry = () => {
        this.setState({
            CountryName:'us'
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.CountryName}</p>
                <button onClick = { () => this.ChangeCountry()}>Chage</button>
            </div>
        );
    }
}

export default Country;