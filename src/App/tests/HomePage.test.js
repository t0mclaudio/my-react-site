import React from 'react';
import expect from 'expect';
import { shallow, mount, configure } from 'enzyme';
import HomePage from '../components/HomePage';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Test Home Page', () => {
  it("Contains Banner & Portfolio Component", () => {
    let home = mount(<Router><HomePage /></Router>);
    expect(home.find('#banner').length).toEqual(1);
    expect(home.find('#portfolio').length).toEqual(1);
  });
})