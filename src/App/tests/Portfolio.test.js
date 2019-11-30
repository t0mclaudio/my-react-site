import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import Portfolio from '../components/Portfolio';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Test Portfolio Component', () => {
  it('Portfolio Component mounts', () => {
    let portfolio = shallow(<Portfolio />)
    expect(portfolio.find('#portfolio').length).toEqual(1);
  })
})
