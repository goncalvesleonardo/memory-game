
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

var cards2 = [{
    classe: "fa fa-paper-plane-o",

}]

    shuffle(cards);
    shuffle(classes);

for (i = 0 ; i < cards.length ; i++){

    //create element li
    let li = document.createElement('li');
    let t = document.createTextNode("");
    li.appendChild(t);
    document.getElementsByClassName("deck")[0].appendChild(li);
    li.setAttribute('class', 'card');       
    li.addEventListener('click', turnCard.bind(null, i));

    // create element i
    var ei = document.createElement('i');
    var et = document.createTextNode("");
    ei.append(et);
    document.getElementsByClassName("card")[i].appendChild(ei);
    ei.setAttribute('class', classes[i]);
    ei.setAttribute('id', classes[i]);
}


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

var card1 = {
    classe: '',
    index: ''
};

var card2 = {
    classe: '',
    index: ''
};

var cardClass = '';

var countMatch = '';

var countMoves = '';

function resetCard() {
    document.getElementsByClassName("card")[card1.index].setAttribute('class', 'card');
    document.getElementsByClassName("card")[card2.index].setAttribute('class', 'card');

    card1 = {
        classe: '',
        index: ''
    };        
    card2 = {
        classe: '',
        index: ''
    };

    cardClass = '';

    countMoves++;

    document.getElementsByClassName("moves")[0].innerHTML = countMoves;
}

function turnCard(i){
    var cardIn = document.getElementsByClassName("card")[i];
    cardIn.setAttribute('class', 'card open show');

    cardClass = document.getElementById(classes[i]).className;

    if (card1.classe !== '')
    {
        card2.classe = cardClass;
        card2.index = i;        

        if (card1.classe === card2.classe)
        {
            card1 = {
                classe: '',
                index: ''
            };                
            card2 = {
                classe: '',
                index: ''
            };
            cardClass = '';

            countMatch++;

            countMoves++

            document.getElementsByClassName("moves")[0].innerHTML = countMoves;

            if (countMatch == 8)
            {
                alert("Fim de jogo");
            } 
        }
        else
        {                
            setTimeout(resetCard, 500);
        }         
    }
    else
    {
        card1.classe = cardClass;
        card1.index = i;
    }   
}