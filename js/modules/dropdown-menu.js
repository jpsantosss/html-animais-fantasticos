import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "active";
    if (this.events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeDropdownMenu = this.dropdownMenus.bind(this);
  }

  //Nesse código estou usando uma array que contém dois tipos de eventos 'touchstart' que
  //é melhor para o Mobile, pois o tempo de resposta é mais rápido e o 'click' que também
  //funciona para Mobile, mas faz mais sentido para o clique do mouse.

  //Pegamos a Array e colocamos a função de forEach onde, para cada userEvent (item), ele
  //adiciona o EventListener para ativar a função handleClick

  //Função handleClick
  activeDropdownMenu(event) {
    event.preventDefault(); //Previnimos o padrão para que ele não abra o link de href
    const element = event.currentTarget;
    element.classList.add(this.activeClass); //Adiciona a classe ativo
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}

//Função outsideClick
