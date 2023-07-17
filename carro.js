//código do carro

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 204, 260, 315];
let velocidadeCarros = [4, 3.5, 3.9, 5, 4.5, 3.9]
let comprimentoCarro = 50;
let alturaCarro = 40;
  
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}
