// 0. Iniciar el Juego
alert ("Incia el Juego")
alert("Elige tu ataque")

// 1. Elijan sus ataques
let player = prompt ("Escribe 0 para piedra, 1 para papel y 2 para tijera")

if (player == 0) {
    alert("Elegiste piedra")
} else if (player == 1){
    alert ("Elegiste papel")
} else if (player == 2){
    alert("Elegiste tijera")
}

// 2. Elejir ataque del enemigo de manera aleatroia
let enemigo = Math.round(Math.random()*2)

if (enemigo == 0) {
    alert("El enemigo eligió piedra")
} else if (enemigo == 1){
    alert ("El enemigo eligió papel")
} else if (enemigo == 2){
    alert("El enemigo eligió tijera")
}

// 3. Mostrar el resultado

if(player == enemigo){
    alert ("Empate")
} else if (player == 0 && enemigo == 2){
    alert ("Ganaste")
} else if (player == 1 && enemigo == 0){
    alert ("Ganaste")
} else if (player == 2 && enemigo == 1){
    alert ("Ganaste")
} else {
    alert ("Perdiste")}  
