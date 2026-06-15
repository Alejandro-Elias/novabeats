import { guardarPlaylist, line, listaPlaylist, listaReproduccion } from "../renderer.js";
import { suffle } from "../suffle.js";
import { cargarPlaylist } from "./cargarPlaylist.js";
import { eliminarPlaylist } from "./eliminarPlaylist.js";
import { eliminarTrack } from "./eliminarTrack.js";
import { setindexCurrent } from "./indexCurrent.js";
import { mostrarLista, mostrarlistas } from "./mostrarLista.js";

export const SeleccionarLista = () => {
  listaPlaylist.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!button) return;

    const id = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === "seleccionar") {
      cargarPlaylist(id);
      mostrarLista();

      listaPlaylist.classList.add("hidden");
      guardarPlaylist.classList.add("hidden");
      line.classList.add("hidden");
      listaReproduccion.classList.remove("hidden");
    }

    if (action === "eliminar") {
      eliminarPlaylist(id);
      mostrarlistas();
    }
  });
};
