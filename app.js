document.addEventListener("DOMContentLoaded", function () { 
  const inputField = document.getElementById("amigo");
  const addButton = document.querySelector(".button-add");
  const friendsList = [];
  const listAmigos = document.getElementById("listaAmigos");
  const resultDisplay = document.getElementById("resultadoSorteo");
  const sortButton = document.querySelector(".button-sort");

  function agregarAmigo() {
      const friendName = inputField.value.trim();

      if (friendName === "") {
          alert("Por favor, inserte un nombre.");
          return;
      }

      friendsList.push(friendName);
      actualizarLista();
      inputField.value = "";
  }

  function actualizarLista() {
      listAmigos.innerHTML = ""; 
      
      for (let i = 0; i < friendsList.length; i++) {
          const listItem = document.createElement("li");
          listItem.textContent = friendsList[i];
          listAmigos.appendChild(listItem);
      }
  }

  function sortearAmigo() {
      if (friendsList.length === 0) {
          alert("No hay amigos en la lista para sortear.");
          return;
      }
      
      const randomIndex = Math.floor(Math.random() * friendsList.length);
      const selectedFriend = friendsList[randomIndex];
      
      resultDisplay.innerHTML = `Amigo sorteado: ${selectedFriend}`;
  }

  addButton.addEventListener("click", agregarAmigo);
  sortButton.addEventListener("click", sortearAmigo);
});
