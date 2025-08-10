let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = '';
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos dos amigos para sortear.');
        return;
    }

    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';

    // Elegir un amigo aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const seleccionado = amigos[indice];

    const li = document.createElement('li');
    li.textContent = `🎉 El amigo secreto es: ${seleccionado}`;
    li.style.color = 'green';
    li.style.fontWeight = 'bold';
    resultadoLista.appendChild(li);
}