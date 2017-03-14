'use strict';

var path = require('path');
var fs = require('fs-extra');
var shell = require('shelljs');
var obj = JSON.parse(fs.readFileSync('package.json', 'utf8'));

main();

function main() {
  console.log("Generating wiki");
  fs.removeSync ('wiki/.git');
  shell.cd("wiki/");
  shell.exec("git init .");
  shell.exec("git add .");
  shell.exec("git commit -m \"Deploying to wiki\"");
  shell.exec("git remote add origin " + obj.repository.wiki);
  shell.exec("git push origin master --force");
}
