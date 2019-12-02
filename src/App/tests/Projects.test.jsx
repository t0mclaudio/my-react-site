import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Projects from '../components/Projects';

configure({ adapter: new Adapter() });

describe('Test Projects Component', () => {
  it('Projects Component mounts', () => {
    const projects = shallow(<Projects />)
    expect(projects.find('#projects').length).toEqual(1);
  });
});
