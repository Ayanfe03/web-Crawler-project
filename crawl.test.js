const { normalizeURL, getURLsFromHTML } = require('./crawl.js');
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

test('getURLsFromHTML, absolute', () => {
  const inputHTMLBody = `
<html>
  <body>
    <a href="https://ayanfe03.hashnode.dev/path/">
      Ayanfe.Hashnode Blog
    </a>
  </body>
</html>  
`
  const inputBaseURL = "https://ayanfe03.hashnode.dev/path/";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://ayanfe03.hashnode.dev/path/"];
  expect(actual).toEqual(expected);
})

test('getURLsFromHTML, relative', () => {
  const inputHTMLBody = `
<html>
  <body>
    <a href="/path/">
      Ayanfe.Hashnode Blog
    </a>
  </body>
</html>  
`
  const inputBaseURL = "https://ayanfe03.hashnode.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://ayanfe03.hashnode.dev/path/"];
  expect(actual).toEqual(expected);
})

test('getURLsFromHTML, both', () => {
  const inputHTMLBody = `
<html>
  <body>
    <a href="https://ayanfe03.hashnode.dev/path1/">
      Ayanfe.Hashnode Blog Path One
    </a>
    <a href="/path2/">
      Ayanfe.Hashnode Blog Path Two
    </a>
  </body>
</html>  
`
  const inputBaseURL = "https://ayanfe03.hashnode.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://ayanfe03.hashnode.dev/path1/", "https://ayanfe03.hashnode.dev/path2/"];
  expect(actual).toEqual(expected);
})

test('getURLsFromHTML, invalid', () => {
  const inputHTMLBody = `
<html>
  <body>
    <a href="invalid">
      Invalid URL
    </a>
  </body>
</html>  
`
  const inputBaseURL = "https://ayanfe03.hashnode.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [];
  expect(actual).toEqual(expected);
})
