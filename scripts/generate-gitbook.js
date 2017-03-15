'use strict';

var shell = require('shelljs');

function generate (input, output) {
  console.log("Generating gitbook");
  shell.exec("gitbook build " + input + " " + output);
}

module.exports = generate;
