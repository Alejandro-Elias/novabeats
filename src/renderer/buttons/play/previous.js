import { getStorage } from "../../../localStorage.js";
import { player, previousBtn } from "../../../renderer.js";
import { setCurrent } from "../../currentTrack.js";
import { indexCurrent, previousIndex } from "../../indexCurrent.js";
import { updateActiveTrack } from "../../resaltarTrack.js";
import { setTrack } from "../../setTrack.js";
import { ejecutarPlay } from "../play.js";

export const previousTrack = () => {
  const previous = () => {
    const enPlay = !player.paused
    const playList = getStorage("playList");
    if (indexCurrent > 0) {
      previousIndex();
      updateActiveTrack()
    }

    setTrack(player, playList, indexCurrent);
    if (enPlay) {
      ejecutarPlay();
    }
  };

  previousBtn.addEventListener("click", () => {
    previous();
  });
  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      previous();
    });
  }
};
