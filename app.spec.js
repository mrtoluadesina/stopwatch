const Stopwatch = require('./app');
const sw = new Stopwatch();

test('start method is not defined', () => {
  expect(sw.start()).not.toBeDefined();
});

test('duration method is called', () => {
  expect(sw.duration).toBeDefined();
});

test('check for instance', () => {
  expect(sw instanceof Stopwatch).toBe(true);
});