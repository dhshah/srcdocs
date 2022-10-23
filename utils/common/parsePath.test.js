import '@testing-library/jest-dom';
import {
  parsePath
} from './parsePath';

describe('parsePaths', () => {
  it('returns a string [] from string', () => {
    expect(parsePath('test')).toStrictEqual(['test']);
  });

  it('returns a string [] from string []', () => {
    expect(parsePath(['test'])).toStrictEqual(['test']);
  });
});
