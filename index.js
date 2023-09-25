var randomNumber1 = Math.floor(Math.random() * 6 + 1)
var randomNumber2 = Math.floor(Math.random() * 6 + 1)

var dice1 = document.querySelector(".img1")
var dice2 = document.querySelector(".img2")

var tittle = document.querySelector("h1")
if (randomNumber1 === randomNumber2){
    tittle.innerHTML = "Empate 😔"
} else if (randomNumber1 > randomNumber2){
    tittle.innerHTML = "Jogador 1 ganhou 🎉"
} else {
    tittle.innerHTML = "Jogador 2 ganhou 🎉"
}



//faz a alteração da imagem de acordo com o numero pseudo aleatorio que é gerado
dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png")
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png")