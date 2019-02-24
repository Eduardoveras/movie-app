import React, {Component} from 'react';
import '../assets/styles/App.css';
import AppBar from '../components/AppBar'
import MovieList from '../screens/MovieList'
import MovieDetails from '../screens/MovieDetails'
import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppBar/>


                    <Route exact path="/" component={MovieList}/>
                    <Route path="/details/:id" component={MovieDetails}/>
                </div>
            </Router>
        );
    }
}

export default App;
