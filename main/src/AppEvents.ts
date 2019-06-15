import { ipcMain } from "electron";

ipcMain.on("onButtonClick", () => {
    console.log("Main on button click")
});