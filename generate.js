const readline = require('readline-sync');
const commandLineArguments = process.argv.slice(2);
if (commandLineArguments.length == 1) {
  var inputURL = commandLineArguments[0];
} else if (commandLineArguments.length == 0) {
  console.log("Can't read command-line arguments...")
  var inputURL = readline.question("Enter input URL: ")
} else {
  console.log("Error: Too many command-line arguments...")
  process.exit()
}
encodedURL = encodeURI(inputURL);
outputURL = ("https://l.facebook.com/l.php?u=" + encodedURL)
console.log(outputURL)
