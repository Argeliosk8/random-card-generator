const cardSymbols = ['♠', '♥', '♦', '♣']
const cardClasses = ['spade', 'heart', 'diamond', 'club']
const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']


function generateRandomSymbol() {
    const randomSymbolIndex = Math.floor(Math.random() * 3 + 1)
    const firstElement = document.getElementById('firstSymbol')
    const secondElement = document.getElementById('secondSymbol')
    firstElement.innerText = cardSymbols[randomSymbolIndex]
    secondElement.innerText = cardSymbols[randomSymbolIndex]
    firstElement.className = cardClasses[randomSymbolIndex]
    secondElement.className = cardClasses[randomSymbolIndex]
}

function generateRandomNumber(){
    const randomNumberIndex = Math.floor(Math.random() * 12 + 1)
    const cardNumber = document.getElementById('cardNumber')
    cardNumber.innerText = cardNumbers[randomNumberIndex]
}

function renderRandomCard () {
    generateRandomSymbol()
    generateRandomNumber()
}

setInterval(renderRandomCard, 3000)