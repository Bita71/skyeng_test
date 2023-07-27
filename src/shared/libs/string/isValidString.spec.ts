import { describe, it, expect } from 'vitest'
import { isValidString } from './isValidString';

describe('shared / libs / string / escapeString', () => {
  it('valid string', () => {
    expect.hasAssertions();

    expect(isValidString('some string'))
      .toBe(true);

    expect(isValidString('some string  '))
      .toBe(true);
  });

  it('invalid string', () => {
    expect.hasAssertions();

    expect(isValidString('    '))
      .toBe(false);

    expect(isValidString('\n   '))
    .toBe(false);
  });
});
