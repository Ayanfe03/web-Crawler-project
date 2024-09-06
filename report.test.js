const { sortPages } = require('./report.js');
const { test, expect } = require('@jest/globals');

test('sortPages 2 pages', () => {
  const input = {
    'https://ayanfe03.hashnode.dev/path': 1,
    'https://ayanfe03.hashnode.dev': 3
  }
  const actual = sortPages(input)
  const expected = [
    ['https://ayanfe03.hashnode.dev', 3],
    ['https://ayanfe03.hashnode.dev/path', 1]
  ]
  expect(actual).toEqual(expected)
})

test('sortPages 5 pages', () => {
  const input = {
    'https://ayanfe03.hashnode.dev/path': 1,
    'https://ayanfe03.hashnode.dev': 3,
    'https://ayanfe03.hashnode.dev/path2': 5,
    'https://ayanfe03.hashnode.dev/path3': 2,
    'https://ayanfe03.hashnode.dev/path4': 9
  }
  const actual = sortPages(input)
  const expected = [
    ['https://ayanfe03.hashnode.dev/path4', 9],
    ['https://ayanfe03.hashnode.dev/path2', 5],
    ['https://ayanfe03.hashnode.dev', 3],
    ['https://ayanfe03.hashnode.dev/path3', 2],
    ['https://ayanfe03.hashnode.dev/path', 1]
  ]
  expect(actual).toEqual(expected)
})
