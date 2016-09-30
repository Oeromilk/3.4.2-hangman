(function(){
  "use strict";

  function randomWord(commonWords){
  var randomIndex = commonWords[Math.floor(Math.random()*commonWords.length)];
  return randomIndex;
  }

  var word = commonWords.filter(function(words){
    return words.length>2;
  });

  console.log(randomWord(word));

}());
