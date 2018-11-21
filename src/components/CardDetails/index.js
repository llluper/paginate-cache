import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Grid, Typography } from '@material-ui/core';

const style = {
  drawer: {
    minWidth: 600,
    padding: 10
  },
  number: {
    padding: '20px 0px'
  },
  row: {
    padding: '9px 0',
    lineHeight: 1.6,
    fontWeight: 500
  },
  label: {
    fontSize: 12,
    margin: 0
  },
  value: {
    fontSize: 14,
    margin: 0,
    borderBottom: '1px solid #eee'
  }
}

const CardDetails = ({ card, open, toggleDrawer, index }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false, index)}>
      <div
        style={style.drawer}
        onClick={() => toggleDrawer(false, index)}
        onKeyDown={() => toggleDrawer(false, index)}
      >
        <Typography style={style.number} variant="h4" component="h2" >
          {card.coreData.number}
        </Typography>
        <Grid container style={style.row}> 
          <Grid item sm={2}> 
            <p style={style.label}>Assigned to</p>
          </Grid>
          <Grid item sm={10}> 
            <p style={style.value}>{card.coreData.assignee}&nbsp;</p>
          </Grid>
        </Grid>
        <Grid container style={style.row}>
          <Grid item sm={2}> 
            <p style={style.label}>Short description</p>
          </Grid>
          <Grid item sm={10}>
            <p style={style.value}>{card.coreData.shortDescription}&nbsp;</p>
          </Grid>
        </Grid>
        <Grid container style={style.row}>
          <Grid item sm={2}> 
            <p style={style.label}>Application</p> 
          </Grid>
          <Grid item sm={10}>
            <p style={style.value}>{card.coreData.application}&nbsp;</p>
          </Grid>         
        </Grid>
        <Grid container style={style.row}>
          <Grid item sm={2}> 
            <p style={style.label}>made_sla</p> 
          </Grid>
          <Grid item sm={10}>
            <p style={style.value}>{card.serviceData.madesla}&nbsp;</p>
          </Grid>         
        </Grid>
        <Grid container style={style.row}>
          <Grid item sm={2}> 
            <p style={style.label}>upon_reject</p> 
          </Grid>
          <Grid item sm={10}>
            <p style={style.value}>{card.serviceData.upon_reject}&nbsp;</p>
          </Grid>        
        </Grid>
        <Grid container style={style.row}>
          <Grid item sm={2}> 
            <p style={style.label}>opened_by</p>
          </Grid>
          <Grid item sm={10}>
            <p style={style.value}>{card.serviceData.opened_by}&nbsp;</p>
          </Grid>         
        </Grid>
        <Grid container style={style.row}>
          <Grid item sm={2}> 
            <p style={style.label}>priority</p> 
          </Grid>
          <Grid item sm={10}>
            <p style={style.value}>{card.serviceData.priority}&nbsp;</p>
          </Grid>         
        </Grid>
        <Grid container style={style.row}>
          <Grid item sm={2}> 
            <p style={style.label}>activity_due</p> 
          </Grid>
          <Grid item sm={10}>
            <p style={style.value}>{card.serviceData.activity_due}&nbsp;</p>
          </Grid>        
        </Grid>
        <Grid container style={style.row}>
          <Grid item sm={2}> 
            <p style={style.label}>approval</p> 
          </Grid>
          <Grid item sm={10}>
            <p style={style.value}>{card.serviceData.approval}&nbsp;</p>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
}

CardDetails.propTypes = {
  open: PropTypes.bool.isRequired,
  card: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default CardDetails;
