function cadastrarProjeto() {
  let nomeProjeto = document.getElementById("nomeProjeto").value;
  let descricaoProjeto = document.getElementById("descricaoProjeto").value;
  let chaveProjeto = document.getElementById("chaveProjeto").value;
  let gerenteProjeto = document.getElementById("gerenteProjeto").value;
  let statusProjeto = document.getElementById("statusProjeto").value;
  let dataInicio = document.getElementById("dataInicio").value;
  let dataTermino = document.getElementById("dataTermino").value;
  let arquivoProjeto = document.getElementById("arquivoProjeto").files[0];

  // Validação dos campos
  if (
    !nomeProjeto ||
    !descricaoProjeto ||
    // !chaveProjeto ||
    !gerenteProjeto ||
    !statusProjeto ||
    !dataInicio ||
    !dataTermino
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  let nomeArquivo = "Nenhum arquivo enviado";
  if (!arquivoProjeto) {
    // ! inverte o valor e torna obrigatório o envio de um arquivo
    nomeArquivo = arquivoProjeto.name;
  }

  let projeto = {
    nomeProjeto,
    descricaoProjeto,
    //  chaveProjeto,
    gerenteProjeto,
    statusProjeto,
    dataInicio,
    dataTermino,
    nomeArquivo,
  };

  alert(
    `Projeto: ${projeto.nomeProjeto}\n` +
      `Descrição: ${projeto.descricaoProjeto}\n` +
      //`Chave: ${projeto.chaveProjeto}\n` +
      `Gerente: ${projeto.gerenteProjeto}\n` +
      `Status: ${projeto.statusProjeto}\n` +
      `Data de Início: ${projeto.dataInicio}\n` +
      `Data de Término: ${projeto.dataTermino}\n` +
      `Arquivo: ${projeto.nomeArquivo}`
  );
}

let chavesUnicas = [];

function verificarChave(chaveProjeto) {
  if (chavesUnicas.includes(chaveProjeto)) {
    alert("Chave já cadastrada!");
    return false;
  } else {
    chavesUnicas.push(chaveProjeto);
    return true;
  }
}
// Verificar se a chave já foi cadastrada