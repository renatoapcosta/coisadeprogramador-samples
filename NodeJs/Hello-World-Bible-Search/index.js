var colors = require('colors');
var BibleSearch = require('bible-search');
var bibleApi = new BibleSearch('<<SUA API AKI :)>>');

bibleApi.passage.getPassage({
  book: 'rev',
  chapter: 21,
  start: 4
}).then(function (data) {
  //JSON Structure see: https://pt-br.bibles.org/pages/api/documentation/passages
  var noHTML = /(<([^>]+)>)/ig;
  var text = data.response.search.result.passages[0].text.replace(noHTML, '');
  
  console.log(colors.yellow(text)); 
}).catch(function (err) {
  console.log(colors.red('Ops! Sorry :|'));
});