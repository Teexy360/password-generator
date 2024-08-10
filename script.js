
/*WHEN ACTIVATING THIS FUNCTION YOU COPY THE 
CURRENT GENERATED PASSWORD*/

function copy(){
  let copyVerified = document.querySelector('.copy-verified')
  copyVerified.style.display = 'block'

  let copy = document.querySelector('.copy')
  copy.style.display = 'none'

  setTimeout(() => {
  copyVerified.style.display = 'none'

  copy.style.display = 'block'
  }, 2500);

  let copyText = document.getElementById('copyP').textContent
  navigator.clipboard.writeText(copyText)
  
}

/*WHEN YOU MOVE THE INPUT RANGE IT WILL UPDATE
 AND DISPLAY THE INPUT VALUE*/

let rangeInput = document.getElementById('rangeInput')
let displayValue = document.getElementById('displayValue')

rangeInput.addEventListener("input", function() {

  let valor = rangeInput.value 

  displayValue.innerHTML = 'Tamanho: ' + valor
})

/*WHEN THIS FORMATIVE FUNCTION IS USED IT WILL GENERATE A RANDOM PASSWORD
 BUT FIRST IT WILL CHECK WHICH CHECK BOXES WERE SELECTED AND BASED ON THE 
 INFORMATION IT WILL GENERATE A SPECIFIC PASSWORD*/

function passwordRandom(){

  let maiusculo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let minusculo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let especiais = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  let capital = document.getElementById('capital')
  let capitalCheck = capital.checked

  let number = document.getElementById('number')
  let numberCheck = number.checked

  let symbol = document.getElementById('symbol')
  let symbolCheck = symbol.checked

  if(capitalCheck == false){
    maiusculo = ''
  }

  if(numberCheck == false){
    numeros = ''
  }

  if(symbolCheck == false){
    especiais = ''
  }

  let passwordR = [...maiusculo, ...minusculo, ...numeros, ...especiais]

  let rangeInput = document.getElementById('rangeInput')
  let valor = rangeInput.value


  let passwordRandom = ''
  
  for(let i = 0;i < valor ;i++){
    let random = parseInt(Math.random() * passwordR.length)
    passwordRandom += passwordR[random]
  }
  
  document.getElementById('copyP').innerHTML = passwordRandom

  /*SYSTEM THAT CHECKS WHICH CHECK BOXS WERE ACTIVE AND BASED ON THE 
  LENGTH OF THE PASSWORD AND THE SELECTED CHARACTERS IT DEFINE THE SECURITY 
  LEVEL OF THAT PASSWORD*/

  let securityColor = 0

  if(valor >= 16){
    securityColor += 25
  }

  if(capitalCheck === true){
    securityColor += 25
  }

  if(numberCheck === true){
    securityColor += 25
  }

  if(symbolCheck === true){
    securityColor += 25
  }

  let red = document.querySelector('.color')
  red.style.width = securityColor + '%'
  red.style.backgroundColor = '#217e17'

}