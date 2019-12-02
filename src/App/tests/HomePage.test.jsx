import React from 'react';
import expect from 'expect';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Banner from '../components/Banner';
import Projects from '../components/Projects';

configure({ adapter: new Adapter() });

describe('Test Home Page', () => {
  it("Contains Banner & Projects Component", () => {
    let home = shallow(<HomePage />);
    expect(home.contains(<Banner />)).toBe(true);
    expect(home.contains(<Projects />)).toBe(true);
  });
})