import { minimizar } from "../../renderer.js";

export const minimizarBtn = () => {
  minimizar.addEventListener("click", () => {
    window.electronAPI.minimizar();
  });
};
