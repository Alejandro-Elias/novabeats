import { player, volumen, volumenText } from "../renderer.js";

export const cambiarVolumen = () => {
  volumen.addEventListener("input", () => {
    player.volume = volumen.value;
    const cantidadVolumen = Math.floor(volumen.value * 100);
    volumenText.innerHTML = `<span class="volumen-cantidad" >${cantidadVolumen}</span>`;
  });
};
