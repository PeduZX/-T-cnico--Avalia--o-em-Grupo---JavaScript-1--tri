function inicio() {
  let nome = prompt("Olá! Qual é o seu nome?");
  if (nome) {
    alert(`Bem vindo ao Petshop ${nome} !`);
  }

  let querVerServico = confirm(`Deseja ver nossos serviços?`);
  if (querVerServico) {
    mostrarServicos();
  }
}

function mostrarServicos() {
  const servicos = [
    "Banho",
    "Tosa",
    "Consulta Veterinária",
    "Vacinação",
    "Venda de Rações",
  ];
  const lista = document.getElementById("lista-servicos");
  lista.innerHTML = ``;

  for (let i = 0; i < servicos.length; i++) {
    const item = document.createElement("li");
    item.textContent = servicos[i];
    item.onclick = function () {
      alert(`Você clicou em ${servicos[i]}`);
    };
    lista.appendChild(item);
  }
}
document.write(`<p style= "color:green; font-weight: bold"> Bem-vindo ao site do Petshop </p>`);
