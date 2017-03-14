var ghpages = require('gh-pages');
var fs = require('fs-extra');
var path = require('path');

var repository = JSON.parse(fs.readFileSync('package.json', 'utf8')).repository.url;

main();

function main() {
  console.log("Deploy GitBook on Github");

  ghpages.publish('gh-pages', {
      repo: repository,
      message: 'Auto update gh-pages branch'
  }, function(err) {});
}
