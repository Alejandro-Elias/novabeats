const { app, protocol, BrowserWindow, net } = require("electron");

const { carpetaALista, devolverLista } = require("./ipc/seleccionarCarpeta");
const createWindow = require("./ipc/createWindow");
const registerIpc = require("./ipc/registerIpc");
const { archivoALista, devolverArchivos } = require("./ipc/seleccionarArchivo");

app.whenReady().then(() => {

  registerIpc();
  createWindow();
  carpetaALista();
  devolverLista();
  archivoALista()
  devolverArchivos()
});
