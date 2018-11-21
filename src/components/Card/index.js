import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card as MCard, CardActions, CardContent, Typography, withStyles }  from '@material-ui/core';

const styles = {
  card: {
    minWidth: 200,
    minHeight: 200  
  },
  title: {
    fontSize: 14,
  },
  desc: {
    fontWeight: 400,
  }
};

const Card = ({ card, classes, index, toggleDrawer }) => {
  const handleClick = () => {
    toggleDrawer(true, index);
  }
  return (
    <MCard className={classes.card} onClick={handleClick}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          New
        </Typography>
        <Typography variant="h5" component="h2">
          {card.number}
        </Typography>
        <Typography color="textSecondary">
          {card.application}<br/>
          {card.assignee}
        </Typography>
        <Typography className={classes.desc} component="p" noWrap>
          {card.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => toggleDrawer(true, index)} size="small">Learn More</Button>
      </CardActions>
    </MCard>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(Card);
