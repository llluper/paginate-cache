import React from 'react';
import { mount } from '../../enzyme.js';
import Card from './index';

const cardProps = {
  card: {
    coreData: {
      number: 'INCX999',
      assignee: 'Jeff',
      shortDescription: 'I seem to have forgotten the password',
      application: 'System'
    }
  },
  index: 0,
  toggleDrawer: jest.fn()
};

describe('Card tests', () => {
  it('renders component', () => {
    expect(mount(
      <Card {...cardProps} />
    ));
  });

  it('renders the correct props', () => {
    const wrapper = mount(<Card {...cardProps} />);

    // Expect the props to equal the static const CardProps when mounted
    expect(wrapper.props().card).toEqual({ ...cardProps.card });
  });
});
