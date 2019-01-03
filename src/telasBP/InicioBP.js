import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class InicioBP extends Component {
    render() {
        return (
            <div>
                <p className="menu-lateral">
                    <Grid container spacing={20}>
                        <Grid xs={12} sm={10}>
                            <Typography variant="h6" className="resumo" align='left'>
                                Resumo
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* <TestAvatar /> */}
                </p>
            </div>
        )
    }
}

export default InicioBP