var shell = require('shelljs');

main();

function main() {
  console.log("Generating gitbook");
  shell.exec("gitbook build txt gh-pages");
}
