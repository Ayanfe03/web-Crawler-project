const { normalizeURL } = require('./crawl.js');
const {test, expect} = require('@jest/globals');

test('normalizeURL strip protocol', () => {
  const input = 'https://ayanfe03.hashnode.dev/path/';
  const actual = normalizeURL(input);
  const expected = 'ayanfe03.hashnode.dev/path';
  expect(actual).toEqual(expected);
})

test('normalizeURL strip trailing slash', () => {
  const input = 'https://ayanfe03.hashnode.dev/path/';
  const actual = normalizeURL(input);
  const expected = 'ayanfe03.hashnode.dev/path';
  expect(actual).toEqual(expected);
})

test('normalizeURL capitals', () => {
  const input = 'https://AYANFE03.hashnode.dev/path';
  const actual = normalizeURL(input);
  const expected = 'ayanfe03.hashnode.dev/path';
  expect(actual).toEqual(expected);
})

test('normalizeURL strip http', () => {
  const input = 'http://ayanfe03.hashnode.dev/path/';
  const actual = normalizeURL(input);
  const expected = 'ayanfe03.hashnode.dev/path';
  expect(actual).toEqual(expected);
})
