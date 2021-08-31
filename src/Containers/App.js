import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            corgis: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ corgis: users }));
    }
    onSearchChange= (event) => {
        this.setState({ searchField: event.target.value });
    }
    render() {
        const { corgis, searchField } = this.state;
        const filteredCorigs = corgis.filter(corgis => {
            return corgis.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (!corgis.length) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='bb pa2 f1'>Robots</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList corgis={filteredCorigs} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;