'use strict';

var path = require('path');
var fs = require('fs-extra');
var shell = require('shelljs');

function deploy(package_path) {
  var obj = JSON.parse(fs.readFileSync(package_path, 'utf8'));
  console.log("Generating wiki");
  fs.removeSync ('wiki/.git');
  shell.cd("wiki/");
  shell.exec("git init .");
  shell.exec("git add .");
  shell.exec("git commit -m \"Deploying to wiki\"");
  shell.exec("git remote add origin " + obj.repository.wiki);
  shell.exec("git push origin master --force");
}

module.exports = deploy
