import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('minimizeApp'),
  maximize: () => ipcRenderer.send('maximizeApp'),
  close: () => ipcRenderer.send('closeApp'),
})

contextBridge.exposeInMainWorld('env', {
  isElectron: true,
  platform: process.platform as NodeJS.Platform,
})
