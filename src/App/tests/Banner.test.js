import React from 'react';
import { create } from 'react-test-renderer';

describe('Banner Component', () => {
  it('Banner renders', () => {
    const banner = create(<Banner />);
    expect(banner.toJSON()).toMatchSnapshot();
  })
})