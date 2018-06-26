/*
 * Create a list that holds all of your cards
 */
var cards = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6",
    "card7",
    "card8",
    "card9",
    "card10",
    "card11",
    "card12",
    "card13",
    "card14",
    "card15",
    "card16"
];

var classes = [
    "fa fa-paper-plane-o",
    "fa fa-paper-plane-o",
    "fa fa-anchor",
    "fa fa-anchor",
    "fa fa-bolt",
    "fa fa-bolt",
    "fa fa-cube",
    "fa fa-cube",
    "fa fa-leaf",
    "fa fa-leaf",
    "fa fa-diamond",
    "fa fa-diamond",
    "fa fa-bomb",
    "fa fa-bomb",
    "fa fa-bicycle",
    "fa fa-bicycle"
]

 // Display the cards on the page
 //   - shuffle the list of cards using the provided "shuffle" method below
    shuffle(cards);
    shuffle(classes);
 //   - loop through each card and create its HTML
    for (i = 0 ; i < cards.length ; i++){

        //create element li
        var li = document.createElement('li');
        var t = document.createTextNode("");
        li.appendChild(t);
        document.getElementsByClassName("deck")[0].appendChild(li);
        li.setAttribute('class', 'card');
        li.setAttribute('id', 'card');
        li.setAttribute('onclick','turnCard()');

        // create element i
        var ei = document.createElement('i');
        var et = document.createTextNode("");
        ei.append(et);
        document.getElementsByClassName("card")[i].appendChild(ei);
        ei.setAttribute('class', classes[i]);


    }
    
 //   - add each card's HTML to the page


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

function turnCard(){
    let cardin = document.getElementsByClassName("card")[0];
    //let cardin2 = carcin.document.getElementsByClassName("card")[0]
    cardin.setAttribute('class', 'card open show');

    console.log(cardin)
;}