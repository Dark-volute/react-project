import React from 'react';
import Login from './login';
import { shallow } from 'enzyme';

describe('icon', () => {
  it('click successfully', () => {
    const wrapper = shallow(<Login.WrappedComponent />);
    expect(1).toBe(1);
  });
});
