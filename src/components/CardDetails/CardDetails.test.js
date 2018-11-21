import React from 'react';
import { mount } from '../../enzyme.js';
import CardDetails from './index';

const cardDetailsProps = {
  card: {
    coreData: {
      number: 'INCX999',
      assignee: 'Jeff',
      shortDescription: 'I seem to have forgotten the password',
      application: 'System'
    },
    serviceData: {
      made_sla: '',
      upon_reject: 'Cancel',
      opened_by: 'X',
      priority: 'High',
      activity_due: 'Soon',
      approval: 'Not requested'
    }
  },
  open: false,
  toggleDrawer: jest.fn(),
  index: 0
};

describe('CardDetails tests', () => {
  it('renders component', () => {
    expect(mount(
      <CardDetails {...cardDetailsProps} />
    ));
  });

  it('renders the correct props', () => {
    const wrapper = mount(<CardDetails {...cardDetailsProps} />);

    // Expect the props to equal the static const cardDetailsProps when mounted
    expect(wrapper.props().card).toEqual({...cardDetailsProps.card});
  });
});
