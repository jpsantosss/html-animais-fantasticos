import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((item) => {
    ["touchstart", "click"].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });
  //Nesse código estou usando uma array que contém dois tipos de eventos 'touchstart' que
  //é melhor para o Mobile, pois o tempo de resposta é mais rápido e o 'click' que também
  //funciona para Mobile, mas faz mais sentido para o clique do mouse.

  //Pegamos a Array e colocamos a função de forEach onde, para cada userEvent (item), ele
  //adiciona o EventListener para ativar a função handleClick

  //Função handleClick
  function handleClick(event) {
    event.preventDefault(); //Previnimos o padrão para que ele não abra o link de href
    this.classList.add("active"); //Adiciona a classe ativo
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}

//Função outsideClick
