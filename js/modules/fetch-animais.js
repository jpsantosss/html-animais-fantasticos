import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  //Fetch a a api interna de animais (json)
  async function fetchAnimais(url) {
    try {
      //Response do JSON interno
      const animaisResponse = await fetch(url);
      //Response tranformado em JSON
      const animaisJson = await animaisResponse.json();
      //Seleção do grid onde ficava o HTML estático
      const numerosGrid = document.querySelector(".numeros-grid");

      //forEach para cada objeto dentro do JSON
      animaisJson.forEach((animal) => {
        //Chamada da função para criar o HTML de cada animal de acordo com a insformações da API
        const divAnimal = createAnimal(animal);
        //Adiciona a divAnimal(HTML criado) no grid que foi selecionado anteriormente
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    //Cria a div igual tinhamos no html
    const div = document.createElement("div");
    //Adiciona a classe
    div.classList.add("numero-animal");
    //Altera o conteúdo de dentro da tag div
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    // console.log(div)
    return div; //retorna o conteúdo html criado
  }

  //Chamada da função passando o URL
  fetchAnimais("./animaisapi.json");
}
