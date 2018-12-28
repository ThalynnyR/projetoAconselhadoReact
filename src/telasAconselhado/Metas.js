import React, { Component } from 'react';
import { Line } from 'rc-progress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
// import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
// import FormGroup from '@material-ui/core/FormGroup';


class Metas extends Component {
    render() {
        return (
            <span>

                {/* <Radio toggle/> igual Interruptor */}
                {/* <FormGroup row>
                <Typography variant="body2" gutterBottom>
                    Individual financeira
                            </Typography>
                <Line percent="60" strokeWidth="3" strokeColor="#efcb06" trailWidth="3" className="linha" />
                <Typography variant="body2" gutterBottom>
                    3/5
                </Typography>
            </FormGroup>
            <FormGroup row>
                <Typography variant="body2" gutterBottom>
                    Mercados                 
                </Typography>
                <Line percent="100" strokeWidth="3" strokeColor="#61cbaa" trailWidth="3" className="linha" />
                <Typography variant="body2" gutterBottom>
                    5/5
                </Typography>
            </FormGroup> */}


                <Grid container spacing={20}>
                    <Grid xs={12} sm={3}>
                        <Typography variant="body2" gutterBottom>
                            Individual financeira
                            </Typography>
                    </Grid>
                    <Grid xs={12} sm={7}>
                        <Line percent="60" strokeWidth="3" strokeColor="#efcb06" trailWidth="3" className="linha" />
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <Typography variant="body2" align='center' gutterBottom>
                            3/5
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <Typography variant="body2" gutterBottom>
                            Mercados
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={7}>
                        <Line percent="100" strokeWidth="3" strokeColor="#61cbaa" trailWidth="3" className="linha" />
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <Typography variant="body2" align='center' gutterBottom>
                            5/5
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <Typography variant="body2" gutterBottom>
                            Risco e Qualidade
                    </Typography>
                    </Grid>
                    <Grid xs={12} sm={7}>
                        <Line percent="20" strokeWidth="3" strokeColor="#f75757" trailWidth="3" className="linha" />
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <Typography variant="body2" align='center' gutterBottom>
                            3/5
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <Typography variant="body2" gutterBottom>
                            Pessoas
                    </Typography>
                    </Grid>
                    <Grid xs={12} sm={7}>
                        <Line percent="80" strokeWidth="3" strokeColor="#61cbaa" trailWidth="3" className="linha" />
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <Typography variant="body2" align='center' gutterBottom>
                            4/5
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <Typography variant="body2" gutterBottom>
                           Rating
                    </Typography>
                    </Grid>
                    <Grid xs={12} sm={7}>
                        <Line percent="80" strokeWidth="3" strokeColor="#61cbaa" trailWidth="3" className="linha" />
                    </Grid>
                    <Grid xs={12} sm={2}>
                        <Typography variant="body2" align='center' gutterBottom>
                            4/5
                        </Typography>
                    </Grid>
                </Grid>



            </span>
        )
    }
}

export default Metas