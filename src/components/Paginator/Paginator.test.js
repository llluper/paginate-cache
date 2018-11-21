import React from 'react';
import { mount } from '../../enzyme.js';
import Paginator from './index';

const paginatorProps = {
  currentPage: 1,
  totalPages: 200,
  nextPage: jest.fn(),
  prevPage: jest.fn()
};

describe('Paginator tests', () => {
  it('renders component', () => {
    expect(mount(
      <Paginator {...paginatorProps} />
    ));
  });

  it('renders the correct props', () => {
    const wrapper = mount(<Paginator { ...paginatorProps } />);

    // Expect the props to equal the static const PaginatorProps when mounted
    expect(wrapper.props()).toEqual({ ...paginatorProps });
  });
});
