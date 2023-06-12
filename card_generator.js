const cardSymbols = ['♠', '♥', '♦', '♣']
const cardClasses = ['spade', 'heart', 'diamond', 'club']
const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']


const firstElement = document.getElementById('firstSymbol')
const secondElement = document.getElementById('secondSymbol')
const cardNumber = document.getElementById('cardNumber')
const sizeEditor = document.getElementById('sizeEditor')
const heightInput = document.getElementById('heightInput')
const widthInput = document.getElementById('widthInput')
const card = document.getElementById('card')

function generateRandomSymbol() {    
    const randomSymbolIndex = Math.floor(Math.random() * 3 + 1)
    firstElement.innerText = cardSymbols[randomSymbolIndex]
    secondElement.innerText = cardSymbols[randomSymbolIndex]
    firstElement.className = cardClasses[randomSymbolIndex]
    secondElement.className = cardClasses[randomSymbolIndex]
    if(randomSymbolIndex == 1 || randomSymbolIndex == 2){
        cardNumber.style.color = 'red'
    } else {
        cardNumber.style.color = 'black'
    }
    
}

function generateRandomNumber(){
    const randomNumberIndex = Math.floor(Math.random() * 12 + 1)
    cardNumber.innerText = cardNumbers[randomNumberIndex]
}

function renderRandomCard () {
    generateRandomSymbol()
    generateRandomNumber()
}

function changeCardSize(){
    if(parseInt(heightInput.value) > 0 && parseInt(widthInput.value) > 0){
        card.style.height = `${heightInput.value}px`
        card.style.width = `${widthInput.value}px`
    } else {
        alert('You need to insert numbers greater than 0')
    }
}

function cleanHeightInput(){
    heightInput.value = null
}

function cleanWidhtInput() {
    widthInput.value = null
}

setInterval(renderRandomCard, 3000)