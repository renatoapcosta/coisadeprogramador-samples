var fs = require('fs');
var colors = require('colors');
var BibleSearch = require('bible-search');

fs.readFile('./ASCII.txt', 'utf8', function(err, template){
  if(err)
    throw err;
    
  var bibleApi = new BibleSearch('<<SUA API KEY AQUI :)>>');
  
  bibleApi.passage.getPassage({
    book: 'rev',
    chapter: 21,
    start: 4
  }).then(function (data) {
    //JSON Structure see: https://pt-br.bibles.org/pages/api/documentation/passages
    var noHTML = /(<([^>]+)>)/ig;
    var word = data.response.search.result.passages[0].text.replace(noHTML, ' ').trim();
    
    var text = template.replace('{{word}}', word);
    
    console.log(colors.yellow(text));
    
  }).catch(function (err) {
    console.log(colors.red('Ops! Sorry :|'));
    console.log(colors.red(err));
  });
})

