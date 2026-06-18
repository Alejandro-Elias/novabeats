import { getCurrent } from "./currentTrack.js";

let tiemposInit = false;
let fullTime = "00:00";

const actualizarDuracion = () => {
  const metadatos = getCurrent();
  fullTime = metadatos.metadata.duration || "00:00";
};

export const tiempos = (player, progress, time) => {
  actualizarDuracion();

  if (!tiemposInit) {
    player.addEventListener("timeupdate", () => {
      const duration = player.duration;
      const currentTime = player.currentTime;
      const progressPercent = duration ? (currentTime / duration) * 100 : 0;
      progress.value = progressPercent;

      const minutos = Math.floor(currentTime / 60);
      const restoSegundos = Math.floor(currentTime % 60);
      time.innerText = `${minutos.toString().padStart(2, "0")}:${restoSegundos.toString().padStart(2, "0")} / ${fullTime}`;
    });

    progress.addEventListener("input", () => {
      const duration = player.duration;
      if (!duration) return;
      player.currentTime = (progress.value / 100) * duration;
    });

    tiemposInit = true;
  }
};
