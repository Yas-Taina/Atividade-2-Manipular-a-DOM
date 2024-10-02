// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});


//Fazendo a tarefa:

const botaoMudarFrase = document.getElementById('btn-mudar-frase');
const paragrafo = document.getElementsByClassName('mensagem2');

botaoMudarFrase.addEventListener('click', () => {
  const novasFrases = ['Olá', 'As frases foram', 'Devidamente alteradas'];

  for (let i = 0; i < paragrafo.length; i++) {
    paragrafo[i].textContent = novasFrases[i];
  }
});