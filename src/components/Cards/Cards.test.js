import React from 'react';
import { mount } from '../../enzyme.js';
import Cards from './index';

const cardsProps = {
  cards: {
    list:[
    {
      coreData: {
        number: 'INCX999',
        assignee: 'Jeff',
        shortDescription: 'I seem to have forgotten the password',
        application: 'System'
      }
    },
    {
      coreData: {
        number: 'INCX321',
        assignee: 'Keerthi',
        shortDescription: 'Need to contact asap',
        application: 'System'
      }
    }]
  },
  toggleDrawer: jest.fn()
};

describe('Card tests', () => {
  it('renders component', () => {
    expect(mount(
      <Cards {...cardsProps} />
    ));
  });

  it('renders the correct props', () => {
    const wrapper = mount(<Cards {...cardsProps} />);

    // Expect the props to equal the static const CardProps when mounted
    expect(wrapper.props()).toEqual({ ...cardsProps });
    expect(wrapper.props().cards.list).toHaveLength(2);
  });
});
