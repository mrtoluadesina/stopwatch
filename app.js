function Stopwatch() {
  let startTime, endTime, running, duration = 0; // declare variables
  this.start = function() {
    if (running)
      throw new Error('Stopwatch is already running');
    running = true;
    startTime = new Date();
  };
  this.stop = function() {
    if (!running)
      throw new Error('Stopwatch has not been started');
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime())/1000;
    duration += seconds;
  };
  Object.defineProperty(this, 'duration', {
    get : function() { return duration; }
  });
}
module.exports = Stopwatch;