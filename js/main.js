(function(){
  "use strict";

  window.onload = function() {

  var turns = 10;
  var guess;
  var guesses = [];

  var lives = document.getElementById('lives');
  var textBox = document.getElementById('text-box');

  function randomWord(commonWords){
    var randomIndex = commonWords[Math.floor(Math.random()*commonWords.length)];
    return randomIndex;
  }

  var word = commonWords.filter(function(words){
    return words.length>2;
  });

  var guessDisplay = new Array(word.length);

  for (var i = 0; i < guessDisplay.length; i++){
    guessDisplay[i] = "_ ";
  }

  function printGuessDisplay(){
    for (var i = 0; i < word.length; i++){
      var cover = document.createTextNode(guessDisplay[i]);
      textBox.appendChild(cover);
    }
  }

  textBox.innerHTML = randomWord(word).split('');

  function lifeBar(){
    lives.innerHTML = "You have " + turns + " turns remaining.";
    if (lives < 1){
      lives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++){
      if (pickedWord === guesses.length){
        lives.innerHTML = "You Win!";
      }
    }
  }

  }
}());
