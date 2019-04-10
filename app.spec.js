const app = './app';

test('function is defined', () => {
  const sw = Stopwatch();
  expect(sw.start()).toBeDefined();
})