import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Project from '../components/Project';

configure({ adapter: new Adapter() });

describe('Project component test', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Project />);
    expect(wrapper.find('.project')).toHaveLength(1);
  });
});
