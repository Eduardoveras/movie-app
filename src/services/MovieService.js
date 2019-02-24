import axios from 'axios';

class MovieService {

    constructor() {
        this.API_KEY='1';
        this.API_SECRET='2';

    }
    // Getter


    async allMovies()   {
        let all_movies;
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5dc14f3593738dbe09dea411a7924b03&language=en-US&page=1')
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
}
export default MovieService;