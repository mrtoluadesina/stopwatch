const Stopwatch = require('./app');
const sw = new Stopwatch();

test('function is not defined', () => {
  expect(sw.start()).not.toBeDefined();
});

test('function is called', () => {
  expect(sw.start()).toHaveBeenCalled();
});