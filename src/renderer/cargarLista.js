import { listaReproduccion, list } from "../renderer.js";


export function cargarLista() {
  const lista =
    list.length > 0 ? list : JSON.parse(localStorage.getItem("playList")) || [];
    
  listaReproduccion.innerHTML = " ";

  if (lista.length > 0) {
    for (let i = 0; i < lista.length - 1; i++) {
      listaReproduccion.innerHTML += `<li class="track" >${i + 1} ${lista[i].archivo}</li>`;
    }
  }
}
