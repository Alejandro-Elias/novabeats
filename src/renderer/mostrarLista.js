import { getStorage } from "../localStorage.js";
import { guardarPlaylist, isListBtn, listaReproduccion } from "../renderer.js";
import { playList } from "./buttons/play/loadList.js";
import { guardarLista } from "./guardarPlaylist.js";

export const mostrarlistas = () => {
  const listasGuardadas = getStorage("playlists") || [];
  guardarPlaylist.innerHTML = `<p>Guardar Playlist</p><input id="inputGuardar" type="text" /><button id="listBtn" >Guardar</button>`;
  line.innerHTML = `<hr>`;
  listaReproduccion.innerHTML = ` `;
  for (let i = 0; i < listasGuardadas.length; i++) {
    listaReproduccion.innerHTML += `<li class="track" data-id="${listasGuardadas[i].id}"><button class="item-playlist" data-action="seleccionar" data-index="${i}" data-id="${listasGuardadas[i].id}" > ${listasGuardadas[i].name}</button><button id="eliminar" data-action="eliminar" class="eliminar" data-id="${listasGuardadas[i].id}"><i class="fa-solid fa-square-xmark eliminarBtn"></i></button></li>`;
  }
};

export const mostrarLista = () => {
  listaReproduccion.innerHTML = " ";
  const lista = getStorage("playList") || [];
  let toggle = true;

  const listaHTML = (list, i) => {
    return (listaReproduccion.innerHTML += `<li class="track" data-id="${list[i].id}"><button class="item-playlist" data-action="seleccionar" data-index="${i}" data-id="${list[i].id}" > ${list[i].track.archivo}</button><button id="eliminar" data-action="eliminar" class="eliminar" data-id="${list[i].id}"><i class="fa-solid fa-square-xmark eliminarBtn"></i></button></li>`);
  };

  if (playList.length > 0) {
    for (let i = 0; i < playList.length; i++) {
      listaHTML(playList, i);
    }
  } else if (lista.length > 0) {
    for (let i = 0; i < lista.length; i++) {
      listaHTML(lista, i);
    }
  }

  isListBtn.addEventListener("click", () => {
    if (toggle) {
      mostrarlistas();
      guardarLista();
      toggle = false;
    } else if (!toggle) {
      guardarPlaylist.innerHTML = ``;
      line.innerHTML = ``;
      listaReproduccion.innerHTML = ``;

      if (playList.length > 0) {
        for (let i = 0; i < playList.length; i++) {
          listaHTML(playList, i);
        }
      } else if (lista.length > 0) {
        for (let i = 0; i < lista.length; i++) {
          listaHTML(lista, i);
        }
      }
      toggle = true;
    }
  });

  if (lista <= 0) {
    guardarPlaylist.innerHTML = `<p>Guardar Playlist</p><input type="text" /><button>Guardar</button>`;
    line.innerHTML = `<hr>`;
  }
};
