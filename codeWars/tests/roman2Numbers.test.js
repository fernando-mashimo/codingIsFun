const { solution } = require('../leetCode_Roman2Numbers')

describe('Verify if solution function returns expected results', () => {
  it('solution is a function', () => {
    expect(typeof solution).toBe('function');
  });

  it('solution returns MMXVI as 2016', () => {
    expect(solution('MMXVI')).toBe(2016);
  });

  it('solution returns MMCMLVII as 2957', () => {
    expect(solution('MMCMLVII')).toBe(2957);
  });
});