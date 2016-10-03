(function(){
  "use strict";

  var turns = 0;

  var userInterface = document.getElementById('userInterface');

  function randomWord(commonWords){
      var randomIndex = commonWords[Math.floor(Math.random()*commonWords.length)];
      return randomIndex;
    }

  var word = commonWords.filter(function(words){
      return words.length>2;
    });

  var guessThisWord = randomWord(word);

  var wordCover = new Array(guessThisWord.length);

  for (var i = 0; i < wordCover.length; i++){
    wordCover[i] = "_ ";
  }


  console.log(guessThisWord);
  console.log(wordCover);

  function printGuessWord(){
    for (var i = 0; i < wordCover.length; i++){
      var guessThis = document.getElementById("guessThis");
      var holder = document.createTextNode(wordCover[i]);
      guessThis.appendChild(holder);
    }
  }

  var checkGuess = function(){
    //var f = document.userInterface;
    //var userInterface = elements["userInput"];
    var guess = document.getElementById('userInput');
    for (var i = 0; i < guessThisWord.length; i++){
      if (guessThisWord === guess){
        wordCover[i] = guess + " ";
        var truth = true;
      }
      guess.value = "";
    }
  }

  document.getElementById("userGuess").addEventListener("click", checkGuess);

  var guessThis = document.getElementById("guessThis");
  guessThis.innerHTML = "";
  printGuessWord();

  var finished = false;
  for (var i = 0; i < wordCover; i++){
    if(wordCover[i] === "_ "){
      finished = true;
    }
  }
  if(finished){
    window.alert("You Win!");
  }

  if (turns === 6){
    window.alert("You have been hung!");
  }


}());
