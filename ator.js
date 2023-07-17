//código do ator

let yAtor = 366;
let xAtor = 90;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(moverParaBaixo()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i = i+ 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    
    if(colisao){
      posicaoInicial();
      somDaColisao.play();
      if(pontosMaiorZero()){
        meusPontos -= 1;
      }
    }
  }
}

function posicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color (255,240,60));
  text(meusPontos, width / 5, 28);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    posicaoInicial();
  }
}

function pontosMaiorZero(){
  return meusPontos > 0;
}

function moverParaBaixo(){
  return yAtor < 366;
}

