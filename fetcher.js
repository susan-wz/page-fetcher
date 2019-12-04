/* INSTRUCTIONS
Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.
*/

const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const filePath = process.argv[3];

const fetchPage = request(URL, (error, response, body) => {
  fs.appendFile(filePath, body, err => {
    if (err) throw err;
    console.log(`Downloaded and saved to ${filePath}`)
  })
});