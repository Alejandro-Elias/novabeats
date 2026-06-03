import { cerrar, player } from "../../renderer.js";
import { resetIndex } from "../indexCurrent.js";

export const cerrarBtn = () => {
  cerrar.addEventListener("click", () => {
    player.pause()
    resetIndex()
    window.electronAPI.closeApp();
  });
};
