import React from 'react';
import { shallow } from './enzyme.js';
import App from './App';

describe('CardDetails tests', () => {
  it('renders card details', () => {
    const wrapper = shallow(<App />);
    // Expect the wrapper object to be defined
    expect(wrapper).toBeDefined();
  })
})
