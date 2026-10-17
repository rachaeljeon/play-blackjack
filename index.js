let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let gameEl = document.getElementById("game-el")
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false

function getRandomCard() {

    let number = Math.floor( Math.random() * 13) + 1

    if (number > 10 ) {
        return 10
    } else if (number === 1) {
        return 11
    } else {
        return number
    }
}

function start() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    // initialize 'cards'
    cards = [firstCard, secondCard]
    // initialize 'sum'
    sum = firstCard + secondCard
    
    renderGame()
}

function renderGame() {
    
    // display all played cards to user
    cardsEl.textContent = "Cards: "
    for (i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // display current sum to the user
    sumEl.textContent = "Sum: " + sum

    // calculate: blackjack
    if (sum > 21) {
        gameEl.textContent = "You're out of the game! 😭"
        isAlive = false
    } else if (sum === 21) {
        gameEl.textContent = "You've got a blackjack! 🥹"
        // Tells the code the user hit the blackjack by keeping a state
        hasBlackJack = true

    } else {
        gameEl.textContent = "You're still safe! Would you like to draw another card? 👀"
    }

    
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        // update cards collection
        cards.push(newCard)

        // update sum calculation
        sum += newCard

        renderGame()
    }
}


