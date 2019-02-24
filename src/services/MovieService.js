import axios from 'axios';

class MovieService {

    constructor() {
        this.API_KEY='5dc14f3593738dbe09dea411a7924b03';
        this.API_SECRET='';

    }
    // Getter


    async allMovies()   {
        let all_movies;
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US&page=1`)
            .then(function (response) {
                // handle success
                //console.log(response);
                all_movies=response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });


        return all_movies
    }

    async getMovieById(movie_id)   {
        let movie;
        await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.API_KEY}&language=en-US` )
            .then(function (response) {
                // handle success
                //console.log(response);
                movie=response.data
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });


        return movie
    }
}
export default MovieService;