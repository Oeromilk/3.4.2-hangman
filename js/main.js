(function(){
  "use strict";

  var turn = 8;

  var userInterface = document.getElementById('userInterface');
  var guessThis = document.getElementById("guessThis");
  var guess = document.getElementById('userInput');
  var turns = document.getElementById('turnsBox');

  turns.textContent = turn;

  function randomWord(commonWords){
      var randomIndex = commonWords[Math.floor(Math.random()*commonWords.length)];
      return randomIndex;
    }

  var word = commonWords.filter(function(words){
      return words.length>2;
    });

  var guessThisWord = randomWord(word).split('');

  var wordCover = new Array(guessThisWord.length);

  for (var i = 0; i < wordCover.length; i++){
    wordCover[i] = "_ ";
  }

  console.log(guessThisWord);
  console.log(wordCover);

  function printGuessWord(){
    for (var i = 0; i < wordCover.length; i++){
      var holder = document.createTextNode(wordCover[i]);
      guessThis.appendChild(holder);
    }
  }
  function clearInput(){
    guess.value = "";
  }

  var checkGuess = function(){
    for (var i = 0; i < guessThisWord.length; i++){
      if (guessThisWord[i] === guess.value){
        wordCover[i] = guess.value;
        guessThis.textContent = '';
        //clearInput();
        printGuessWord();
        console.log(guess.value);
        console.log(wordCover);
        var truth = true;
      }
    }
    if(guessThisWord.indexOf(guess.value) == -1){
      console.log(turn);
      turn -= 1;
      turns.textContent = turn;

    }
    if (turn === 0){
      window.alert("You have been hung!");
    }

    if(document.getElementById('guessThis').textContent == guessThisWord.join('')){
      // finished = true;
      alert('you win!');
    }

      // console.log(document.getElementById('guessThis').textContent);
      // console.log(guessThisWord.join(''));
  }

  document.getElementById("userGuess").addEventListener("click", checkGuess);
  guess.addEventListener("click", clearInput);

  var guessThis = document.getElementById("guessThis");
  guessThis.innerHTML = "";
  printGuessWord();

  // var finished;
  // for (var i = 0; i < wordCover; i++){
  //   if(document.getElementBy('guessThis').textContent === wordCover){
  //     // finished = true;
  //     alert('you win!')
  //   }
  // }
  // if(finished){
  //   window.alert("You Win!");
  // }




}());
