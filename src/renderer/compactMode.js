import { compactBtn } from "../modules/renderer.js";

let isCompact = false;

export const compactMode = () => {
  compactBtn.addEventListener("click", async () => {

    isCompact = !isCompact;

    await window.electronAPI.setCompactMode(isCompact);

    document.body.classList.toggle("compact");
  });
};
