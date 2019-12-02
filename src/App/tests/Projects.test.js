import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import Projects from '../components/Projects';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Test Projects Component', () => {
  it('Projects Component mounts', () => {
    let projects = shallow(<Projects />)
    expect(projects.find('#projects').length).toEqual(1);
  })
  //Write tests for error and no projects found
})
