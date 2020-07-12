import chai from 'chai';
import placeHolder from './index.js';

const { expect } = chai;

describe('some test', () => {
  it('SHOULD do something', () => {
    expect(placeHolder()).to.be.eql(0);
  });
});
