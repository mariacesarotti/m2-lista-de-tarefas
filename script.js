const tasks = [
  {title: "Comprar comida para o gato", type: "urgent"},
  {title: "Consertar Computador", type: "important"},
  {title: "Beber água", type: "normal"},
  {title: "Enviar relatório trimestral", type: "important"},
  {title: "Fazer exercícios físicos", type: "normal"},
  {title: "Agendar consulta médica", type: "urgent"},
  {title: "Ler pelo menos um capítulo de um livro", type: "normal"},
  {title: "Limpar a despensa", type: "important"},
  {title: "Pagar a conta de energia", type: "urgent"},
  {title: "Assistir a um documentário interessante", type: "normal"},
];

function renderElements(array){
 const lista = document.getElementsByTagName("ul")[0];
  lista.innerHTML = "";

 const listaDeTasks = array;
 const tamanhoLista = array.length;

  for(let i = 0; i < tamanhoLista; i++){
    const titleToAdd = listaDeTasks[i].title;
    const typeToAdd = listaDeTasks[i].type;
    const taskItem = createTaskItem(titleToAdd, typeToAdd);
    lista.appendChild(taskItem);
  }

}

function createTaskItem(titleToAdd, typeToAdd){
  let objectToAdd = {title: titleToAdd,
                     type: typeToAdd}

  const listCreation = document.createElement("li");
  const divCreation = document.createElement("div");
  const spanCreation = document.createElement("span");
  const paraCreation = document.createElement("p");
  const buttonCreation = document.createElement("button");

  divCreation.appendChild(spanCreation);
  divCreation.appendChild(paraCreation);
  listCreation.appendChild(divCreation);
  listCreation.appendChild(buttonCreation);


  listCreation.className = "task__item";
  divCreation.className = "task-info__container";
  spanCreation.className = `task-type span-${objectToAdd.type}`;
  paraCreation.textContent = objectToAdd.title;
  buttonCreation.className = "task__button--remove-task";


  buttonCreation.addEventListener("click", function(event){
    event.preventDefault();
    let findIndex = tasks.indexOf(`${objectToAdd}`);
    tasks.splice(findIndex, 1);
    renderElements(tasks);
  });



  return listCreation;

}

const botao = document.getElementById("adicionaTarefaBotao");



botao.addEventListener("click", function(event){
  event.preventDefault();


  const titleInput = document.getElementById("input_title").value;
  const typeInput = document.getElementById("select-dropdown").value;
  const objeto = {title: titleInput, type: typeInput};
  
  tasks.push(objeto);
  renderElements(tasks);
})






renderElements(tasks);