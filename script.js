const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(task) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  p.innerText = task.titulo;

  span.innerText = task.tipo;

  div.appendChild(span);
  div.appendChild(p);

  const button = document.createElement("button");
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  button.addEventListener("click", () => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    renderElements(tasks);
  });

  li.appendChild(div);
  li.appendChild(button);

  if (task.tipo === "Urgente") {
    span.classList.add("span-urgent");
    span.innerText = "";
  } else if (task.tipo === "Prioritário") {
    span.classList.add("span-priority");
    span.innerText = "";
  } else {
    span.classList.add("span-normal");
    span.innerText = "";
  }

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  taskList.forEach((task) => {
    let card = createCard(task);
    htmlList.appendChild(card);
  });
}

renderElements(tasks);

const buttonSubmit = document.querySelector("#btnSubmit");
buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const titulo = document.querySelector("#input_title");
  const tipo = document.querySelector("#input_priority");
  const task = {
    titulo: titulo.value,
    tipo: tipo.value,
  };
  tasks.push(task);
  renderElements(tasks);
  titulo.value = "";
  tipo.value = "";
});
