import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import Project from '../components/Project';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Project component test', () => {
  it('Renders correctly', () => {
   let wrapper = shallow(<Project />);
   expect(wrapper.find(".project")).toHaveLength(1); 
  })
})