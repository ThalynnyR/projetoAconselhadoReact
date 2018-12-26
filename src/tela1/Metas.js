import React from 'react';
import { Line } from 'rc-progress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const Metas = props => {
    return (
        <div row>
            <Typography variant="body2" gutterBottom>
                Individual financeira
            </Typography>
            <Line percent="60" strokeWidth="2" strokeColor="#efcb06" />
            <Typography variant="body2" gutterBottom>
                3/5
            </Typography>
        </div>
    )
}

export default Metas