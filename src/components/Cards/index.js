import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 200,
    minHeight: 200  
  },
  title: {
    fontSize: 14,
  },
  pos: {
    // marginBottom: 12,
  },
  desc: {
    fontWeight: 400,
  }
};

export const Cards = ({ card, classes, index, toggleDrawer }) => {
  const handleClick = () => {
    console.log(index)
    toggleDrawer(true, index);
  }
  return (
      <Card className={classes.card} onClick={handleClick}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            New
          </Typography>
          <Typography variant="h5" component="h2">
            {card.number}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
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
      </Card>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  index: PropTypes.number,
  toggleDrawer: PropTypes.func
};

export default withStyles(styles)(Cards);
