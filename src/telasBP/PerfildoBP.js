import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Metas from '../telasAconselhado/Metas'
import ListaAcons from './ListaAcons'
import Button from '@material-ui/core/Button';


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
    // const { classes } = props;

    return (
        <div className="card" container>
            <Grid container spacing={20}>
                <Grid xs={12} sm={2}>
                    <div item className="avatar">
                        <img alt="perfil" className="avatarInt" src="https://i.pinimg.com/564x/72/c3/56/72c35655c647e3b792aeb3dfa09a5caa.jpg" />
                    </div>
                    <div className="imagem">
                        <Avatar alt="rainting" src="/static/media/Rating3.c6bb52dc.svg" className="imagem-mascara" />
                        {/* <p class="imagem-mascara"></p> */}

                    </div>
                    <p><Typography variant="subheading" gutterBottom>
                        Raiting Atual
                    </Typography>
                    </p>
                    <Typography variant="subheading" gutterBottom>
                        Raiting 2017: 3
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        Raiting 2016: 4                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        Raiting 2015: 5
                    </Typography>

                    <div className="botaoPerfil">
                        <Button variant="contained" className="">
                            Atualizar cadastro
                        </Button>
                    </div>
                    <div className="botaoPerfil">
                        <Button variant="contained" className="">
                            Suporte
                        </Button>
                    </div>

                </Grid>
                <Grid xs={12} sm={1}></Grid>
                <Grid item xs={12} sm={4} >
                    <div className="descricao">

                        <Typography item variant="h4" gutterBottom>
                            João Paulo Critis
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Head of Design,
                            30 Anos.
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Tempo de KPMG : <strong>5 anos</strong>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Tempo no cargo: <strong>2 anos</strong>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Formação acadêmica:
                          <ul class="circle">
                                <li><strong>Universidade Federal do ABC</strong></li>
                                Mestrado em Desing | (2017 - presente)
                            <li><strong>Universidade Federal Rural da Amazônia</strong></li>
                                Graduação em Sistemas de Informação | (2014 - 2016)
                            <li><strong>Universidade Federal do Pará</strong></li>
                                Pós Graduação em Direção de Arte (2015 - 2016)
                            <li><strong>Universidade de São Paulo</strong></li>
                                Técnico em Comunicação social | (1998 - 2002)
                         </ul>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            TOEIC: <strong> 720 </strong> (2018) | <strong> 700 </strong> (2017) | <strong> 610 </strong> (2016)
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Habilidade: <strong> OAB </strong> (Aprovado) | <strong> CRC </strong> (Válido)
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Mobility Realizado: <strong> ONova York 2015, Berlim 2017. </strong> (Aprovado) | <strong> CRC </strong> (Válido)
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Interesse em Mobility: <strong> Internacional / Nacional </strong>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Aconselhados: <strong> 0 </strong>
                        </Typography>
                    </div>
                    {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
                </Grid>
                <Grid item xs={12} sm={5}>

                    <div className="descricao">
                        <Typography variant="h5" gutterBottom>
                            <strong>Metas</strong>
                            <Metas />
                        </Typography>
                    </div>
                    <ListaAcons />
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