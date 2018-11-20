import React from 'react';
import { mount } from '../../enzyme.js';
import Cards from './index';

const cardsProps = {
  card: {
    coreData: {
      number: 'INCX999',
      assignee: 'Jeff',
      shortDescription: 'I seem to have forgotten the password',
      application: 'System'
    }
  }
};

describe('Cards tests', () => {
  it('renders component', () => {
    expect(mount(
      <Cards {...cardsProps} />
    ));
  });

  it('renders the correct props', () => {
    const wrapper = mount(<Cards {...cardsProps} />);

    // Expect the props to equal the static const CardsProps when mounted
    expect(wrapper.props().card).toEqual({ ...cardsProps.card });
  });
});
