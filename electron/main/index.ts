// main.ts
import { app, BrowserWindow, ipcMain } from 'electron'
import { dirname, join } from 'node:path'
import isDev from 'electron-is-dev'

const __dirname = dirname(__filename)

let mainWindow: BrowserWindow | null = null

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    minWidth: 800,
    minHeight: 500,
    frame: false,
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    vibrancy: process.platform === 'darwin' ? 'sidebar' : undefined,
    transparent: process.platform === 'darwin',
    icon: join(__dirname, '../../../public/icons/png/icon.png'),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false,
      devTools: isDev,
    },
  })

  const url = isDev
    ? 'http://localhost:5173'
    : `file://${join(__dirname, '../../dist/index.html')}`

  mainWindow.loadURL(url)

  if (isDev) mainWindow.webContents.openDevTools({ mode: 'detach' })

  mainWindow.on('closed', () => {
    mainWindow = null
    app.quit()
  })
}

/* ──────────────── app life-cycle ──────────────── */

app.whenReady().then(createWindow)

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

/* ──────────────── IPC handlers ──────────────── */

ipcMain.on('minimizeApp', () => {
  mainWindow?.minimize()
})

ipcMain.on('maximizeApp', () => {
  if (!mainWindow) return
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
})

ipcMain.on('closeApp', () => {
  mainWindow?.close()
})
