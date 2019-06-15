import {IpcRenderer} from 'electron'

export const ipcRenderer: IpcRenderer = (window as any).electron.ipcRenderer
