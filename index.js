document.querySelector('button').addEventListener('click', function(){
    let randomNumber1 = Math.floor(Math.random() * 6 + 1)
    let randomNumber2 = Math.floor(Math.random() * 6 + 1)
    

    let tittle = document.querySelector("h1")
    if (randomNumber1 === randomNumber2){
        tittle.innerHTML = "Empate 😔"
    } else if (randomNumber1 > randomNumber2){
        tittle.innerHTML = "Jogador 1 ganhou 🎉"
    } else {
        tittle.innerHTML = "Jogador 2 ganhou 🎉"
    }
    

    //faz a alteração da imagem de acordo com o numero pseudo aleatorio que é gerado
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")
    
})