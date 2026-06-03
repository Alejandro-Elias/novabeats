import { player, stopBtn } from "../../renderer.js";
import { indexCurrent, resetIndex } from "../indexCurrent.js";


export const stop = () => {
  stopBtn.addEventListener("click", () => {
    player.pause();
    resetIndex()    
    player.load()
    playBtn.innerHTML = '<i class="fa-solid fa-circle-play play"></i>';
  });
};
