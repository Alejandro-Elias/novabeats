import { getCurrent } from "./currentTrack.js";



export const mostrarMetadata = (titleEl, artistEl, imgCover) => {
  const metadatos = getCurrent()  

  titleEl.textContent = metadatos.metadata.title || "Sin título";
  artistEl.textContent = metadatos.metadata.artist || "Artista desconocido";
  imgCover.src =
    `file://${metadatos.metadata.cover}` ||
    "./image/679bf7bb-2170-4d54-9485-240baa4ae33c.webp";
};
