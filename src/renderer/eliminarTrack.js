import { setStorage } from "../localStorage.js"
import { loadList, playList } from "./buttons/play/loadList.js"
import { getCurrent } from "./currentTrack.js"
import { resetIndex, setindexCurrent } from "./indexCurrent.js"


export const eliminarTrack = (id) => {
    const trackActual = getCurrent()

    console.log(trackActual);
    
    
    const listaNueva = playList.filter( item => {
        return item.id != id
    })    

    const indiceActual = listaNueva.findIndex(archivo => archivo.id === trackActual.id)

    console.log(indiceActual);
    

    setindexCurrent(indiceActual)

    if (indiceActual === -1) {
        resetIndex()        
    }

    setStorage('playList', listaNueva)
    loadList()
}