// Implementar solución aquí

function printBody(){

  let printColour = generateHexColour();
  let bodyColour;
  let nameColour;

  bodyColour = document.querySelector("body").style.backgroundColor = printColour;
  nameColour = document.querySelector("#hex-value").textContent = printColour;

  console.log(`El que genera la función: ${printColour}, el que pinta en el body ${bodyColour}, el que escribe en el span: ${nameColour}`);

}

function generateHexColour(){

  let totalHexChar = "0123456789ABCDEF";
  let randomHexColour = "#";
  
  for(let i = 0; i < 6; i++){
  
    randomHexColour += totalHexChar.charAt(Math.floor(Math.random() * totalHexChar.length));
  
  }
  
  return randomHexColour;
}