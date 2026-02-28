import initScrollSuave from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/anima-scroll.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

initScrollSuave();
initAnimationScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
// changeBgColor();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

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
