const userInput = document.getElementById('userInput')
let input = ''

function press(num) {
  input += num
  userInput.value = input
}

function erase() {
  input = ''
  userInput.value = input
}

function equal() {
  userInput.value = eval(input)
  input = ''
}
