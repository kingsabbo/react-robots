import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    onSearchChange= (event) => {
        this.setState({ searchField: event.target.value });
    }
    render() {
        const { robots, searchField } = this.state;
        const filteredCorigs = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (!robots.length) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='bb pa2 f1'>Robots</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredCorigs} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;