export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  function aberto() {
    funcionamento.classList.add("funcionamento-aberto");
  }
  function fechado() {
    funcionamento.classList.add("funcionamento-fechado");
  }

  semanaAberto && horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[horarioSemana.length - 1] ? aberto() : fechado();
}
