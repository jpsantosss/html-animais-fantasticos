export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox; //Muda o parâmetro 'tooltipNox' de onMouseLeave para o valor dentro da variável tooltipBox criada nessa função
    onMouseLeave.element = this; //Faz referência ao elemento
    this.addEventListener("mouseleave", onMouseLeave); //Em vez de passarmos uma função, podemos passar um objeto
  }

  //Criação de um objeto com uma função dentro
  const onMouseLeave = {
    handleEvent() {
      //Obrigatóriamente a função tem que se chamar 'handleEvent'
      this.tooltipBox.remove(); //Remove o elemento HTML criado
      this.element.removeEventListener("mouseleave", onMouseLeave); // NOVO
      //Adiciona a função removeEventListener no elemento criado na função anterior
      //para remover o EventListener de mouseleave após a função ser finalizada
      this.element.removeEventListener("mousemove", onMouseMove); //Irá remover o evento de mousemove também
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px"; //Altera o valor de 'top' para o parâmetro 'event.pageY' + 'px'
      this.tooltipBox.style.left = event.pageX + 20 + "px"; //Altera o valor de 'left' para o parâmetro 'event.pageX' + 'px'
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div"); //Criação de um elemento HTML
    const text = element.getAttribute("aria-label"); //Pega o texto que tem dentro de 'aria-label'

    tooltipBox.classList.add("tooltip"); //Para estilizar
    tooltipBox.innerHTML = text; //Coloca o texto de 'text' dentro do elemento HTML de 'tooltipbox'

    document.body.appendChild(tooltipBox); //Adiciona o elemento criado ao final do 'body'
    return tooltipBox; //Retorna o elemento HTML criado
  }
}
