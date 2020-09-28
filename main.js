// Have a "new game" screen with a single choice "new game"
// The game should have a total of 9 pairs (18 cards total)
// When the user runs out of turns, show a losing screen
// When the user finds a match, leave the cards face up and disallow clicking those cards
// When the user chooses two cards that do not match, flip them back over
// When the user wins or loses, indicate as such
// All screens should be generated via JavaScript templates

//  R A N D O M I Z I N G (Set them in place first)
//random placement of the 9 pairs let randomIndex = index[math.floor(Math.random() * 18)]
// card[randomIndex]   will determin random spot in the grid

//  L A Y O U T
//18 cards, 9 pairs.
//spread them out in the grid.
//DONE

// F L I P   A N I M A T I O N
//Done
//flip ONLY TWO CARDS = done

// F U N C T I O N A L I T Y
//if(oneCardValue === otherCardValue) keep them visible
//

let turn = 0;

function myFunction(a) {
  // setInterval(timer => )  T I M E R
  turn +=1
  if((turn < 3) === true) {
     document.querySelector(a).classList.add("isFlipped")
     console.log(`Card ${turn} flipped`)
  }  
  // if(oneCard !== otherCard) {  I F  C A R D S  D O N' T   M A T C H   F L I P  O V E R
  //   turn = 0                    S T A R T    T U R N   O V E R
  //   setInterval(function(){ document.querySelector(a).classList.remove("isFlipped"); }, 3000);
  // }
}


//<div class="card__face card__face--back"><h1>Sup!</h1></div>

document.querySelector('.one').insertAdjacentHTML("beforeend", "<p>hello</p>");

// document.querySelector(".one").textContent === document.querySelector(".two").textContent ;
const sup = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>Sup!</h1></div>'
const sup2 = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>Sup!</h1></div>'
const happyFace = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>:)</h1></div>'
const happyFace2 = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>:)</h1></div>'
const confusedFace = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>o_O</h1></div>'
const confusedFace2 = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>o_O</h1></div>'
const yo = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>Yo!</h1></div>'
const yo2 = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>Yo!</h1></div>'
const winkyFace ='<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>;)</h1></div>'
const winkyFace2 = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>;)</h1></div>'
const toungeOut = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>:P</h1></div>'
const toungeOut2 = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>:P</h1></div>'
const surprisedFace = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>:O</h1></div>'
const surprisedFace2 = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>:O</h1></div>'
const seriousFace = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>-_-</h1></div>'
const seriousFace2 = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>-_-</h1></div>'
const hello = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>hello!</h1></div>'
const hello2 = '<div class="card__face card__face--front"><h1>?</h1></div><div class="card__face card__face--back"><h1>hello!</h1></div>'


let array = [sup, sup2, happyFace, happyFace2, confusedFace, confusedFace2, yo, yo2, winkyFace, winkyFace2, toungeOut, toungeOut2, surprisedFace, surprisedFace2, seriousFace, seriousFace2, hello, hello2]
console.log(array)
function shuffleArray(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = arr[i]
    console.log(temp)
    arr[i] = arr[j]
    console.log(arr[i])
    arr[j] = temp
    console.log(arr[j])
  }
}
shuffleArray(array)
