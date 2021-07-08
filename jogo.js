console.log("[Ṽ] Flappy bird");

const sprites = new Image();
sprites.src = "./sprites.png";

const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

const Background = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  xCanvas: 0,
  yCanvas: canvas.height - 204,
  desenha() {
    contexto.fillStyle = "#70c5ce";
    contexto.fillRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
      sprites,
      Background.spriteX,
      Background.spriteY,
      Background.largura,
      Background.altura,
      Background.xCanvas,
      Background.yCanvas,
      Background.largura,
      Background.altura
    );

    contexto.drawImage(
      sprites,
      Background.spriteX,
      Background.spriteY,
      Background.largura,
      Background.altura,
      Background.xCanvas + Background.largura,
      Background.yCanvas,
      Background.largura,
      Background.altura
    );
  },
};

const Chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  xCanvas: 0,
  yCanvas: canvas.height - 112,
  desenha() {
    contexto.drawImage(
      sprites,
      Chao.spriteX,
      Chao.spriteY,
      Chao.largura,
      Chao.altura,
      Chao.xCanvas,
      Chao.yCanvas,
      Chao.largura,
      Chao.altura
    );

    contexto.drawImage(
      sprites,
      Chao.spriteX,
      Chao.spriteY,
      Chao.largura,
      Chao.altura,
      Chao.xCanvas + Chao.largura,
      Chao.yCanvas,
      Chao.largura,
      Chao.altura
    );
  },
};

const FlappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  xCanvas: 10,
  yCanvas: 50,
  velocidade: 0,
  gravidade: 0.25,
  atualiza() {
    FlappyBird.velocidade = FlappyBird.velocidade + this.gravidade;
    FlappyBird.yCanvas = FlappyBird.yCanvas + FlappyBird.velocidade;
  },
  desenha() {
    contexto.drawImage(
      sprites,
      FlappyBird.spriteX,
      FlappyBird.spriteY,
      FlappyBird.largura,
      FlappyBird.altura,
      FlappyBird.xCanvas,
      FlappyBird.yCanvas,
      FlappyBird.largura,
      FlappyBird.altura
    );
  },
};

const MensagemIniciar = {
  spriteX: 134,
  spriteY: 0,
  largura: 174,
  altura: 152,
  xCanvas: canvas.width / 2 - 174 / 2,
  yCanvas: 50,
  desenha() {
    contexto.drawImage(
      sprites,
      MensagemIniciar.spriteX,
      MensagemIniciar.spriteY,
      MensagemIniciar.largura,
      MensagemIniciar.altura,
      MensagemIniciar.xCanvas,
      MensagemIniciar.yCanvas,
      MensagemIniciar.largura,
      MensagemIniciar.altura
    );
  },
};

let telaAtiva = {};
function mudaParaTela(novaTela) {
  telaAtiva = novaTela;
}

const Telas = {
  INICIO: {
    desenha() {
      Background.desenha();
      Chao.desenha();
      FlappyBird.desenha();
      MensagemIniciar.desenha();
    },
    click() {
      mudaParaTela(Telas.JOGO);
    },
    atualiza() {},
  },
  JOGO: {
    desenha() {
      Background.desenha();
      Chao.desenha();
      FlappyBird.desenha();
    },
    atualiza() {
      FlappyBird.atualiza();
    },
  },
};

function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();
  requestAnimationFrame(loop);
}

window.addEventListener("click", () => {
  if (telaAtiva.click) {
    telaAtiva.click();
  }
});

mudaParaTela(Telas.INICIO);
loop();
