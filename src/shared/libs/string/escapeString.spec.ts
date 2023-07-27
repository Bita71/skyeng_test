import { describe, it, expect } from 'vitest'
import { escapeString } from './escapeString';

describe('shared / libs / string / escapeString', () => {
  it('surrounds string with double quotes', () => {
    expect.hasAssertions();

    expect(escapeString('some string'))
      .toBe('"some string"');

    expect(escapeString('without_a_space'))
      .toBe('"without_a_space"');

    expect(escapeString('with "quotes"'))
      .toBe('"with \\"quotes\\""');
  });
});
