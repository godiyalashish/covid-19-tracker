import React from 'react';

import Chart from './components/chart/chart';
import Cards from './components/cards/cards';
import CountryPicker from './components/countryPicker/countryPicker';

import { fetchData } from './api';
import image from './components/image/image.png';

import './App.css';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
    };

    handelCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })
    }
    render() {
        const { data, country } = this.state
        return (
            <div className="container">
                <img className="image" src={image} alt="covid-19image" />
                <Cards data={data}/>
                <CountryPicker handelCountryChange={this.handelCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
};

export default App;