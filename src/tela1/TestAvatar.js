import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-1/p50x50/46057199_131300864520168_6955885739884150784_n.jpg?_nc_cat=110&_nc_ht=scontent.frao1-1.fna&oh=ea6fde23a0b4e9eb706024e34f6e9359&oe=5CD83826" className={classes.avatar} />
      <Avatar alt="Remy Sharp" src="https://scontent.frao1-2.fna.fbcdn.net/v/t1.0-1/p50x50/46216854_326917681463849_1677104447559303168_n.jpg?_nc_cat=105&_nc_ht=scontent.frao1-2.fna&oh=ecb015a54f37161c6d89fd706f9f474f&oe=5C96D22C" className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);