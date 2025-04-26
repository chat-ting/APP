import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('minimizeApp'),
  maximize: () => ipcRenderer.send('maximizeApp'),
  close: () => ipcRenderer.send('closeApp'),
})
