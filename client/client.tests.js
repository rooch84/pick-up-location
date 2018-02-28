import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Result from '../imports/ui/result/Result.jsx';

Enzyme.configure({ adapter: new Adapter() });
describe('ResultItem', () => {
  it('should render', () => {
    const item = shallow(<Result name="Manchester" subtitle="Greater Manchester" type="City" search="man"/>);
    chai.expect(item.hasClass('result-item')).to.equal(true);
  });

  it('should emphasize', () => {
    const item = shallow(<Result name="manchester" subtitle="Greater Manchester" type="City" search="man"/>);
    chai.expect(item.contains(<em>man</em>)).to.equal(true);
  });

  it('should not emphasize', () => {
    const item = shallow(<Result name="Manchester" subtitle="Greater Manchester" type="City" search="eus"/>);
    chai.expect(item.contains(<em>Man</em>)).to.equal(false);
  });

  it('should maintain capital letter during emphisis', () => {
    const item = shallow(<Result name="Manchester" subtitle="Greater Manchester" type="City" search="man"/>);
    chai.expect(item.contains(<em>Man</em>)).to.equal(true);
  });
});
