// Lista para armazenar chaves únicas e os projetos
let chavesUnicas = [];
let todosProjetos = [];

// Pega os elementos do html
function cadastrarProjeto() {
  let nomeProjeto = document.getElementById("nomeProjeto").value;
  let descricaoProjeto = document.getElementById("descricaoProjeto").value;
  let chaveProjeto = document.getElementById("chaveProjeto").value;
  let gerenteProjeto = document.getElementById("gerenteProjeto").value;
  let participantes = document.getElementById('participantesProjeto').value;
  let statusProjeto = document.getElementById("statusProjeto").value;
  let dataInicio = document.getElementById("dataInicio").value;
  let dataTermino = document.getElementById("dataTermino").value;
  let arquivoProjeto = document.getElementById("arquivoProjeto").files[0];

  // Validação para garantir que todos os campos estão preenchidos
  if (
    !nomeProjeto ||
    !descricaoProjeto ||
    !chaveProjeto ||
    !gerenteProjeto ||
    !participantes ||
    !statusProjeto ||
    !dataInicio ||
    !dataTermino
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // Chave única
  if (chavesUnicas.includes(chaveProjeto)) {
    alert("Chave já cadastrada!");
    return;
  }

  chavesUnicas.push(chaveProjeto);
  alert(`Essa é sua chave única. Lembre dela: ${chaveProjeto}`);

  let nomeArquivo = "";
if (arquivoProjeto) {
  nomeArquivo = arquivoProjeto.name; // esse "NAME" ele cha,a direto o nome do arquivo
} else {
  alert("Nenhum arquivo enviado");
  alert("Por favor, preencha todos os campos obrigatórios.");
  return;
}

  let projeto = {
    nomeProjeto,
    descricaoProjeto,
    gerenteProjeto,
    participantes,
    statusProjeto,
    dataInicio,
    dataTermino,
    nomeArquivo,
  };

  todosProjetos.push(projeto);

  // Exibe todos os projetos cadastrados até agora
  mostrarTodosProjetos();

  // Resetar o formulário
  document.getElementById("nomeProjeto").value = "";
  document.getElementById("descricaoProjeto").value = "";
  document.getElementById("chaveProjeto").value = "";
  document.getElementById("gerenteProjeto").value = "";
  document.getElementById('participantesProjeto').value = ""
  document.getElementById("statusProjeto").value = "Em Andamento";
  document.getElementById("dataInicio").value = "";
  document.getElementById("dataTermino").value = "";
  document.getElementById("arquivoProjeto").value = "";
}

function mostrarTodosProjetos() {
  const lista = document.querySelector(".lista-projetos");
  lista.innerHTML = ""; // limpa tudo

  //vai criar uma div para cada projeto adicionando no html com tags p dentro
  todosProjetos.forEach((projeto, i) => {
    const divProjeto = document.createElement("div");
    divProjeto.classList.add("projeto");

    // mensagem que sera exibida
    divProjeto.innerHTML = `
    <br>
      <h3>Projeto ${i + 1}</h3>
      <p><strong>Nome:</strong> ${projeto.nomeProjeto}</p>
      <p><strong>Descrição:</strong> ${projeto.descricaoProjeto}</p>
      <p><strong>Gerente:</strong> ${projeto.gerenteProjeto}</p>
      <p><strong>Participantes:</strong> ${projeto.participantes}</p>
      <p><strong>Status:</strong> ${projeto.statusProjeto}</p>
      <p><strong>Início:</strong> ${projeto.dataInicio}</p>
      <p><strong>Término:</strong> ${projeto.dataTermino}</p>
      <p><strong>Arquivo:</strong> ${projeto.nomeArquivo}</p>
      <hr>
    `;

    lista.appendChild(divProjeto); // adiciona as tag P dentro da div do html
  });
}
function ExcluirProjeto() {
  todosProjetos.shift(); // remove o primeiro item do array
  chavesUnicas.shift();
  mostrarTodosProjetos();
}
