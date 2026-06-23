import { getStorage, setStorage } from "../modules/localStorage.js";
import { playList } from "./buttons/play/loadList.js";
import { mostrarlistas } from "./mostrarLista.js";

const guardarPlayList = () => {
  const guardarPlaylist = document.getElementById("guardarPlaylist");

  const listaActual = playList;

  let listaAguardar = getStorage("playlists") || [];

  if (listaActual.length > 0) {
    const nombreLista =
      inputGuardar.value ||
      `playList ${listaAguardar > 0 ? listaAguardar[listaAguardar.length - 1].id + 1 : 1}`;

    listaAguardar.push({
      id:
        listaAguardar.length > 0
          ? listaAguardar[listaAguardar.length - 1].id + 1
          : 1,
      name: nombreLista,
      playList: playList,
    });

    setStorage("playlists", listaAguardar);

    inputGuardar.value = ``;

    mostrarlistas();
  } else {
    alert("No se puede guardar una lista vacia");
  }
};

export const guardarLista = () => {
  const inputGuardar = document.getElementById("inputGuardar");
  const listBtn = document.getElementById("listBtn");
  listBtn.addEventListener("click", () => {
    guardarPlayList()
  });

  inputGuardar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      guardarPlayList();
    }
  });
};
