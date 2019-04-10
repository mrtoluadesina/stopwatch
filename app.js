const Stopwatch = () => {
  let startTime, endTime, running, duration = 0; // declare variables
  this.start = () => {
    
  }
  Object.defineProperty(this, 'duration', {
    get : () => { return duration; }
  });
}
module.exports = app