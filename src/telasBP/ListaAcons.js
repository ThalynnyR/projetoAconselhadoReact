// import React, { Component, Fragment } from 'react';
// import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';



// class ListaAcons extends Component {
//     render() {
//         return (
//             <div className="descricao">
//                 <Typography variant="h5" gutterBottom>
//                     <strong>Lista Aconselhados</strong>
//                     <List className="list">
//                         {messages.map(({ id, primary, secondary, terceary, person }) => (
//                             <Fragment key={id}>
//                                 <ListItem button>
//                                     <Avatar alt="Profile Picture" src={person} />
//                                     <ListItemText primary={primary} secondary={secondary} terceary={terceary} />
//                                     <ListItem >
//                                         <Typography>Oi</Typography>
//                                     </ListItem>
//                                 </ListItem>

//                             </Fragment>
//                         ))}
//                     </List>
//                 </Typography>
//             </div>

//         )
//     }
// }

// export default ListaAcons

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { Line } from 'rc-progress';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

const messages = [
    {
        id: 1,
        nome: 'Marina Eliane Bernardes',
        cargo: "Cargo atual",
        meta: "R$ 1.520.000",
        porcentagem: 50,
        person: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a2/Lily_Aldrin.jpg/220px-Lily_Aldrin.jpg',
    },
    {
        id: 2,
        nome: 'Samuel André Raimundo da Rosa',
        cargo: "Cargo atual",
        meta: "R$ 1.520.000",
        porcentagem: 60,
        person: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a6/Marshall_Eriksen.jpg/220px-Marshall_Eriksen.jpg',
    },
    {
        id: 3,
        nome: 'Patrícia Ester Barbosa',
        cargo: 'Cargo atual',
        meta: "R$ 1.520.000",
        porcentagem: 55,
        person: 'https://upload.wikimedia.org/wikipedia/pt/6/6f/Robin_Scherbatsky.jpg',
    },
    {
        id: 4,
        nome: 'Raul Paulo Vicente Oliveira',
        cargo: 'Cargo atual',
        meta: "R$ 1.520.000",
        porcentagem: 80,
        person: 'https://upload.wikimedia.org/wikipedia/pt/archive/7/7d/20111229014010%21Barney_Stinson.jpg',
    },
    {
        id: 5,
        nome: 'Alexandre Bento Thiago Araújo',
        cargo: 'Cargo atual',
        meta: "1.520.000 R$",
        porcentagem: 32,
        person: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e0/Ted_Mosby.jpg/220px-Ted_Mosby.jpg',
    },
];

function PaperSheet(props) {
    const { classes } = props;
    return (
        <div className="descricao">
            <Typography variant="h5" gutterBottom>
                <strong>Lista de Aconselhados</strong>
            </Typography>

            <div className={classes.list} as={Link} to='/aconselhado'>
                {messages.map(({ id, nome, cargo, meta, porcentagem, person }) => (
                    <Paper square className="miniCard" button>
                        <Fragment key={id}>
                            <div className="list">
                                <Grid container spacing={20}>
                                    <Grid md={1} xs={12} sm={1} className="img">
                                        <Avatar alt="Profile Picture" src={person} />
                                    </Grid>
                                    <Grid md={11} xs={12} sm={11}>
                                        <Typography variant="body1" className="b"  gutterBottom>{nome}</Typography>
                                        <Typography variant="caption" gutterBottom>{cargo}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={20}>
                                    <Grid md={1} xs={12} sm={1}></Grid>
                                    <Grid md={3} xs={12} sm={2}>
                                        <Typography variant="subtitle2" gutterBottom>{meta}</Typography>
                                    </Grid>
                                    <Grid md={7} xs={12} sm={5}>
                                        <Line percent={porcentagem} strokeWidth="2" strokeColor="#005eb8" trailWidth="2" className="linhaBP" />
                                    </Grid>
                                    <Grid md={1} xs={12} sm={1} align='center'>
                                        {porcentagem}%
                                    </Grid>
                                </Grid>
                            </div>
                        </Fragment>
                    </Paper>
                ))}
            </div>

        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);