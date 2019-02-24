import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import MovieService from "../services/MovieService";
import {Link} from "react-router-dom";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 100,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

class MovieGrid extends Component{

    constructor(props){
        super(props);
        this.state= {
            movie_list: []
        };

    }

    componentWillMount() {
        this.movieService = new MovieService();
        this.movieService.allMovies().then( function(result) {
            console.log(result);
            this.setState({movie_list:result.results})
        }.bind(this));

    }


    render() {
    return (
        <div>
            <GridList cellHeight={300} cols={10} >
                {this.state.movie_list.map(tile => (

                    <GridListTile key={tile.poster_path}>
                        <img src={'http://image.tmdb.org/t/p/w185/'+tile.poster_path} alt={tile.title}/>
                        <Link to={"/details/"+tile.id}>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>Score: {tile.vote_average}</span>}
                        />
                        </Link>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
            }
}

export default withStyles(styles)(MovieGrid);