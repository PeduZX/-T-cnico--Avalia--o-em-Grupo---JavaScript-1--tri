// Lista para armazenar chaves únicas e os projetos
let chavesUnicas = [];
let todosProjetos = [];

function cadastrarProjeto() {
  let nomeProjeto = document.getElementById("nomeProjeto").value;
  let descricaoProjeto = document.getElementById("descricaoProjeto").value;
  let chaveProjeto = document.getElementById("chaveProjeto").value;
  let gerenteProjeto = document.getElementById("gerenteProjeto").value;
  let statusProjeto = document.getElementById("statusProjeto").value;
  let dataInicio = document.getElementById("dataInicio").value;
  let dataTermino = document.getElementById("dataTermino").value;
  let arquivoProjeto = document.getElementById("arquivoProjeto").files[0];

  // Validação
  if (!nomeProjeto || !descricaoProjeto || !chaveProjeto || !gerenteProjeto ||
      !statusProjeto || !dataInicio || !dataTermino) {
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

  let nomeArquivo = arquivoProjeto ? arquivoProjeto.name : "Nenhum arquivo enviado";

  let projeto = {
    nomeProjeto,
    descricaoProjeto,
    gerenteProjeto,
    statusProjeto,
    dataInicio,
    dataTermino,
    nomeArquivo
  };

  todosProjetos.push(projeto);

  // Exibe todos os projetos cadastrados até agora
  mostrarTodosProjetos();

  // Resetar o formulário
  document.getElementById("nomeProjeto").value = '';
  document.getElementById("descricaoProjeto").value = '';
  document.getElementById("chaveProjeto").value = '';
  document.getElementById("gerenteProjeto").value = '';
  document.getElementById("statusProjeto").value = 'Em Andamento';
  document.getElementById("dataInicio").value = '';
  document.getElementById("dataTermino").value = '';
  document.getElementById("arquivoProjeto").value = '';
}

function mostrarTodosProjetos() {
  const lista = document.querySelector(".lista-projetos");
  lista.innerHTML = ""; // limpa tudo

  todosProjetos.forEach((projeto, index) => {
    const divProjeto = document.createElement("div");
    divProjeto.classList.add("projeto");

    divProjeto.innerHTML = `
      <h3>Projeto ${index + 1}</h3>
      <p><strong>Nome:</strong> ${projeto.nomeProjeto}</p>
      <p><strong>Descrição:</strong> ${projeto.descricaoProjeto}</p>
      <p><strong>Gerente:</strong> ${projeto.gerenteProjeto}</p>
      <p><strong>Status:</strong> ${projeto.statusProjeto}</p>
      <p><strong>Início:</strong> ${projeto.dataInicio}</p>
      <p><strong>Término:</strong> ${projeto.dataTermino}</p>
      <p><strong>Arquivo:</strong> ${projeto.nomeArquivo}</p>
      <hr>
    `;

    lista.appendChild(divProjeto);
  });
}
