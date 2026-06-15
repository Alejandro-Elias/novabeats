import { getStorage, setStorage } from "../localStorage.js";
import { playList } from "./buttons/play/loadList.js";
import { mostrarlistas } from "./mostrarLista.js";

export const guardarLista = () => {
  const listBtn = document.getElementById("listBtn");
  const inputGuardar = document.getElementById("inputGuardar");
  if (listBtn) {
    listBtn.addEventListener("click", () => {
      const guardarPlaylist = document.getElementById("guardarPlaylist");

      const nombreLista = inputGuardar.value;

      const listaActual = playList;

      let listaAguardar = getStorage("playlists") || [];

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
    });
  }
};
