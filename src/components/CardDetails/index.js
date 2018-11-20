import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';

export const CardDetails = ({ card, open, toggleDrawer, index }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false, index)}>
      <div
        tabIndex={0}
        role="button"
        onClick={() => toggleDrawer(false, index)}
        onKeyDown={() => toggleDrawer(false, index)}
      >
        {card.coreData.number}<br />
        {card.coreData.assignee}<br />
        {card.coreData.shortDescription}<br />
        {card.coreData.application}<br />
        {card.serviceData.madesla}<br />
        {card.serviceData.upon_reject}<br />
        {card.serviceData.opened_by}<br />
        {card.serviceData.priority}<br />
        {card.serviceData.activity_due}<br />
        {card.serviceData.approval}
      </div>
    </Drawer>
  );
}

CardDetails.propTypes = {
  open: PropTypes.bool,
  card: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func,
  index: PropTypes.number
};

export default CardDetails;
