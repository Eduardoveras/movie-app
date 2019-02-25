import React, {Component} from 'react';
import '../assets/styles/App.css';
import MovieService from "../services/MovieService";
import Button from "@material-ui/core/es/Button/Button";


class App extends Component {

    constructor(props){
        super(props);
        this.state= {
            movie_details: [],
            movie_id: window.location.href.split('/').pop(), // I Know this is not the best aproach based on params... but due to time im gonna leave it for now.
        };

    }

    componentWillMount() {
        this.movieService = new MovieService();
        this.movieService.getMovieById(this.state.movie_id).then( function(result) {
            console.log(result);
            this.setState({movie_details:result})
        }.bind(this));

    }

    render() {
        let movie=this.state.movie_details;
        return (
            <div style={{overflow: 'hidden'}}>
                {this.state.movie_details?<div>
                    <div className="bg-image" style={{

                        backgroundImage: `url("https://image.tmdb.org/t/p/original${this.state.movie_details.backdrop_path}")`,
                        filter: 'blur(8px)'
                    }}>
                    </div>
                    <div className="bg-text">
                        <img src={'http://image.tmdb.org/t/p/w185/'+movie.poster_path} alt={movie.title}/><br/>

                        {movie.title}
                        <p>{movie.overview}</p>
                        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
                        <Button variant="contained">Visit Website</Button>
                        </a>
                    </div>
                    </div>
                    :
                    <p>Loading...</p>}

            </div>
        );
    }
}

export default App;
