import { setCurrent } from "./currentTrack.js";
import { loadData } from "./getData.js";

export const setTrack = async (player, playList, indexCurrrent) => {
  if (!playList.length) {
    return;
  }
  
console.log("indexCurrrent:", indexCurrrent);
console.log("playList.length:", playList.length);
console.log("track:", playList[indexCurrrent]);
  

  const path = `${playList[indexCurrrent].track.carpeta}/${playList[indexCurrrent].track.archivo}`;

  setCurrent({ path: path });

  loadData();

  player.src = playList.length > 0 ? path : "";
};
