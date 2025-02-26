document.addEventListener("DOMContentLoaded", function () { 
    const inputField = document.getElementById("amigo");
    const addButton = document.querySelector(".button-add");
    const sortButton = document.querySelector(".button-draw");
    const listAmigos = document.getElementById("listaAmigos");
    const resultDisplay = document.getElementById("resultado");
    let friendsList = [];

    function agregarAmigo() {
        const friendName = inputField.value.trim();

        if (friendName === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }

        if (friendsList.includes(friendName)) {
            alert("Este nombre ya ha sido añadido.");
            return;
        }

        friendsList.push(friendName);
        actualizarLista();
        inputField.value = "";
        inputField.focus();
    }

    function actualizarLista() {
        listAmigos.innerHTML = ""; 
        
        friendsList.forEach((friend) => {
            const listItem = document.createElement("li");
            listItem.textContent = friend;
            listAmigos.appendChild(listItem);
        });
    }

    function sortearAmigo() {
        if (friendsList.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * friendsList.length);
        const selectedFriend = friendsList[randomIndex];
        
        resultDisplay.innerHTML = `<p><strong>Amigo sorteado:</strong> ${selectedFriend}</p>`;
    }

    addButton.addEventListener("click", agregarAmigo);
    sortButton.addEventListener("click", sortearAmigo);
});
