function mostrarTarefas() {
    // colte os elementos do html
let rcbTarefa = document.getElementById('recebe-tarefa').value
let numTarefa = document.getElementById('numero-tarefa').value
let lista = document.getElementById("lista-tarefas");

//cria uma li
let item = document.createElement("li");
//pega a li e adiciona em texto nela
item.textContent = `sua tarefa é: ${rcbTarefa} | referente ao projeto: ${numTarefa}`;

let h2tarefas = document.getElementById('h2-tarefas');
h2tarefas.textContent = "Tarefas a Fazer:"
lista.appendChild(item); // adiciona um elemento filho (li) dentro da tag ul(tag pai)
limparRcbTarefa()
}

// limpar input toda vez que é enviado
function limparRcbTarefa() {
document.getElementById('recebe-tarefa').value= ''
document.getElementById('numero-tarefa').value= ''
}

//remove as tarefas
function limparTarefas(){
    document.getElementById('h2-tarefas').textContent = '';
    document.getElementById("lista-tarefas").textContent = '';
}