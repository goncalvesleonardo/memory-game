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

var cards2 = [{
    classe: "fa fa-paper-plane-o",

}]

 // Display the cards on the page
 //   - shuffle the list of cards using the provided "shuffle" method below
    shuffle(cards);
    shuffle(classes);
 //   - loop through each card and create its HTML
 //   - add each card's HTML to the page
    for (i = 0 ; i < cards.length ; i++){

        //create element li
        let li = document.createElement('li');
        let t = document.createTextNode("");
        li.appendChild(t);
        document.getElementsByClassName("deck")[0].appendChild(li);
        li.setAttribute('class', 'card');
        //li.setAttribute('id', 'card');        
        li.addEventListener('click', turnCard.bind(null, i));

        // create element i
        var ei = document.createElement('i');
        var et = document.createTextNode("");
        ei.append(et);
        document.getElementsByClassName("card")[i].appendChild(ei);
        ei.setAttribute('class', classes[i]);
        ei.setAttribute('id', classes[i]);
    }

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
 * Configure o ouvinte de eventos para um cartão. Se um cartão for clicado:
 * - exibe o símbolo do cartão (coloque esta funcionalidade em outra função que você chama deste)
 * - adicione o cartão a uma * lista * de cartões "abertos" (coloque esta funcionalidade em outra função que você chama desta)
 * - se a lista já tiver outro cartão, verifique se os dois cartões correspondem
 * + se as cartas coincidirem, bloqueie as cartas na posição aberta (coloque esta funcionalidade em outra função que você chama desta)
 * + se os cartões não coincidirem, remova os cartões da lista e oculte o símbolo do cartão (coloque esta funcionalidade em outra função
     que você chama deste)
 * + incrementa o contador de movimentos e exibe-o na página (coloca esta funcionalidade em outra função que você chama desta)
 * + se todos os cartões tiverem correspondido, exibir uma mensagem com a pontuação final (colocar essa funcionalidade em outra função que
     você chama a partir desta)
 */

    var card1 = {
        classe: '',
        index: ''
    };

    var card2 = {
        classe: '',
        index: ''
    };

    var cardClass = '';

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
    }

    function turnCard(i){
        var cardIn = document.getElementsByClassName("card")[i];
        cardIn.setAttribute('class', 'card open show');

        console.log(cardIn);

        cardClass = document.getElementById(classes[i]).className;

        if (card1.classe !== '')
        {
            card2.classe = cardClass;
            card2.index = i;

            console.log("card 2- if  - " + card2.index);


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
            }
            else
            {                

                console.log(i);
                console.log(card1.index);

                setTimeout(resetCard, 500);
            }         
        }
        else
        {
            card1.classe = cardClass;
            card1.index = i;

            console.log("card 1- else - " + card1.index);
        }          
    }