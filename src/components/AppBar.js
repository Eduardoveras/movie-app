import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const styles = {
    root: {
        flexGrow: 1,
    },
};

function SimpleAppBar() {
    return (
        <div >
            <AppBar position="static" color="default">
                <Toolbar>
                    <Link to="/">
                    <Typography variant="h6" color="inherit">
                        Movie App
                    </Typography>
                        </Link>
                    <Link to="/details">Topics</Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(SimpleAppBar);