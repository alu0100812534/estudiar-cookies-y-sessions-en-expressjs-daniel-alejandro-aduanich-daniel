var ghpages = require('gh-pages');
var fs = require('fs-extra');
var path = require('path');

function deploy(package_path) {
  console.log("Deploy GitBook on Github");
  var repository = JSON.parse(fs.readFileSync(package_path, 'utf8')).repository.url;

  ghpages.publish('gh-pages', {
      repo: repository,
      message: 'Auto update gh-pages branch'
  }, function(err) {});
}

module.exports = deploy
