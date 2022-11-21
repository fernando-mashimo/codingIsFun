const { digPow } = require('../playingWithDigits');

describe('Verify if digPow function returns expected results', () => {
  it('digPow is a function', () => {
    expect(typeof digPow).toBe('function');
  });
  
    it('digPow(89, 1) returns 1', () => {
    expect(digPow(89, 1)).toBe(1);
  });
  
  it('digPow(92, 1) returns -1, as there is no k that satisfies 9¹ + 2² = 92 * k', () => {
    expect(digPow(92, 1)).toBe(-1);
  });

  it('digPow(695, 2) returns 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2', () => {
    expect(digPow(695, 2)).toBe(2);
  });

  it('digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51', () => {
    expect(digPow(46288, 3)).toBe(51);
  });
});