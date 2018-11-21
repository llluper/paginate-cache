import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@material-ui/core';

const Paginator = ({ currentPage, totalPages, prevPage, nextPage }) => {
  return (
    <Grid container justify="center" style={{ marginTop: '10px' }}>
      <Button size="small" disabled={currentPage <= 0} onClick={prevPage}>BACK</Button>
      <Typography component="p" style={{ lineHeight: 3, margin: '0 50px' }}>
        Page {currentPage + 1} of {totalPages ? totalPages : '???'}
      </Typography>
      <Button size="small" disabled={currentPage + 1 >= totalPages && totalPages !== 0} onClick={nextPage}>NEXT</Button>
    </Grid>
  );
}

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired
};

export default Paginator;
