// Import necessary libraries.
var cheerio = require('cheerio')
var request = require('request');


var minutes = 0.05, the_interval = minutes * 60 * 1000;

function main() {
  var test = cheerio.load("<p>Hi</p>");
  console.log(test.text());
}

/*request('https://umshuttles.com/simple/routes/4259/stops/21792', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage.


  }
})*/

var body = '<ul><li class="arrow"><a href="/simple/routes/4259/stops">Back to Stop List</a></li></ul><h3>Arrival Times</h3><ul><li>Bus 12907 arrives in 1 minutes at 10:18 PM.</li><li>Bus 12907 arrives in 15 minutes at 10:32 PM. </li></ul>';

var $ = cheerio.load(body);
//console.log();

$('li').each(function(i, elm) {
  console.log($(this).text()) // for testing do text()
});

//setInterval(main, the_interval);
