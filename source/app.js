
const wordsListL1R1 = ['peace', 'love', 'thanks', 'drive', 'hope', 'truth', 'life', 'soon', 'given', 'gene', 'taken', 'grace'];
const wordsListL1R2 = ['driven', 'justice', 'endure', 'example', 'apology', 'express', 'spoonful', 'directly', 'routing', 'founder', 'academy', 'sponsor' ];
const wordsListL1R3 = ['understand', 'equation', 'equality', 'freedom', 'society', 'listening', 'attention', 'excellent', 'panorama', 'coordination', 'beautiful', 'greatfulness'];

const mathsListL1R1 = ['2+8=?', '9-?=3', '?+11=20'];

let wordGameTitleButton = document.getElementById('wordsListTitle');
let givenWordsDisplayArea = document.getElementById('wordsLevel1');

let mathGameTitleButton = document.getElementById('mathsListTitle');
let givenMathsDisplayArea = document.getElementById('mathsLevel1');

//const wordDisplay = document.querySelector('#wordsDisplayDiv');

let sec = 59;
let min = 0;
let wordsTmr;
let mathsTmr;

//Start of Word Game
wordGameTitleButton.onclick = function () {
      for (let i=0;  i<wordsListL1R1.length; i++) {
        console.log(wordsListL1R1.length);

          //givenWordsDisplayArea.innerHTML = Math.floor(Math.random() * (i));
          givenWordsDisplayArea.innerHTML = wordsListL1R1[i];
        console.log(i);
 }
        wordsAndTimer();
}

 function wordsAndTimer() {
 wordsDisplayDiv.style.display='block';
 mathGameTitleButton.style.display='none';
 document.getElementById('wordsTimer').innerHTML='Timer: 00:'+'0'+min+':'+sec+' left';
  sec=sec-1;
 wordsTmr=setTimeout('wordsAndTimer()', 1000);
  if (sec < 1) {
    timerStop();
  }
}

function timerStop () {
  clearTimeout(wordsTmr);
  document.getElementById('wordsTimer').innerHTML='The Time Is Up';
}



//Start of Math Game
mathGameTitleButton.onclick = function () {
      for (let math of mathsListL1R1) {
        console.log(mathsListL1R1.length);

       givenMathsDisplayArea.innerHTML = math;
        console.log(math);
 }
        mathsAndTimer();
}

 function mathsAndTimer() {
 mathsDisplayDiv.style.display='block';
 wordGameTitleButton.style.display='none';
 document.getElementById('mathsTimer').innerHTML='Timer: 00:'+'0'+min+':'+sec+' left';
  sec=sec-1;
 mathsTmr=setTimeout('mathsAndTimer()', 1000);
  if (sec < 1) {
    mathTimerStop();
  }
}

function mathTimerStop () {
  clearTimeout(mathsTmr);
  document.getElementById('mathsTimer').innerHTML='The Time Is Up';
}
