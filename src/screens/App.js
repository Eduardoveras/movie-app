import React, { Component } from 'react';
import logo from '../logo.svg';
import '../assets/styles/App.css';
import AppBar from '../components/AppBar'
import MovieGrid from '../components/MovieGrid'

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar/>
                <MovieGrid/>

            </div>
        );
    }
}

export default App;
