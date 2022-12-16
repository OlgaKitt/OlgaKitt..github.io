const cardArray = [
    {
        name:   'venus',
        img:    'images/venus.png'
    },
    {
        name:   'jupiter',
        img:    'images/jupiter.png'
    },
    {
        name:   'earth',
        img:    'images/earth.png'
    },
    {
        name:   'mars',
        img:    'images/mars.png'
    },
    {
        name:   'neptune',
        img:    'images/neptune.png'
    },
    {
        name:   'uranus',
        img:    'images/uranus.png'
    },
    {
        name:   'saturn',
        img:    'images/saturn.png'
    },
    {
        name:   'mercury',
        img:    'images/mercury.png'
    },
    {
        name:   'venus',
        img:    'images/venus.png'
    },
    {
        name:   'jupiter',
        img:    'images/jupiter.png'
    },
    {
        name:   'earth',
        img:    'images/earth.png'
    },
    {
        name:   'mars',
        img:    'images/mars.png'
    },
    {
        name:   'neptune',
        img:    'images/neptune.png'
    },
    {
        name:   'uranus',
        img:    'images/uranus.png'
    },
    {
        name:   'saturn',
        img:    'images/saturn.png'
    },
    {
        name:   'mercury',
        img:    'images/mercury.png'
    }
]
let cardsChosen = [];
let cardsChosenIds = [];
let message = [];
const cardsWon = [];


cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const messageTxtDisplay = document.querySelector('#messageTxt');
const scopeDisplay = document.querySelector('#scope');
const popupMatch = document.querySelector('#popup');

function startGame() {
    const btnStart = document.querySelector('#btnStart');
 
    btnStart.onclick = function() {
       createBoard();
       this.classList.add('none');
   
    }
    
}

function createBoard() {
    gridDisplay.classList.remove('none');
    gridDisplay.classList.add('background');

    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);        
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cards[cardsChosenIds[0]];
    const optionTwoId = cards[cardsChosenIds[1]];
    
    if (cardsChosen[0] == cardsChosen[1]) {
      optionOneId.setAttribute('src', 'images/done.png');
      optionTwoId.setAttribute('src', 'images/done.png');

      showPopup("You found match!", "images/smile.png", "success");

      optionOneId.removeEventListener('click', flipCard);
      optionTwoId.removeEventListener('click', flipCard);
    
      cardsWon.push(cardsChosen);
    } else {
   
      optionOneId.setAttribute('src', 'images/blank.png');
      optionTwoId.setAttribute('src', 'images/blank.png');
  
      showPopup("Sorry, try again", "images/sad.png", "error");
    
    }
    resultDisplay.innerHTML =  cardsWon.length;

    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsWon.length == cardArray.length / 2) {
        messageTxtDisplay.innerHTML = 'Congratulations! You found them all!';
        setTimeout(function () { location.reload() }, 5000)
    }
}

function flipCard() {
   
    const cardId = this.getAttribute('data-id');
   
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout (checkMatch, 500);
        popupMatch.style.visibility = "hidden"
    }
    
}

function showPopup(text, imgUrl, classResult) {
    popupMatch.style.visibility = "visible";
    let image = document.createElement('img');
    let div = document.createElement('div');
    
    div.className = "message " + classResult;
    div.innerHTML = text;
    image.className = "img-message";
    image.setAttribute('src', imgUrl);
    
    popupMatch.append(image);
    popupMatch.append(div);
    
    
    setTimeout(function () { popupMatch.style.visibility = "hidden" , popupMatch.removeChild(div), popupMatch.removeChild(image)}, 1000);
  }

startGame();