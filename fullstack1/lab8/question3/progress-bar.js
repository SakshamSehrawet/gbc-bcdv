var ProgressBar = require('progress');
var chalk = require('chalk');

var bar = new ProgressBar('  Downloading [:bar] :percent :etas', {
  complete: chalk.bgGreen('='),
  incomplete: chalk.red('>'),
  width: 20,
  total: 100
});
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log(chalk.green('Download --> completed'));
    clearInterval(timer);
  }
}, 500);

var startProgress = function() {
    console.log(chalk.green('Download --> started'));
    timer;
}

module.exports = {startProgress}