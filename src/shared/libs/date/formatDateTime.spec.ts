import { describe, it, expect } from 'vitest'
import { formatDateTime } from './formatDateTime';

describe('shared / libs / date / formatDateTime', () => {
  it('check default usage', () => {
    expect.hasAssertions();

    expect(formatDateTime('2015-07-12T10:08:02Z'))
      .toBe('13:08 12.07.2015');

    expect(formatDateTime('2020-07-12'))
      .toBe('00:00 12.07.2020');
  });

  it('invalid date', () => {
    expect.hasAssertions();

    expect(formatDateTime('asdfsdf'))
      .toBe('');
  });
});
