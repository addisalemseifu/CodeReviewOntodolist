const testfun = require('./index');

test('test the test', () => {
  expect(testfun()).toBe('test');
});
