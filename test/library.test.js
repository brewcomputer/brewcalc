import { bitternessIbuTinseth } from '../lib/brewcalc.min.js';

test('bitternessIbuTinseth', () => {
  expect(bitternessIbuTinseth(10)).toBeCloseTo(100, 0);
});
