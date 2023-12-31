//código das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

//código do som
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor    = loadImage("imagens/ator-1.png");
  imagemCarro     = loadImage("imagens/carro-1.png");
  imagemCarro2    = loadImage("imagens/carro-2.png");
  imagemCarro3    = loadImage("imagens/carro-3.png");
  imagemCarro4    = loadImage("imagens/carro-1.png");
  imagemCarro5    = loadImage("imagens/carro-2.png");
  imagemCarro6    = loadImage("imagens/carro-3.png");
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]
  
  
  somDaTrilha  = loadSound("Sons/trilha.mp3");
  somDaColisao = loadSound("Sons/colidiu.mp3");
  somDoPonto   = loadSound("Sons/pontos.wav");
}