(function(){
  "use strict";

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

  // function printGuessDisplay(){
  //   for (var i = 0; i < word.length; i++){
  //     var cover = document.createTextNode(guessDisplay[i]);
  //     textBox.appendChild(cover);
  //   }
  // }

  // for (var i = 0; i < word.length; i++){
  //   word[i] = "_ ";
  // }

  textBox.innerHTML = randomWord(word).split(' ');

  var checkUserInput = function(){
    var a = document.userinput;
    var b = a.elements["userguess"];
    var character = b.value;
      for (var i = 0; i < word.length; i++){
        if (word[i] === character){
          word[i] = character + " ";
          var check = true;
        }
        b.value = "";
      }
  }

 document.getElementById("userguess").addEventListener("click", letterInputFunction);
  function letterInputFunction() {
     var letterInput = [];
     letterInput.push(document.getElementsByName("userguess")[0].value);
     console.log(letterInput);
  }

  //console.log(checkUserInput);

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


}());
