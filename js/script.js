import ScrollSuave from "./modules/scroll-suave.js";
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

import initAnimationScroll from "./modules/anima-scroll.js";

import Accordion from "./modules/accordion.js";
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

import TabNav from "./modules/tab-nav.js";
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

import Modal from "./modules/modal.js";
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();


import Tooltip from "./modules/tooltip.js";
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

import fetchAnimais from "./modules/fetch-animais.js";
fetchAnimais("../../animaisapi.json", ".numeros-grid");

import fetchBitcoin from "./modules/fetch-bitcoin.js";
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";


initAnimationScroll();
initDropdownMenu();
// changeBgColor();
initMenuMobile();
initFuncionamento();
initFetchBitcoin();


// --- FORMULÁRIO ---
//Nome que muda em tempo real
const contatoNome = document.forms[0].nome;
const nomeInput = document.querySelector("#nomeInput");
function handleKeyUp(event) {
  const nomeInputValue = event.target.value;
  nomeInput.innerText = nomeInputValue;
}
contatoNome.addEventListener("keyup", handleKeyUp);


//Verificação se o email é válido
const contatoEmail = document.forms[0].email;
const contatoEmailErro = document.querySelector(".erro");

function verificaEmail(event) {
  const target = event.target;

  if (!target.checkValidity()) {
    contatoEmail.classList.add("input-invalido");
    target.setCustomValidity("Esse campo é importante!");
    contatoEmailErro.innerText = target.validationMessage;
  } else {
    contatoEmail.classList.remove("input-invalido");
  }
}

contatoEmail.addEventListener("change", verificaEmail);


//Mudança de cor do background com Select
const formularioCor = document.forms.contato.cores;
const backgroundModal = document.querySelector(".modal");

function alteraCor(event) {
  const target = event.target.value;
  backgroundModal.style.backgroundColor = target;
}
formularioCor.addEventListener("change", alteraCor);


//Mudança de cor do texto
const formularioCorTexto = document.forms.contato.corTexto;
const textoModal = document.querySelector(".modal");

function alteraCorTexto(event) {
  const target = event.target.value;
  textoModal.style.color = target;
}
formularioCorTexto.addEventListener("change", alteraCorTexto);


//Mudança de tamanho do texto
const formularioTamanhoTexto = document.forms.contato.tamanhoTexto;

function alteraTamanhoTexto(event) {
  const target = event.target.value;
  textoModal.style.fontSize = target + "px";
}
formularioTamanhoTexto.addEventListener("change", alteraTamanhoTexto);


//Pegando todos os valores
const contato = document.querySelector(".modal");
const dados = {};

function coletaDados(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
}
contato.addEventListener("change", coletaDados);
