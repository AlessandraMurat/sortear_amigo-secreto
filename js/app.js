var listaAmigos = [];

function adicionar() {
  var nomeAmigo = document.getElementById("nome-amigo").value;

  if (nomeAmigo === "") {
    alert("Digite um nome para adicionar");
    return;
  }

  if (listaAmigos.includes(nomeAmigo)) {
    alert("Amigo já adicionado");
    document.getElementById("nome-amigo").value = "";
  } else {
    listaAmigos.push(nomeAmigo);
  }

  document.getElementById("nome-amigo").value = "";
  atualizarListaAmigos();
}

function remover(nomeAmigo) {
  const index = listaAmigos.indexOf(nomeAmigo);
  console.log(index);
  if (index !== -1) {
    listaAmigos.splice(index, 1);
  }
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  const listaElement = document.getElementById("lista-amigos");
  listaElement.innerHTML = "";
  listaAmigos.forEach((amigo) => {
    const amigoElement = document.createElement("div");
    amigoElement.innerHTML = `
      ${amigo} <button onclick="remover('${amigo}')">X</button>
    `;
    listaElement.appendChild(amigoElement);
  });
}

function sortear() {
  if (listaAmigos.length < 4) {
    return alert("Adicione mais amigos para sortear");
  }
  embaralha(listaAmigos);

  let sorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < listaAmigos.length; i++) {
    if (i === listaAmigos.length - 1) {
      sorteio.innerHTML += `${listaAmigos[i]} tirou ${listaAmigos[0]} <br>`;
    } else {
      sorteio.innerHTML += `${listaAmigos[i]} tirou ${listaAmigos[i + 1]} <br>`;
    }
  }
}

function reiniciar() {
  listaAmigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}
