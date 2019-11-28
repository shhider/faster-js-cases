var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

function runIFs(val) {
  let res = 0
  if (val === 1) {
    res = 1
  } else if (val === 2) {
    res = 2
  } else if (val === 3) {
    res = 3
  } else if (val === 4) {
    res = 4
  } else if (val === 5) {
    res = 5
  } else if (val === 6) {
    res = 6
  } else if (val === 7) {
    res = 7
  } else if (val === 8) {
    res = 8
  } else if (val === 9) {
    res = 9
  } else if (val === 10) {
    res = 10
  }
  return res
}

function runSwitch(val) {
  let res = 0
  switch (val) {
    case 1:
      res = 1
      break;
    case 2:
      res = 2
      break;
    case 3:
      res = 3
      break;
    case 4:
      res = 4
      break;
    case 5:
      res = 5
      break;
    case 6:
      res = 6
      break;
    case 7:
      res = 7
      break;
    case 8:
      res = 8
      break;
    case 9:
      res = 9
      break;
    case 10:
      res = 10
      break;
  }
  return res
}

// add tests
suite.add('IFs', function() {
  runIFs(Math.floor(Math.random() * 10))
})
.add('Switch', function() {
  runSwitch(Math.floor(Math.random() * 10))
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
