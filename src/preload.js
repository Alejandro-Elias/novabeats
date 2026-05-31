const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getMetaData: (path) => {
    return ipcRenderer.invoke("get-metadata", path);
  },
  closeApp: () => {
    ipcRenderer.send("close-app");
  },
  minimizar: () => {
    ipcRenderer.send("minimizar");
  },
  carpetaALista: () => {
    return ipcRenderer.invoke("seleccionar-carpeta");
  },
  devolverLista: () => {
    return ipcRenderer.invoke("devolver-lista")
  },
});
