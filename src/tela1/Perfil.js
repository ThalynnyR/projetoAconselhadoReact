import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <div className="card" container>
            <Grid container spacing={20}>
                <div item xs={4} className="avatar">
                    <img alt="Remy Sharp" className="avatarInt" src="https://i.pinimg.com/564x/72/c3/56/72c35655c647e3b792aeb3dfa09a5caa.jpg"/>
                   
                </div>
                <Grid item xs={4} >
                    Teste2
          {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
                </Grid>
                <Grid item xs={4}>
                    Teste3
          {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
                </Grid>
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);