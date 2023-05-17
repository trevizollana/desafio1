let imagemInicial = 1;
mostraImagem(imagemInicial);//a função define a imagem inicial

//função que define a proxima imagem que aparecerá
function proximaImagem(n) {
  mostraImagem(imagemInicial= imagemInicial + n);
}
//função que define qual a imagem atual para a função mostraImagem
function imagemAtual(n) {
  mostraImagem(imagemInicial = n);
}

//função que troca as imagens
function mostraImagem(n) {
  let i, imagem, guia;
  imagem = document.getElementsByClassName("imagem");//define a variavel imagem com a classe imagem do html
  guia = document.getElementsByClassName("guia");//define a variavel guia com a classe guia do html
  //se o n for maior que o numero de imagem, a imagem inicial deve ser a atual
  if (n > imagem.length) {imagemInicial = 1}
  //se a função n for menor que 1, a imagem inicial deve ser igual ao numero da imagem.
  if (n < 1) {imagemInicial = imagem.length}
  //para i de 0 ate tamanho da imagem faça
  for (i = 0; i < imagem.length; i++) {
    imagem[i].style.display = "none";//faz com que as imagens "guias" fiquem uma do lado da outra
  }
  //deixa a imagem principal no formato de bloco somente uma por linha
  imagem[imagemInicial-1].style.display ="block";
}

