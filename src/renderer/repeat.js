import { repeatBtn, repeatContainer, repeatText } from "../modules/renderer.js";
import { setRepeatCondition } from "./buttons/play/next.js";

let verificador = 0;

export const repeat = () => {
  repeatBtn.addEventListener("click", () => {
    if (verificador === 0) {
      repeatBtn.innerHTML ="<span  class='repeat one-all' >ONE</span>";
      repeatBtn.classList.add("repeatActive");
      repeatBtn.title = "Repetir una canción"
      verificador++;
      setRepeatCondition("repeat-one");
    } else if (verificador === 1) {
      repeatBtn.innerHTML = "<span  class='repeat one-all'>ALL</span>";
      repeatBtn.title = "Repetir toda la lista"
      verificador++;
      setRepeatCondition("repeat-all");
    } else if (verificador === 2) {
      repeatBtn.innerHTML = "<i class='fa-solid fa-repeat repeat' ></i>";
      repeatBtn.classList.remove("repeatActive");
      repeatBtn.title = "Sin repetir"
      verificador = 0;
      setRepeatCondition("repeat-normal");
    }
  });
};
